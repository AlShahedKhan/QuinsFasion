import React from "react";

type Service = {
    title: string;
    description: string;
    bullets: string[];
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

const services: Service[] = [
    {
        title: "Buying House & Sourcing",
        description:
            "We connect you with vetted Bangladesh factories, manage sampling, and keep production on schedule.",
        bullets: [
            "Factory identification and compliance checks",
            "Sampling, tech packs, and merchandising follow-up",
            "Costing, negotiation, and order placement",
            "Inline and final quality inspections",
        ],
        icon: (props) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
                <path
                    d="M3 10.5 12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8.5 10h7M8.5 13.5h7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        title: "Wholesale & Export Support",
        description:
            "Access ready inventory and manage export-ready delivery with transparent updates at every step.",
        bullets: [
            "Curated stock offers and weekly availability",
            "Labeling, packing, and private brand support",
            "Pre-shipment inspection and documentation",
            "Logistics coordination through port",
        ],
        icon: (props) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
                <path
                    d="M3.5 7.5h12l3 3v8.5a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1V7.5Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M15.5 7.5V11h3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M7.5 15.5h9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
];

const ServicesSection: React.FC = () => {
    return (
        <section
            id="services"
            className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200"
        >
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_55%)]"
                aria-hidden="true"
            />
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(99,102,241,0.1),_transparent_60%)]"
                aria-hidden="true"
            />
            <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
                <div className="text-center text-slate-900">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">Services</p>
                    <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                        A focused, end-to-end apparel partner
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-base text-slate-600 sm:text-lg">
                        From sourcing to export, Quins Fashion delivers reliable production support and wholesale
                        access built for global buyers.
                    </p>
                </div>
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.title}
                                className="group rounded-3xl border border-slate-200/80 bg-white/90 p-8 text-slate-900 shadow-xl shadow-slate-200/70"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                                        <Icon className="h-6 w-6" aria-hidden="true" />
                                    </span>
                                    <h2 className="text-xl font-semibold sm:text-2xl">{service.title}</h2>
                                </div>
                                <p className="mt-4 text-sm text-slate-600 sm:text-base">{service.description}</p>
                                <ul className="mt-6 space-y-3 text-sm text-slate-600 sm:text-base">
                                    {service.bullets.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
