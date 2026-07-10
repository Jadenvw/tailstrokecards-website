import { CalendarDays } from "lucide-react";
import { EventItem } from "@/data/events";

function formatDate(dateStr: string) {
    const [year, month, day] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

function formatTime(timeStr: string) {
    const [hour, minute] = timeStr.split(":").map(Number);
    const date = new Date();
    date.setHours(hour, minute);
    return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

export default function EventCard({ event, isPast }: { event: EventItem; isPast: boolean }) {
    return (
        <div
            className={`flex items-center justify-between gap-4 rounded-2xl p-5 shadow-md bg-brand-green-dark/50 ${isPast ? "opacity-50" : ""
                }`}
        >
            <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold text-brand-dark">{event.name}</h3>

                {event.days.map((day, i) => (
                    <p key={i} className="text-sm text-gray-700">
                        {formatDate(day.date)} • {formatTime(day.startTime)}–{formatTime(day.endTime)}
                    </p>
                ))}

                <p className="text-sm text-gray-600">{event.address}</p>
            </div>

            <CalendarDays className="w-8 h-8 text-brand-green-dark shrink-0" strokeWidth={2} />
        </div>
    );
}