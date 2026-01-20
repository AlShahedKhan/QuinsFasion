import React from "react";

type PricingRow = {
    category: string;
    description: string;
    moq: string;
    priceRange: string;
    leadTime: string;
};

const pricingRows: PricingRow[] = [
    {
        category: "Basic T-Shirts",
        description: "100% Cotton, Single Jersey",
        moq: "1,000 pcs per color",
        priceRange: "$2.50 - $4.00",
        leadTime: "45-60 days",
    },
    {
        category: "Polo Shirts",
        description: "Cotton Pique, 3-button",
        moq: "500 pcs per style",
        priceRange: "$4.50 - $7.00",
        leadTime: "50-65 days",
    },
    {
        category: "Hoodies/Sweatshirts",
        description: "Fleece, with/without print",
        moq: "500 pcs per style",
        priceRange: "$8.00 - $15.00",
        leadTime: "60-75 days",
    },
    {
        category: "Dress Shirts",
        description: "Woven, various fabrics",
        moq: "1,000 pcs per style",
        priceRange: "$6.00 - $12.00",
        leadTime: "60-75 days",
    },
    {
        category: "Denim Jeans",
        description: "Various washes & styles",
        moq: "1,000 pcs per style",
        priceRange: "$8.00 - $18.00",
        leadTime: "75-90 days",
    },
    {
        category: "Women's Dresses",
        description: "Various styles & fabrics",
        moq: "500 pcs per style",
        priceRange: "$10.00 - $25.00",
        leadTime: "60-75 days",
    },
    {
        category: "Kids T-Shirts",
        description: "Cotton, printed/plain",
        moq: "1,000 pcs per style",
        priceRange: "$2.00 - $3.50",
        leadTime: "45-60 days",
    },
    {
        category: "Activewear Leggings",
        description: "Performance fabric",
        moq: "500 pcs per style",
        priceRange: "$5.00 - $10.00",
        leadTime: "50-65 days",
    },
    {
        category: "Jackets",
        description: "Various styles & materials",
        moq: "500 pcs per style",
        priceRange: "$15.00 - $35.00",
        leadTime: "75-90 days",
    },
    {
        category: "Bed Sheets Set",
        description: "Cotton, various thread counts",
        moq: "500 sets",
        priceRange: "$12.00 - $25.00",
        leadTime: "60-75 days",
    },
];

const TransparentPricingSection: React.FC = () => {
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
                    <h2 className="text-3xl font-semibold sm:text-4xl">Transparent Pricing</h2>
                    <span className="mt-3 h-1 w-14 rounded-full bg-sky-500" aria-hidden="true" />
                    <p className="mt-4 max-w-2xl text-sm text-slate-500 sm:text-base">
                        Competitive rates for all product categories with volume discounts
                    </p>
                    <h3 className="mt-8 text-xl font-semibold text-blue-900 sm:text-2xl">
                        Sample Pricing (FOB Bangladesh)
                    </h3>
                </div>
                <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <table className="min-w-[760px] w-full border-collapse text-left text-sm text-slate-600">
                        <thead className="bg-blue-900 text-xs uppercase tracking-wide text-white">
                            <tr>
                                <th className="px-5 py-4 font-semibold">Product Category</th>
                                <th className="px-5 py-4 font-semibold">Description</th>
                                <th className="px-5 py-4 font-semibold">MOQ (Minimum Order)</th>
                                <th className="px-5 py-4 font-semibold">Price Range (USD)</th>
                                <th className="px-5 py-4 font-semibold">Lead Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pricingRows.map((row) => (
                                <tr key={row.category} className="border-t border-slate-200">
                                    <td className="px-5 py-4 font-medium text-slate-700">{row.category}</td>
                                    <td className="px-5 py-4">{row.description}</td>
                                    <td className="px-5 py-4">{row.moq}</td>
                                    <td className="px-5 py-4">{row.priceRange}</td>
                                    <td className="px-5 py-4">{row.leadTime}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default TransparentPricingSection;
