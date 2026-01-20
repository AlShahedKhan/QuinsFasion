import React from "react";

type Reason = {
    title: string;
    description: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

const reasons: Reason[] = [
    {
        title: "Verified Factories",
        description: "Network of 200+ certified manufacturers with proven track records",
        icon: (props) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
                <path
                    d="M4 20h16V8l-5-4H4v16Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M8 20v-6h3v6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 10h2M14 13h2M14 16h2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Quality Assurance",
        description: "3-stage quality control: pre-production, inline, and final inspection",
        icon: (props) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
                <path
                    d="M12 4 4 7v5c0 4.5 3 7.5 8 8 5-0.5 8-3.5 8-8V7l-8-3Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Competitive Pricing",
        description: "Direct factory access ensures best prices without compromising quality",
        icon: (props) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
                <path
                    d="M6 8a4 4 0 0 1 8 0v1h3a1 1 0 0 1 1 1v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6V10a1 1 0 0 1 1-1h1V8Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M9 8h0" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "On-Time Delivery",
        description: "98% on-time shipment rate with production tracking and updates",
        icon: (props) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
                <circle cx="12" cy="12" r="8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Global Experience",
        description: "Serving buyers from USA, Europe, Australia, Middle East, and Asia",
        icon: (props) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
                <circle cx="12" cy="12" r="8" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M4 12h16M12 4c2.5 2.5 2.5 13.5 0 16M12 4c-2.5 2.5-2.5 13.5 0 16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        title: "Compliance & Ethics",
        description: "All factories meet international labor and environmental standards",
        icon: (props) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
                <rect x="5" y="10" width="14" height="10" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 10V8a4 4 0 0 1 8 0v2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

const WhyChooseSection: React.FC = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
                <div className="flex flex-col items-center text-center text-slate-900">
                    <h2 className="text-3xl font-semibold sm:text-4xl">Why Choose Quins Fashion?</h2>
                    <span className="mt-3 h-1 w-14 rounded-full bg-sky-500" aria-hidden="true" />
                    <p className="mt-4 max-w-2xl text-sm text-slate-500 sm:text-base">
                        Your trusted partner in Bangladesh's garment industry
                    </p>
                </div>
                <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {reasons.map((reason) => {
                        const Icon = reason.icon;
                        return (
                            <article key={reason.title} className="text-center">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white">
                                    <Icon className="h-7 w-7" aria-hidden="true" />
                                </div>
                                <h3 className="mt-4 text-xl font-semibold text-slate-900">{reason.title}</h3>
                                <p className="mt-2 text-sm text-slate-500">{reason.description}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
