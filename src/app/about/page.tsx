import PageHero from "@/components/PageHero";
import ImageCard from "@/components/ImageCard";

export default function AboutPage() {
    return (
        <>
            <PageHero
                imageSrc="/heroPageLogo/about-logo.webp"
                imageAlt="About Page logo"
            />
            <ImageCard imageSrc="/contentPhoto/vending.webp" imageAlt="Photo of the TailstrokeCards vendor" heading="What's Up Fellow Nerds!">
                <p>
                    In case we haven&apos;t met yet, I&apos;m the person behind the TailstrokeCards table!
                    I started vending Pokémon cards at local shows in 2026 because of my lifelong passion for Pokémon
                    and the incredible community that surrounds it.
                </p>

                <p>
                    Growing up, Pokémon was an instrumental part of my life. From hiding my GameBoy with a copy of
                    Pokémon FireRed under my pillow when I was supposed to be sleeping, to exploring the open-world
                    adventures of Scarlet & Violet while in college, Pokémon has grown alongside me through every
                    step of my journey.
                </p>

                <p>
                    These days, you&apos;ll find me at shows across North and South Carolina with a table full of singles,
                    sealed product, and way too many opinions about pull rates. My goal is simple: create a welcoming table
                    filled with positive energy, great conversations, and a shared love for a franchise that has brought so
                    many of us together.
                </p>

            </ImageCard>
            <ImageCard imageSrc="/contentPhoto/display-stand.webp" imageAlt="Photo of card display shelves on table" heading="My Collection" reverse>
                <p> My collection spans everything from the Wizards of the Coast era to the Mega Evolution block, with plenty of personal
                    favorites mixed in. Whether you&apos;re searching for a nostalgic childhood card or your next collection piece,
                    there&apos;s a little something for every kind of collector. </p>

                <p> If you&apos;re a binder collector, you&apos;ve come to the right place. I carry hundreds of singles across a wide
                    range of price points, making it easy to find something that fits your collection and your budget. For graded
                    collectors, I also bring a curated selection of vintage and modern PSA slabs, along with sealed products for anyone
                    looking to crack some packs and chase their next big pull. </p>
            </ImageCard>
        </>
    );
}