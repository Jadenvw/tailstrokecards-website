// data/events.ts

export interface EventDay {
    date: string;       // ISO format, e.g. "2026-08-15"
    startTime: string;  // e.g. "10:00"
    endTime: string;    // e.g. "17:00"
}

export interface EventItem {
    id: string;
    name: string;
    city: string;
    state: string;
    address: string;
    days: EventDay[]; // 1–3 entries, first day drives the roadmap
}

export const events: EventItem[] = [
    {
        id: "1",
        name: "TTS Expos",
        city: "Raleigh",
        state: "NC",
        address: "1126 S Saunders St, Raleigh NC 27603, Building 4",
        days: [
            { date: "2026-06-13", startTime: "10:00", endTime: "16:00" },
            { date: "2026-06-14", startTime: "10:00", endTime: "16:00" },
        ],
    },
    {
        id: "2",
        name: "Poke & Brews Hi-Wire Brewing",
        city: "Durham",
        state: "NC",
        address: "800 Trade St, Durham NC 27701",
        days: [
            { date: "2026-06-20", startTime: "09:00", endTime: "15:00" },
        ],
    },
    {
        id: "3",
        name: "NC Collectors Roadshow",
        city: "Raleigh",
        state: "NC",
        address: "4285 Trinity Rd, Raleigh NC 27607",
        days: [
            { date: "2026-06-27", startTime: "010:00", endTime: "17:00" },
            { date: "2026-06-28", startTime: "011:00", endTime: "15:00" },
        ],
    },
    {
        id: "4",
        name: "Pokémon Trading Night Waterline Brewing",
        city: "Wilmington",
        state: "NC",
        address: "721 Surry St, Wilmington NC 28401",
        days: [
            { date: "2026-07-07", startTime: "17:00", endTime: "20:00" },
        ],
    },
    {
        id: "5",
        name: "Rip X Card Show",
        city: "Durham",
        state: "NC",
        address: "409 Blackwell St, Durham NC 27701",
        days: [
            { date: "2026-09-27", startTime: "010:00", endTime: "17:00" },
        ],
    },
    {
        id: "6",
        name: "Cape Fear Pop Culture Fest 2026",
        city: "Wilmington",
        state: "NC",
        address: "5102 Oleander Dr, Wilmington NC 28403",
        days: [
            { date: "2026-07-25", startTime: "010:00", endTime: "17:00" },
        ],
    },
];