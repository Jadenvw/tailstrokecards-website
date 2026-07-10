"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function EasterEgg() {
    const [showSmeargle, setShowSmeargle] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleClick = () => {
        setShowSmeargle(true);

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setShowSmeargle(false);
        }, 2000);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <>
            <button
                onClick={handleClick}
                aria-label="Show Smeargle"
                className="fixed bottom-4 right-4 z-40 w-8 h-8 rounded-full bg-brand-green/55 hover:bg-brand-green flex items-center justify-center text-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
            >
                🎨
            </button>

            {showSmeargle && (
                <div className="fixed bottom-0 right-0 z-50 pointer-events-none anim-smeargle-pop">
                    <Image
                        src="/contentPhoto/smeargle-says-hi.PNG"
                        alt="Smeargle"
                        width={280}
                        height={560}
                        className="w-32 sm:w-40 h-auto"
                    />
                </div>
            )}
        </>
    );
}