import PageHero from "@/components/PageHero";
import CollectionCardsList from "@/components/CollectionCardsList";

export default function CollectionsPage() {
    return (
        <>
            <PageHero
                imageSrc="/heroPageLogo/collection-logo.PNG"
                imageAlt="Collections Page logo"
            />
            <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-16">
                <CollectionCardsList />
            </section>
        </>
    );
}