"use client";

import { useState, useCallback } from "react";
import PageHero from "@/components/PageHero";
import Snackbar from "@/components/Snackbar";


export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "", company_fax: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "rate-limited">("idle");
    const [snackbar, setSnackbar] = useState({ visible: false, message: "" });

    const showSnackbar = (message: string) => setSnackbar({ visible: true, message });
    const hideSnackbar = useCallback(() => setSnackbar({ visible: false, message: "" }), []);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.status === 429) {
                setStatus("idle");
                showSnackbar("You're submitting too quickly. Please wait a minute.");
                return;
            }

            if (!res.ok) throw new Error();

            setStatus("sent");
            setForm({ name: "", email: "", message: "", company_fax: "" });
        } catch {
            setStatus("idle");
            showSnackbar("Something went wrong. Please try again.");
        }
    }

    return (
        <>
            <PageHero
                imageSrc="/heroPageLogo/contact-logo.webp"
                imageAlt="Contact Page logo"
            />
            <section className="min-h-screen">
                <form onSubmit={handleSubmit} className="max-w-6xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Left — Info Side */}
                        <div className="flex flex-col justify-center">
                            <p className="text-sm font-semibold uppercase tracking-widest text-brand-green-dark/65 mb-3">
                                WE WANT TO HEAR FROM YOU
                            </p>
                            <h1 className="text-5xl font-bold text-brand-green-dark mb-6 leading-tight">
                                Connect with the us!
                            </h1>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                                Whether you&apos;re interested in items from out collections, curious about our upcoming events, or have general questions, we&apos;re here to help.
                            </p>

                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-green-dark/85 flex items-center justify-center shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Email</p>
                                        <p className="text-gray-600">hello@tailstrokecards.com</p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-green-dark/85 flex items-center justify-center shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Location</p>
                                        <p className="text-gray-600">Raleigh, North Carolina</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right — Form Side */}
                        <div className="flex flex-col justify-center">
                            {status === "sent" ? (
                                <div className="rounded-2xl bg-green-50 border border-green-200 p-10 text-center">
                                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-green-800 mb-2">
                                        Message Sent!
                                    </h2>
                                    <p className="text-brand-green-dark">
                                        Thanks for reaching out. We&apos;ll get back to you soon.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => setStatus("idle")}
                                        className="mt-6 text-sm font-medium text-green-800 underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <div className="relative rounded-2xl bg-white shadow-lg border border-gray-100 p-8 md:p-10 space-y-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-brand-green-dark mb-1">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            required
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-brand-green-dark mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            required
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-brand-green-dark mb-1">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={8}
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Tell us what you're looking for..."
                                            required
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                                        />
                                    </div>
                                    {/* Honeypot — hidden from real users, catches bots that auto-fill every field */}
                                    <input
                                        type="text"
                                        name="company_fax"
                                        value={form.company_fax}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        tabIndex={-1}
                                        className="absolute left-[-9999px] w-px h-px opacity-0"
                                        aria-hidden="true"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Send — Centered below both columns */}
                    {status !== "sent" && (
                        <div className="flex flex-col items-center mt-10">
                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="rounded-lg bg-brand-green-dark/80 px-16 py-3.5 text-sm font-semibold text-white hover:bg-brand-green-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "sending" ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    )}
                </form>
            </section>
            <Snackbar
                message={snackbar.message}
                visible={snackbar.visible}
                onClose={hideSnackbar}
            />
        </>
    );
}
