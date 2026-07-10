import Image from "next/image";
import Link from "next/link";
import { ImpactSplash } from "@/components/ImpactSlapsh";
import ImageCard from "@/components/ImageCard";
import EventsRoadmap from "@/components/EventsRoadmap";


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
            src="/primaryLogo/logo.png"
            alt="TailstrokeCards logo"
            width={500}
            height={500}
            priority
            className="w-72 sm:w-96 md:w-[28rem] h-auto drop-shadow-2xl"
          />
        </div>

        {/* Tagline + CTAs */}
        <div className="relative z-10 mt-2 text-center anim-content-fade">
          <p className="text-lg sm:text-xl text-gray-600 max-w-md mx-auto px-4">
            Pokémon card vending at shows near you!
          </p>
          <p className="text-sm sm:text-lg text-gray-600 max-w-md mx-auto px-4">
            Based in North Carolina
          </p>
          <div className="m-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/events"
              className="px-6 py-3 rounded-xl bg-brand-green-dark text-white font-bold text-sm shadow-lg shadow-brand-green-dark/30 hover:brightness-110 hover:scale-105 active:scale-100 transition-all duration-200"
            >
              Upcoming Shows
            </Link>
            <Link
              href="/collections"
              className="px-6 py-3 rounded-xl border-2 border-brand-green-dark bg-white text-brand-green-dark font-bold text-sm shadow-lg shadow-brand-green-dark/30 hover:brightness-110 hover:scale-105 active:scale-100 transition-all duration-200"
            >
              Browse Collections
            </Link>
          </div>
        </div>
      </section>
      <ImageCard imageSrc="/contentPhoto/vending.PNG" imageAlt="Photo of the TailstrokeCards vendor" heading="What's Up Fellow Nerds!">
        <p>
          In case we haven&apos;t met yet, I&apos;m the person behind the TailstrokeCards table!
          I started vending Pokémon cards at local shows in 2026 because of my lifelong passion for Pokémon
          and the incredible community that surrounds it.
        </p>

      </ImageCard>
      <section className="bg-brand-green-dark/25 mb-2">
        <EventsRoadmap />
      </section>

    </>
  );
}
