"use client";

/* ---------- SVG path variants for organic splat shapes ---------- */
const splatPaths = [
    "M50 8C58-2 78 2 76 18C94 10 100 32 84 42C98 55 88 78 72 68C78 84 60 96 48 82C38 98 18 92 22 74C6 86 -4 68 16 56C0 44 6 26 24 30C8 16 22-2 38 8C44-4 48 2 50 8Z",
    "M48 4C56-4 72 6 68 22C86 14 94 34 78 44C92 56 84 76 68 72C76 88 58 100 46 86C34 98 16 88 24 72C8 78 0 58 18 48C4 36 14 18 30 24C18 8 36-2 48 4Z",
    "M52 12C64 0 82 8 74 24C92 18 98 38 82 46C96 58 86 76 70 66C78 82 62 94 50 80C36 96 18 86 26 70C8 80 -2 62 18 52C2 40 12 22 28 28C16 12 38 0 52 12Z",
];

const dropletSets = [
    [
        { cx: 8, cy: 20, r: 4 },
        { cx: 92, cy: 30, r: 3 },
        { cx: 15, cy: 80, r: 3.5 },
        { cx: 85, cy: 75, r: 2.5 },
        { cx: 50, cy: 0, r: 3 },
        { cx: 30, cy: 95, r: 2 },
        { cx: 95, cy: 55, r: 2 },
    ],
    [
        { cx: 5, cy: 40, r: 3 },
        { cx: 90, cy: 20, r: 3.5 },
        { cx: 10, cy: 70, r: 2.5 },
        { cx: 88, cy: 80, r: 4 },
        { cx: 40, cy: 98, r: 2 },
        { cx: 70, cy: 2, r: 2.5 },
    ],
    [
        { cx: 2, cy: 50, r: 3 },
        { cx: 95, cy: 45, r: 2.5 },
        { cx: 20, cy: 5, r: 3.5 },
        { cx: 80, cy: 90, r: 3 },
        { cx: 55, cy: 98, r: 2 },
        { cx: 12, cy: 90, r: 2 },
        { cx: 90, cy: 10, r: 2.5 },
    ],
];

export function ImpactSplash({
    color,
    size,
    top,
    left,
    delay,
    rotate,
    variant = 0,
    fast = false,
}: {
    color: string;
    size: number;
    top: string;
    left: string;
    delay: string;
    rotate: number;
    variant?: number;
    fast?: boolean;
}) {
    const path = splatPaths[variant % splatPaths.length];
    const droplets = dropletSets[variant % dropletSets.length];

    return (
        <div
            className="absolute"
            style={{
                top,
                left,
                width: size,
                height: size,
                transform: `rotate(${rotate}deg)`,
            }}
        >
            <svg
                viewBox="0 0 100 100"
                className={`absolute inset-0 w-full h-full ${fast ? "anim-splat-body-fast" : "anim-splat-body"}`}
                style={{ animationDelay: delay }}
            >
                <path d={path} fill={color} />
            </svg>
            <svg
                viewBox="0 0 100 100"
                className={`absolute inset-0 w-full h-full ${fast ? "anim-splat-droplets-fast" : "anim-splat-droplets"}`}
                style={{ animationDelay: `calc(${delay} + 0.1s)` }}
            >
                {droplets.map((d, i) => (
                    <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={color} />
                ))}
            </svg>
        </div>
    );
}