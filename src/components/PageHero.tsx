import Image from "next/image";
import { ImpactSplash } from "./ImpactSlapsh";

interface PageHeroProps {
    imageSrc: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
}

export default function PageHero({
    imageSrc,
    imageAlt = "TailstrokeCards",
    imageWidth = 300,
    imageHeight = 75,
}: PageHeroProps) {
    return (
        <section className="relative h-48 sm:h-56 flex items-center justify-center overflow-hidden">
            {/* Gradient background — instant, no fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green/30 via-brand-green/5 to-transparent" />

            {/* Impact splashes — fast pop-in, minimal stagger */}
            <div className="absolute inset-0 pointer-events-none">
                <ImpactSplash color="#92f327" size={70} top="10%" left="6%" delay="0s" rotate={0} variant={0} fast />
                <ImpactSplash color="#f5e642" size={55} top="50%" left="80%" delay="0.03s" rotate={50} variant={1} fast />
                <ImpactSplash color="#3b8beb" size={45} top="5%" left="65%" delay="0.06s" rotate={130} variant={2} fast />
                <ImpactSplash color="#e84545" size={40} top="60%" left="15%" delay="0.09s" rotate={210} variant={0} fast />
                <ImpactSplash color="#e83baf" size={50} top="20%" left="88%" delay="0.05s" rotate={85} variant={1} fast />
            </div>

            {/* Logo — fast reveal, no delay */}
            <div className="relative z-10 anim-logo-reveal-fast">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                    priority
                    className="h-54 sm:h-78 w-auto drop-shadow-xl"
                />
            </div>
        </section>
    );
}