import { events } from "@/data/events";
import { getEventWindow } from "@/lib/eventWindow";
import EventCard from "./EventCard";

export default function EventCardsList() {
    const { windowEvents, windowStart, nextGlobalIndex } = getEventWindow(events);

    // Reverse so the furthest-future event in the window sits at the top,
    // and the most past/overdue event sits at the bottom.
    const displayEvents = [...windowEvents].reverse();

    return (
        <div className="flex flex-col gap-4 max-w-4xl mx-auto mb-16">
            {displayEvents.map((event, localIndex) => {
                const globalIndex = windowStart + (windowEvents.length - 1 - localIndex);
                const isPast = nextGlobalIndex !== -1 ? globalIndex < nextGlobalIndex : true;

                return <EventCard key={event.id} event={event} isPast={isPast} />;
            })}
        </div>
    );
}