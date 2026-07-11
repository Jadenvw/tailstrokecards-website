import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | TailstrokeCards",
    description:
        "Get in touch with TailstrokeCards — ask about our inventory, upcoming shows, or anything Pokémon card related.",
    openGraph: {
        title: "Contact | TailstrokeCards",
        description:
            "Get in touch with TailstrokeCards — ask about our inventory, upcoming shows, or anything Pokémon card related.",
        url: "https://tailstrokecards.com/contact",
        siteName: "TailstrokeCards",
        type: "website",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
