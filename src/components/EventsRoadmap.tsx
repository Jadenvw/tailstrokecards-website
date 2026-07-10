"use client";

import { useEffect, useRef } from "react";
import { MapPin, Truck } from "lucide-react";
import { events } from "@/data/events";
import { getEventWindow } from "@/lib/eventWindow";

function formatDate(dateStr: string) {
    const [year, month, day] = dateStr.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function EventsRoadmap() {
    const { windowEvents, windowStart, nextGlobalIndex } = getEventWindow(events);

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const nextNodeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollContainerRef.current;
        const node = nextNodeRef.current;
        if (!container || !node) return;

        // Only act if the container is actually scrollable (mobile/overflow state).
        const isScrollable = container.scrollWidth > container.clientWidth;
        if (!isScrollable) return;

        const containerRect = container.getBoundingClientRect();
        const nodeRect = node.getBoundingClientRect();

        // Center the node within the container's own scroll position,
        // without touching any ancestor/page scroll.
        const offset =
            nodeRect.left - containerRect.left - container.clientWidth / 2 + nodeRect.width / 2;

        container.scrollTo({
            left: container.scrollLeft + offset,
            behavior: "smooth",
        });
    }, []);

    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-6 py-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-green-dark text-center mb-4">
                Join the Road Trip!
            </h2>

            <div ref={scrollContainerRef} className="overflow-x-auto overflow-y-visible pb-4 pt-10">
                <div className="relative flex items-start justify-start sm:justify-evenly gap-10 sm:gap-0 min-w-max sm:min-w-0 sm:w-full px-16 mx-auto">
                    <div className="absolute top-6 left-0 right-0 h-0.5 border-t-2 border-dashed border-brand-green-dark/40 z-0" />

                    {windowEvents.map((event, localIndex) => {
                        const globalIndex = windowStart + localIndex;
                        const isNext = globalIndex === nextGlobalIndex;
                        const isPast = nextGlobalIndex !== -1 ? globalIndex < nextGlobalIndex : true;

                        return (
                            <div
                                key={event.id}
                                ref={isNext ? nextNodeRef : undefined}
                                className="relative z-10 flex flex-col items-center text-center w-32"
                            >
                                {isNext && (
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce">
                                        <Truck className="w-6 h-6 text-brand-blue drop-shadow-sm" strokeWidth={2.5} />
                                    </div>
                                )}

                                <div
                                    className={`w-12 h-12 rounded-full bg-white border-2 flex items-center justify-center shadow-sm ${isNext
                                        ? "border-brand-blue"
                                        : isPast
                                            ? "border-gray-500"
                                            : "border-brand-green-dark"
                                        }`}
                                >
                                    <MapPin
                                        className={`w-5 h-5 ${isNext
                                            ? "text-brand-blue"
                                            : isPast
                                                ? "text-gray-500"
                                                : "text-brand-green-dark"
                                            }`}
                                    />
                                </div>

                                <p
                                    className={`mt-4 text-sm font-bold leading-tight ${isPast ? "text-gray-600" : "text-brand-dark"
                                        }`}
                                >
                                    {event.name}
                                </p>
                                <p className={`mt-1 text-xs ${isPast ? "text-gray-500" : "text-gray-800"}`}>
                                    {event.city}, {event.state}
                                </p>
                                <p
                                    className={`mt-0.5 text-xs font-semibold ${isPast ? "text-gray-500" : "text-brand-green-dark"
                                        }`}
                                >
                                    {formatDate(event.days[0].date)}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}