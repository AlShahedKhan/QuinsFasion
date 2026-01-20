import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-slate-200">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">About Quins International</h3>
                        <p className="text-sm text-slate-400">
                            Connecting you to global services in education, finance, technology, logistics,
                            consultancy, real estate, and events across all 64 districts of Bangladesh.
                        </p>
                        <div className="flex items-center gap-3">
                            <a
                                href="#"
                                aria-label="Follow on Facebook"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-200 transition hover:bg-slate-700"
                            >
                                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                                    <path
                                        d="M15 8h-2V6.8c0-.6.4-.8.9-.8H15V3.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4v1.9H6V12h2.6v8h3.4v-8h2.4L15 8Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                aria-label="Follow on Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-200 transition hover:bg-slate-700"
                            >
                                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                                    <path
                                        d="M8.5 3h7A5.5 5.5 0 0 1 21 8.5v7A5.5 5.5 0 0 1 15.5 21h-7A5.5 5.5 0 0 1 3 15.5v-7A5.5 5.5 0 0 1 8.5 3Zm0 2A3.5 3.5 0 0 0 5 8.5v7A3.5 3.5 0 0 0 8.5 19h7a3.5 3.5 0 0 0 3.5-3.5v-7A3.5 3.5 0 0 0 15.5 5h-7ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2ZM17.6 6.4a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Services</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>
                                <a className="hover:text-white" href="#">
                                    Partnership Program
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-white" href="#">
                                    Logistics
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-white" href="#">
                                    Fashion
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-white" href="#">
                                    Global Trading
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-white" href="#">
                                    Debt Collection
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li className="flex items-start gap-2">
                                <span aria-hidden="true">✉</span>
                                <span>info@quinsbd.com</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span aria-hidden="true">☎</span>
                                <span>+880 1334928540</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span aria-hidden="true">🏢</span>
                                <span>Registration: C-197024</span>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Legal</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>
                                <a className="hover:text-white" href="#">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-white" href="#">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-white" href="#">
                                    Refund Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
                    © 2025 Quins International Bangladesh Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
