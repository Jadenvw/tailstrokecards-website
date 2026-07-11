import { collections } from "@/data/collections";
import CollectionCard from "./CollectionCard";

export default function CollectionCardsList() {
    return (
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {collections.map((collection) => (
                <CollectionCard key={collection.id} collection={collection} />
            ))}
        </div>
    );
}