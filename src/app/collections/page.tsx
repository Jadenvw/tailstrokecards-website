import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CollectionCardsList from "@/components/CollectionCardsList";

export const metadata: Metadata = {
    title: "Collections | TailstrokeCards",
    description:
        "Browse our Pokémon card collection — from vintage Wizards of the Coast singles to modern PSA slabs and sealed product.",
    openGraph: {
        title: "Collections | TailstrokeCards",
        description:
            "Browse our Pokémon card collection — from vintage Wizards of the Coast singles to modern PSA slabs and sealed product.",
        url: "https://tailstrokecards.com/collections",
        siteName: "TailstrokeCards",
        type: "website",
    },
};

export default function CollectionsPage() {
    return (
        <>
            <PageHero
                imageSrc="/heroPageLogo/collection-logo.webp"
                imageAlt="Collections Page logo"
            />
            <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-16">
                <CollectionCardsList />
                <p className="mt-10 text-center text-sm text-gray-400">
                    Digital binders powered by{" "}
                    <a
                        href="https://www.decktradr.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-brand-green-dark transition-colors"
                    >
                        DeckTradr
                    </a>
                </p>
            </section>
        </>
    );
}