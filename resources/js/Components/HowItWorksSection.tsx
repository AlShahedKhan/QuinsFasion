import React from "react";

type Step = {
    number: string;
    title: string;
    description: string;
    colorClass: string;
};

const steps: Step[] = [
    {
        number: "1",
        title: "Inquiry & Requirements",
        description: "Share your product specifications, quantity, and target price",
        colorClass: "bg-emerald-500",
    },
    {
        number: "2",
        title: "Factory Selection",
        description: "We identify and recommend suitable manufacturers",
        colorClass: "bg-blue-500",
    },
    {
        number: "3",
        title: "Quotation & Samples",
        description: "Receive detailed quotes and physical samples for approval",
        colorClass: "bg-orange-500",
    },
    {
        number: "4",
        title: "Order Confirmation",
        description: "Finalize specifications, pricing, and payment terms",
        colorClass: "bg-purple-600",
    },
    {
        number: "5",
        title: "Production",
        description: "Manufacturing begins with regular progress updates",
        colorClass: "bg-red-500",
    },
    {
        number: "6",
        title: "Quality Control",
        description: "Multiple inspections ensure product meets specifications",
        colorClass: "bg-cyan-500",
    },
    {
        number: "7",
        title: "Shipment & Delivery",
        description: "Coordinate shipping and provide all necessary documentation",
        colorClass: "bg-green-500",
    },
];

const HowItWorksSection: React.FC = () => {
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
                    <h2 className="text-3xl font-semibold sm:text-4xl">How It Works</h2>
                    <span className="mt-3 h-1 w-14 rounded-full bg-sky-500" aria-hidden="true" />
                    <p className="mt-4 max-w-2xl text-sm text-slate-500 sm:text-base">
                        Simple 7-step process from inquiry to delivery
                    </p>
                </div>
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {steps.map((step) => (
                        <article key={step.number} className="rounded-2xl bg-slate-50 p-6 text-center shadow-sm">
                            <div
                                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full text-xl font-semibold text-white ${step.colorClass}`}
                            >
                                {step.number}
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                            <p className="mt-2 text-sm text-slate-500">{step.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
