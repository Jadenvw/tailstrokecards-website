import { EventItem } from "@/data/events";

export function getEventWindow(events: EventItem[]) {
    const sorted = [...events].sort(
        (a, b) => new Date(a.days[0].date).getTime() - new Date(b.days[0].date).getTime()
    );
    const total = sorted.length;
    const today = new Date(new Date().toDateString());

    const firstUpcomingIndex = sorted.findIndex((e) => new Date(e.days[0].date) >= today);
    const pastCount = firstUpcomingIndex === -1 ? total : firstUpcomingIndex;

    let windowStart = 0;
    while (pastCount - windowStart >= 2 && windowStart + 4 < total) {
        windowStart += 1;
    }

    const windowEvents = sorted.slice(windowStart, windowStart + 4);

    return { sorted, windowStart, windowEvents, nextGlobalIndex: firstUpcomingIndex };
}