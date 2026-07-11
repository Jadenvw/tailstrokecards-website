import { Resend } from "resend";
import { NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const resend = new Resend(process.env.RESEND_API_KEY);

// Layer 1: Rate limiting — caps abuse/spam volume before anything else runs.
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(3, "60 s"), // 3 submissions per IP per minute
    analytics: true,
    prefix: "contact-form",
});

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 2000;

function sanitize(str: string) {
    // Strip control/newline characters to prevent header injection and
    // collapse excess whitespace.
    return str.replace(/[\r\n\t]/g, " ").trim();
}

function isValidPayload(body: unknown): body is { name: string; email: string; message: string; website?: string } {
    if (typeof body !== "object" || body === null) return false;
    const { name, email, message } = body as Record<string, unknown>;

    return (
        typeof name === "string" &&
        name.trim().length > 0 &&
        name.length <= MAX_NAME_LENGTH &&
        typeof email === "string" &&
        email.length <= MAX_EMAIL_LENGTH &&
        EMAIL_REGEX.test(email) &&
        typeof message === "string" &&
        message.trim().length > 0 &&
        message.length <= MAX_MESSAGE_LENGTH
    );
}

export async function POST(request: Request) {
    try {
        // Layer 2: Content-Type check — reject anything that isn't declared JSON
        // before we even try to parse it.
        const contentType = request.headers.get("content-type") || "";
        if (!contentType.includes("application/json")) {
            return NextResponse.json(
                { error: "Unsupported content type." },
                { status: 415 }
            );
        }

        // Layer 3: Rate limiting, keyed by IP. Single call — limit() both
        // checks and increments, so it must only run once per request.
        const ip =
            request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            (process.env.NODE_ENV === "development" ? "dev-local" : "unknown");

        const { success } = await ratelimit.limit(ip);
        if (!success) {
            return NextResponse.json(
                { error: "Too many requests. Please try again in a minute." },
                { status: 429 }
            );
        }

        // Layer 4: Safe JSON parsing — malformed bodies fail gracefully.
        let body: unknown;
        try {
            body = await request.json();
        } catch {
            return NextResponse.json(
                { error: "Invalid request body." },
                { status: 400 }
            );
        }

        // Layer 5: Honeypot — silently reject bot traffic without revealing detection.
        const honeypot = (body as Record<string, unknown>)?.company_fax;
        if (typeof honeypot === "string" && honeypot.length > 0) {
            return NextResponse.json({ success: true });
        }

        // Layer 6: Strict shape/type/length validation.
        if (!isValidPayload(body)) {
            return NextResponse.json(
                { error: "Please provide a valid name, email, and message." },
                { status: 400 }
            );
        }

        const { name, email, message } = body;

        // Layer 7: Sanitization before the data touches an outbound email.
        const cleanName = sanitize(name);
        const cleanEmail = sanitize(email);
        const cleanMessage = sanitize(message);

        await resend.emails.send({
            from: "hello@tailstrokecards.com",
            to: "hello@tailstrokecards.com",
            replyTo: cleanEmail,
            subject: `New message from ${cleanName}`,
            text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        // Layer 8: Generic error response — never leak internals to the client.
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send message. Please try again later." },
            { status: 500 }
        );
    }
}