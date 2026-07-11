import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EventsRoadmap from "@/components/EventsRoadmap";
import EventCardsList from "@/components/EventCardsList";

export const metadata: Metadata = {
    title: "Events | TailstrokeCards",
    description:
        "Find upcoming Pokémon card shows and events where TailstrokeCards will be vending across North and South Carolina.",
    openGraph: {
        title: "Events | TailstrokeCards",
        description:
            "Find upcoming Pokémon card shows and events where TailstrokeCards will be vending across North and South Carolina.",
        url: "https://tailstrokecards.com/events",
        siteName: "TailstrokeCards",
        type: "website",
    },
};

export default function EventsPage() {
    return (
        <>
            <PageHero
                imageSrc="/heroPageLogo/events-logo.webp"
                imageAlt="Events Page logo"
            />
            <EventsRoadmap />
            <EventCardsList />
        </>
    );
}