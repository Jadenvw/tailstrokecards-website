import Image from "next/image";
import { CollectionItem } from "@/data/collections";

export default function CollectionCard({ collection }: { collection: CollectionItem }) {
    return (
        <div className="flex flex-col sm:flex-row items-stretch gap-0 rounded-2xl border border-brand-green-dark shadow-lg bg-brand-green/25 p-4">
            {/* Landscape image */}
            <div className="relative w-full sm:w-96 aspect-video shrink-0 rounded-md overflow-hidden">
                <Image
                    src={collection.imageSrc}
                    alt={collection.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 24rem"
                    className="object-cover"
                />
            </div>

            {/* Title + View button */}
            <div className="flex-1 flex flex-col items-center sm:items-start justify-center gap-3 p-6 sm:p-8 text-center sm:text-left">
                <h3 className="text-xl sm:text-3xl font-bold text-brand-dark leading-snug">
                    {collection.title}
                </h3>
                <a
                    href={collection.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-center sm:self-start px-8 py-3 sm:px-5 sm:py-2 rounded-lg bg-brand-green-dark text-white text-base sm:text-sm font-semibold hover:brightness-110 active:scale-95 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-dark focus-visible:ring-offset-2"
                >
                    View Collection
                </a>
            </div>
        </div>
    );
}