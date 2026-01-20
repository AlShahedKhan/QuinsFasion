import React from "react";

type FeeCard = {
    title: string;
    subtitle: string;
    fee: string;
    feeDetail: string;
    bullets: string[];
    highlight?: boolean;
};

const feeCards: FeeCard[] = [
    {
        title: "Buying House Commission",
        subtitle: "For international buyers",
        fee: "5-8%",
        feeDetail: "of order value",
        bullets: [
            "Factory sourcing & selection",
            "Sample development",
            "Quality control (3 inspections)",
            "Production monitoring",
            "Shipment coordination",
            "Documentation support",
        ],
    },
    {
        title: "Wholesale Platform Fee",
        subtitle: "Direct manufacturer access",
        fee: "3-5%",
        feeDetail: "of order value",
        bullets: [
            "Verified manufacturer network",
            "Order placement support",
            "Basic quality check",
            "Payment facilitation",
            "Shipping coordination",
            "Dispute resolution",
        ],
        highlight: true,
    },
    {
        title: "Custom Design Service",
        subtitle: "Tech pack development",
        fee: "$150-500",
        feeDetail: "per design",
        bullets: [
            "Professional tech pack",
            "CAD drawings",
            "Fabric recommendations",
            "Trim & accessory sourcing",
            "Costing analysis",
            "Sample coordination",
        ],
    },
];

const discountItems = [
    "Order Value $10,000 - $25,000: 2% discount",
    "Order Value $25,000 - $50,000: 3% discount",
    "Order Value $50,000 - $100,000: 5% discount",
    "Order Value $100,000+: 7% discount",
    "Repeat Orders (3+ times): Additional 2% discount",
    "Annual Contract: Custom pricing available",
];

const importantNotes = [
    "All prices are FOB Bangladesh (Free on Board) - shipping costs additional",
    "Prices vary based on fabric quality, design complexity, and order quantity",
    "Sample costs: $50-150 per style (refundable with bulk order)",
    "Payment terms: 30% advance, 70% before shipment (negotiable for established buyers)",
    "Certifications available: GOTS, OEKO-TEX, BSCI, WRAP, etc.",
    "Private label and custom branding services available",
];

const ServiceFeesSection: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200">
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_55%)]"
                aria-hidden="true"
            />
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(99,102,241,0.1),_transparent_60%)]"
                aria-hidden="true"
            />
            <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
                <div className="flex flex-col items-center text-center text-slate-900">
                    <h2 className="text-3xl font-semibold sm:text-4xl">Service Fees & Commissions</h2>
                    <span className="mt-3 h-1 w-14 rounded-full bg-sky-500" aria-hidden="true" />
                </div>
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {feeCards.map((card) => (
                        <article
                            key={card.title}
                            className={`rounded-2xl border bg-white p-6 shadow-sm ${
                                card.highlight
                                    ? "border-sky-500 bg-slate-50 shadow-md"
                                    : "border-slate-200"
                            }`}
                        >
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                                <p className="mt-2 text-sm text-slate-500">{card.subtitle}</p>
                                <div className="mt-6 text-3xl font-semibold text-blue-900">{card.fee}</div>
                                <p className="mt-1 text-sm text-slate-500">{card.feeDetail}</p>
                            </div>
                            <ul className="mt-6 space-y-3 text-sm text-slate-600">
                                {card.bullets.map((item) => (
                                    <li key={item} className="flex items-start gap-3 border-t border-slate-200 pt-3">
                                        <span className="mt-0.5 text-base font-semibold text-emerald-500">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
                <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3 text-blue-900">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100">
                            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                                <path
                                    d="M6 7a4 4 0 0 1 8 0v1h3a1 1 0 0 1 1 1v1a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6V9a1 1 0 0 1 1-1h2V7Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M10 6h0"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                        <h3 className="text-lg font-semibold">Volume Discounts Available:</h3>
                    </div>
                    <div className="mt-4 grid gap-3 text-sm text-slate-600 md:grid-cols-2">
                        {discountItems.map((item) => (
                            <p key={item}>{item}</p>
                        ))}
                    </div>
                </div>
                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3 text-blue-900">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100">
                            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                                <path
                                    d="M12 4.5 3.5 9l8.5 4.5L20.5 9 12 4.5Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M12 13.5V20"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                        <h3 className="text-lg font-semibold">Important Notes:</h3>
                    </div>
                    <ul className="mt-4 space-y-3 text-sm text-slate-600">
                        {importantNotes.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <span className="mt-0.5 text-base font-semibold text-emerald-500">✓</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ServiceFeesSection;
