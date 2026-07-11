export interface CollectionItem {
    id: string;
    title: string;
    imageSrc: string;
    imageAlt: string;
    externalUrl: string;
}

export const collections: CollectionItem[] = [
    {
        id: "1",
        title: "Display Cases",
        imageSrc: "/contentPhoto/display-case.webp",
        imageAlt: "Collection of higher end dsiplay cards",
        externalUrl: "https://www.decktradr.com/share/d4c51683-39c2-405f-9ae1-c11240819397",
    },
    {
        id: "2",
        title: "Table Binder",
        imageSrc: "/contentPhoto/binder.webp",
        imageAlt: "Collection of cards in binder",
        externalUrl: "https://www.decktradr.com/share/bde7a068-43b5-4037-9a70-b2318c5962dc",
    },

];