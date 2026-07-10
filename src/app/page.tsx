import Image from "next/image";
import Link from "next/link";

/* ---------- SVG path variants for organic splat shapes ---------- */
const splatPaths = [
  // Wide irregular impact
  "M50 8C58-2 78 2 76 18C94 10 100 32 84 42C98 55 88 78 72 68C78 84 60 96 48 82C38 98 18 92 22 74C6 86 -4 68 16 56C0 44 6 26 24 30C8 16 22-2 38 8C44-4 48 2 50 8Z",
  // Tall vertical impact
  "M48 4C56-4 72 6 68 22C86 14 94 34 78 44C92 56 84 76 68 72C76 88 58 100 46 86C34 98 16 88 24 72C8 78 0 58 18 48C4 36 14 18 30 24C18 8 36-2 48 4Z",
  // Squat horizontal impact
  "M52 12C64 0 82 8 74 24C92 18 98 38 82 46C96 58 86 76 70 66C78 82 62 94 50 80C36 96 18 86 26 70C8 80 -2 62 18 52C2 40 12 22 28 28C16 12 38 0 52 12Z",
];

/* ---------- Droplet positions radiating from center ---------- */
const dropletSets = [
  // Set A
  [
    { cx: 8, cy: 20, r: 4 },
    { cx: 92, cy: 30, r: 3 },
    { cx: 15, cy: 80, r: 3.5 },
    { cx: 85, cy: 75, r: 2.5 },
    { cx: 50, cy: 0, r: 3 },
    { cx: 30, cy: 95, r: 2 },
    { cx: 95, cy: 55, r: 2 },
  ],
  // Set B
  [
    { cx: 5, cy: 40, r: 3 },
    { cx: 90, cy: 20, r: 3.5 },
    { cx: 10, cy: 70, r: 2.5 },
    { cx: 88, cy: 80, r: 4 },
    { cx: 40, cy: 98, r: 2 },
    { cx: 70, cy: 2, r: 2.5 },
  ],
  // Set C
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

function ImpactSplash({
  color,
  size,
  top,
  left,
  delay,
  rotate,
  variant = 0,
}: {
  color: string;
  size: number;
  top: string;
  left: string;
  delay: string;
  rotate: number;
  variant?: number;
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
      {/* Main splat body */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full anim-splat-body"
        style={{ animationDelay: delay }}
      >
        <path d={path} fill={color} />
      </svg>

      {/* Radiating droplets */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full anim-splat-droplets"
        style={{ animationDelay: `calc(${delay} + 0.1s)` }}
      >
        {droplets.map((d, i) => (
          <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={color} />
        ))}
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green/30 via-brand-green/5 to-transparent anim-gradient-fade" />

        {/* Impact splashes */}
        <div className="absolute inset-0 pointer-events-none">
          <ImpactSplash color="#92f327" size={160} top="20%" left="8%" delay="0.6s" rotate={0} variant={0} />
          <ImpactSplash color="#f5e642" size={120} top="55%" left="72%" delay="0.75s" rotate={50} variant={1} />
          <ImpactSplash color="#3b8beb" size={100} top="12%" left="65%" delay="0.9s" rotate={130} variant={2} />
          <ImpactSplash color="#e84545" size={90} top="65%" left="18%" delay="1.0s" rotate={210} variant={0} />
          <ImpactSplash color="#e83baf" size={110} top="35%" left="82%" delay="0.85s" rotate={85} variant={1} />
          <ImpactSplash color="#f5a623" size={80} top="75%" left="48%" delay="1.1s" rotate={170} variant={2} />
          <ImpactSplash color="#92f327" size={70} top="8%" left="38%" delay="0.95s" rotate={310} variant={2} />
          <ImpactSplash color="#3b8beb" size={85} top="50%" left="3%" delay="1.05s" rotate={65} variant={1} />
        </div>

        {/* Logo */}
        <div className="relative z-10 anim-logo-reveal">
          <Image
            src="/logo.png"
            alt="TailstrokeCards logo"
            width={500}
            height={500}
            priority
            className="w-72 sm:w-96 md:w-[28rem] h-auto drop-shadow-2xl"
          />
        </div>

        {/* Tagline + CTAs */}
        <div className="relative z-10 mt-6 text-center anim-content-fade">
          <p className="text-lg sm:text-xl text-gray-600 max-w-md mx-auto px-4">
            Pokémon card vending at shows near you
          </p>
          <div className="m-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/shows"
              className="px-6 py-3 rounded-xl bg-brand-blue/85 text-white font-bold text-sm shadow-lg shadow-brand-blue/30 hover:brightness-110 hover:scale-105 active:scale-100 transition-all duration-200"
            >
              Upcoming Shows
            </Link>
            <Link
              href="/collections"
              className="px-6 py-3 rounded-xl bg-brand-orange/85 text-white font-bold text-sm shadow-lg shadow-brand-pink/30 hover:brightness-110 hover:scale-105 active:scale-100 transition-all duration-200"
            >
              Browse Collections
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
