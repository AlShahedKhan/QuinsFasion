import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <main className="bg-white">
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-blue-700">
                    <div
                        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,197,255,0.25),_transparent_55%)]"
                        aria-hidden="true"
                    />
                    <div className="relative mx-auto flex min-h-[60vh] max-w-6xl items-center px-6 py-16 md:py-24">
                        <div className="w-full text-center text-white md:w-3/5 md:text-left">
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">Home</p>
                            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                                Quins International BD
                            </h1>
                            <p className="mt-5 max-w-xl text-base text-blue-100 sm:text-lg">
                                A unified hub for Fashion, Logistics, Global Trading, Debt Collection, and Partner
                                Services built to support your growth.
                            </p>
                            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
                                <a
                                    href="/partner"
                                    className="inline-flex items-center justify-center rounded-full bg-sky-400 px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/30 transition hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Become a Partner
                                </a>
                                <a
                                    href="/fashion"
                                    className="text-sm font-semibold text-white underline-offset-4 hover:underline"
                                >
                                    Explore Fashion
                                </a>
                            </div>
                        </div>
                        <div className="relative mt-12 hidden w-2/5 justify-end md:flex">
                            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
                            <div className="relative h-[320px] w-full max-w-xs rounded-[2rem] bg-white/10 shadow-2xl shadow-blue-900/50" />
                        </div>
                    </div>
                </section>
                <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
                    <div className="max-w-2xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">Our Network</p>
                        <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
                            Services across every major vertical
                        </h2>
                        <p className="mt-4 text-base text-slate-600 sm:text-lg">
                            From partner onboarding to trade support, we coordinate the moving parts so you can focus
                            on outcomes.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {[
                            "Partner enablement",
                            "Logistics & fulfillment",
                            "Fashion & sourcing",
                            "Global trading",
                            "Debt collection",
                            "Regional coverage",
                        ].map((title) => (
                            <article
                                key={title}
                                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                            >
                                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                                <p className="mt-2 text-sm text-slate-600">
                                    Short description goes here. Replace with your real content when ready.
                                </p>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;
