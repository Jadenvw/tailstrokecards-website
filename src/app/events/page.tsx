import PageHero from "@/components/PageHero";
import EventsRoadmap from "@/components/EventsRoadmap";
import EventCardsList from "@/components/EventCardsList";

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