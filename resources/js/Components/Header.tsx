import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@inertiajs/react";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLElement | null>(null);

    const navItems = useMemo(
        () => [
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/#services" },
            { label: "Contact", href: "/contact" },
        ],
        []
    );

    const currentPath =
        typeof window !== "undefined" ? `${window.location.pathname}${window.location.hash}` : "";
    const isActive = (href: string) => currentPath === href;

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
            if (!isOpen || !navRef.current) {
                return;
            }

            if (!navRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        document.addEventListener("touchstart", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("touchstart", handleOutsideClick);
        };
    }, [isOpen]);

    return (
        <header>
            <nav
                className="relative z-20 bg-slate-950/90 p-4 text-white backdrop-blur supports-[backdrop-filter]:bg-slate-950/70"
                aria-label="Primary"
                ref={navRef}
            >
                <div className="mx-auto flex max-w-6xl items-center justify-between">
                    <Link href="/" className="text-lg font-semibold" aria-label="QuinsFasion home">
                        QuinsFasion
                    </Link>
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md p-2 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:hidden"
                        aria-expanded={isOpen}
                        aria-controls="primary-navigation"
                        onClick={() => setIsOpen((open) => !open)}
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </button>
                    <ul
                        id="primary-navigation"
                        className={`${
                            isOpen ? "flex" : "hidden"
                        } absolute left-0 top-full z-30 w-full flex-col gap-4 bg-slate-950/95 px-4 pb-4 text-sm font-medium md:static md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:bg-transparent md:p-0`}
                    >
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    className={`hover:text-sky-200 focus-visible:text-sky-200 ${
                                        isActive(item.href) ? "text-sky-200" : ""
                                    }`}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};
export default Header;
