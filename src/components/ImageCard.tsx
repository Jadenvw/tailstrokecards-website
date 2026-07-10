import Image from "next/image";
import { ReactNode } from "react";

interface ImageCardProps {
    imageSrc: string;
    imageAlt: string;
    heading?: string;
    children: ReactNode;
    reverse?: boolean;
}

export default function ImageCard({
    imageSrc,
    imageAlt,
    heading,
    children,
    reverse = false,
}: ImageCardProps) {
    return (
        <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-4 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""
                    }`}
            >
                {/* Image */}
                <div className="flex justify-center">
                    <div className="relative w-64 sm:w-72 md:w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            sizes="(max-width: 640px) 16rem, (max-width: 768px) 18rem, 24rem"
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Text */}
                <div className="text-center px-4 md:px-12">
                    {heading && (
                        <h2 className="text-2xl sm:text-3xl font-bold text-brand-green-dark mb-4">
                            {heading}
                        </h2>
                    )}
                    <div className="text-gray-600 leading-relaxed space-y-4">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}