import PageHero from "@/components/PageHero";
import ImageCard from "@/components/ImageCard";

export default function AboutPage() {
    return (
        <>
            <PageHero
                imageSrc="/about-logo.PNG"
                imageAlt="About Page logo"
            />
            <ImageCard imageSrc="/vending.PNG" imageAlt="Photo of the TailstrokeCards vendor" heading="What's Up Fellow Nerds!">
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
            <ImageCard imageSrc="/display-stand.PNG" imageAlt="Photo of card display shelves on table" heading="My Collection" reverse>
                <p>
                    My collection consists of a number of cards from the Wizards of the Coast era all the way to
                    the Mega Evolution block. My table has something for everyone!
                </p>

                <p>
                    If you are a binder collector, I am your guy! I have hundreds of singles from many differnt affordable price
                    ranges for everyone. If you are more of a graded collector, I have small selection of both vintage and modern
                    PSA slabs that you may be hunting for. My table also has a number of sealed items for those looking to rip some
                    packs.
                </p>
            </ImageCard>
        </>
    );
}