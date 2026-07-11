"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
    {
        href: "/",
        label: "Home",
        activeBg: "bg-brand-green/65",
        hoverBg: "hover:bg-brand-green/15",
        underline: "bg-brand-green",
    },
    {
        href: "/events",
        label: "Events",
        activeBg: "bg-brand-blue/65",
        hoverBg: "hover:bg-brand-blue/15",
        underline: "bg-brand-blue",
    },
    {
        href: "/collections",
        label: "Collections",
        activeBg: "bg-brand-orange/65",
        hoverBg: "hover:bg-brand-orange/15",
        underline: "bg-brand-orange",
    },
    {
        href: "/about",
        label: "About",
        activeBg: "bg-brand-pink/65",
        hoverBg: "hover:bg-brand-pink/15",
        underline: "bg-brand-pink",
    },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-green/10 backdrop-blur-md border-b border-gray-200 shadow-sm">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo / Brand */}
                    <Link href="/" className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-lg">
                        <Image
                            src="/primaryLogo/ts-logo.webp"
                            alt="TailstrokeCards"
                            width={160}
                            height={40}
                            className="h-20"
                            style={{ width: "auto" }}
                            priority
                        />
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const active = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    aria-current={active ? "page" : undefined}
                                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200
                                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white
                                        ${active
                                            ? `text-brand-dark ${link.activeBg} shadow-sm`
                                            : `text-gray-600 hover:text-brand-dark ${link.hoverBg}`
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-600 hover:text-brand-dark hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark/40"
                        aria-label="Toggle menu"
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-80" : "max-h-0"
                    }`}
            >
                <div className="px-4 pb-4 space-y-1 bg-white/95 backdrop-blur-md">
                    {navLinks.map((link) => {
                        const active = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                aria-current={active ? "page" : undefined}
                                className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 border-l-2
                                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark/40
                                    ${active
                                        ? `text-brand-dark ${link.activeBg} border-transparent`
                                        : `text-gray-600 hover:text-brand-dark ${link.hoverBg} border-transparent`
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}