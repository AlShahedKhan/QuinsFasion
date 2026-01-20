import React from "react";

type Category = {
    title: string;
    description: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

const categories: Category[] = [
    {
        title: "Knitwear",
        description: "T-shirts, polo shirts, sweatshirts, hoodies, tank tops, and all types of knitted garments.",
        icon: (props) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
                <path
                    d="M8 4h8l3 4-3 2v10a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V10L5 8l3-4Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M10 10h4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Woven Garments",
        description: "Shirts, trousers, jackets, dresses, skirts, and formal wear in various fabrics.",
        icon: (props) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
                <path
                    d="M7 3h10l2 3-2 2v12a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8L5 6l2-3Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M9 11h6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Women's Fashion",
        description: "Dresses, blouses, skirts, pants, activewear, and fashion accessories.",
        icon: (props) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
                <path
                    d="M12 4a2 2 0 0 1 2 2v2h2l-3 6 2 6-3-1-3 1 2-6-3-6h2V6a2 2 0 0 1 2-2Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        title: "Men's Fashion",
        description: "Shirts, chinos, denim, outerwear, and contemporary essentials for men.",
        icon: (props) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
                <path
                    d="M9 4h6l2 3-2 2v11a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V9L7 7l2-3Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M11 9h2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Kids & Baby",
        description: "Soft, safe, and durable styles for infants, toddlers, and kids.",
        icon: (props) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
                <path
                    d="M8 7a4 4 0 0 1 8 0v2h2v2a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9h2V7Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M10 7h4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Denim",
        description: "Jeans, jackets, skirts, and washes tailored to premium denim standards.",
        icon: (props) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
                <path
                    d="M7 3h10l2 18H5L7 3Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M10 9h4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Outerwear",
        description: "Coats, parkas, puffers, and weather-ready layering pieces.",
        icon: (props) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
                <path
                    d="M9 3h6l3 5-3 2v11a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V10L6 8l3-5Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M11 10h2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Home Textiles",
        description: "Bed linens, towels, and lifestyle textiles for retail collections.",
        icon: (props) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
                <path
                    d="M5 6h14a1 1 0 0 1 1 1v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a1 1 0 0 1 1-1Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M7 10h4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

const ProductCategoriesSection: React.FC = () => {
    return (
        <section className="bg-slate-50">
            <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
                <div className="flex flex-col items-center text-center text-slate-900">
                    <h2 className="text-3xl font-semibold sm:text-4xl">Product Categories</h2>
                    <span className="mt-3 h-1 w-14 rounded-full bg-sky-500" aria-hidden="true" />
                    <p className="mt-4 max-w-2xl text-sm text-slate-500 sm:text-base">
                        Wide range of garments and textiles for all your needs
                    </p>
                </div>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <article
                                key={category.title}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                                    <Icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <h3 className="mt-5 text-xl font-semibold text-slate-900">{category.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-500">{category.description}</p>
                            </article>
                        );
                    })}
                </div>
                <div className="mt-10 flex justify-center">
                    <a
                        href="/categories"
                        className="text-sm font-semibold text-blue-700 underline-offset-4 hover:underline"
                    >
                        View all categories
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProductCategoriesSection;
