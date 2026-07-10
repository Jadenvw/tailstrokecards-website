import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, FacebookIcon, GmailIcon } from "@/components/icons/SocialIcons";
import EasterEgg from "./EasterEgg";

const footerLinks = [
    {
        href: "/",
        label: "Home",
        hoverText: "hover:text-brand-green-dark",
    },
    {
        href: "/events",
        label: "Events",
        hoverText: "hover:text-brand-blue",
    },
    {
        href: "/collections",
        label: "Collections",
        hoverText: "hover:text-brand-orange",
    },
    {
        href: "/about",
        label: "About",
        hoverText: "hover:text-brand-pink",
    },
];

export default function Footer() {
    return (
        <footer className="bg-brand-green/35 border-t border-brand-green-dark/32">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row md:justify-evenly items-center md:items-start gap-12 md:gap-6 text-center md:text-left">

                    {/* Logo / Brand */}
                    <div className="flex flex-col items-center gap-3">
                        <Link href="/" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 rounded-lg">
                            <Image
                                src="/logo.png"
                                alt="TailstrokeCards"
                                width={160}
                                height={40}
                                className="h-32 w-auto"
                            />
                        </Link>
                        <p className="max-w-[220px] text-center text-sm text-brand-dark">
                            Buy • Trade • Sell
                        </p>
                    </div>

                    {/* Connect */}
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <h3 className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                            Connect
                        </h3>
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <a
                                href="https://instagram.com/tailstrokecards"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="flex items-center gap-2 text-sm text-brand-dark hover:text-brand-pink transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink rounded"
                            >
                                <InstagramIcon size={18} />
                                Instagram
                            </a>
                            <a
                                href="https://facebook.com/TailstrokeCards"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="flex items-center gap-2 text-sm text-brand-dark hover:text-brand-blue transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
                            >
                                <FacebookIcon size={18} />
                                Facebook
                            </a>
                            <a
                                href="/contact"
                                aria-label="Instagram"
                                className="flex items-center gap-2 text-sm text-brand-dark hover:text-brand-red transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded"
                            >
                                <GmailIcon size={18} />
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <h3 className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                            Explore
                        </h3>
                        <ul className="flex flex-col items-center md:items-start gap-2">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`text-sm text-brand-dark transition-colors duration-200 ${link.hoverText}`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* Bottom bar */}
            <div className="relative py-6 border-t border-gray-100 bg-white text-center text-xs text-gray-400">
                © {new Date().getFullYear()} TailstrokeCards. Not affiliated with The Pokémon Company.
            </div>
        </footer>
    );
}