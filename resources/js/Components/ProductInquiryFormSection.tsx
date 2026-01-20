import React from "react";

type Option = {
    id: string;
    label: string;
};

const productCategories: Option[] = [
    { id: "knitwear", label: "Knitwear" },
    { id: "woven", label: "Woven Garments" },
    { id: "womens-fashion", label: "Women's Fashion" },
    { id: "denim", label: "Denim Products" },
    { id: "kids", label: "Kids Wear" },
    { id: "activewear", label: "Activewear" },
    { id: "outerwear", label: "Outerwear" },
    { id: "intimate", label: "Intimate Apparel" },
    { id: "home-textiles", label: "Home Textiles" },
];

const servicesNeeded: Option[] = [
    { id: "full-buying", label: "Full Buying House Service" },
    { id: "wholesale-only", label: "Wholesale Platform Only" },
    { id: "custom-design", label: "Custom Design/Tech Pack" },
    { id: "sample-development", label: "Sample Development" },
    { id: "quality-control", label: "Quality Control" },
    { id: "private-label", label: "Private Label/Branding" },
];

const certifications: Option[] = [
    { id: "gots", label: "GOTS (Organic)" },
    { id: "oeko-tex", label: "OEKO-TEX" },
    { id: "bsci", label: "BSCI" },
    { id: "wrap", label: "WRAP" },
    { id: "sedex", label: "SEDEX" },
    { id: "none", label: "No specific requirement" },
];

const ProductInquiryFormSection: React.FC = () => {
    return (
        <section className="bg-slate-50">
            <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
                    <div className="flex flex-col items-center text-center text-slate-900">
                        <h2 className="text-3xl font-semibold sm:text-4xl">Product Inquiry Form</h2>
                        <span className="mt-3 h-1 w-14 rounded-full bg-sky-500" aria-hidden="true" />
                        <p className="mt-4 max-w-2xl text-sm text-slate-500 sm:text-base">
                            Tell us about your requirements and we'll get back to you within 24 hours
                        </p>
                    </div>

                    <form className="mt-10 space-y-10">
                        <div>
                            <h3 className="text-lg font-semibold text-blue-900">Buyer Information</h3>
                            <div className="mt-5 grid gap-6 md:grid-cols-2">
                                <label className="text-sm font-medium text-slate-700">
                                    Company Name <span className="text-red-500">*</span>
                                    <input
                                        type="text"
                                        name="companyName"
                                        required
                                        className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                                    />
                                </label>
                                <label className="text-sm font-medium text-slate-700">
                                    Buyer Type <span className="text-red-500">*</span>
                                    <select
                                        name="buyerType"
                                        required
                                        className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                                    >
                                        <option value="">Select buyer type</option>
                                        <option value="retailer">Retailer</option>
                                        <option value="brand">Brand</option>
                                        <option value="wholesaler">Wholesaler</option>
                                        <option value="importer">Importer</option>
                                        <option value="startup">Startup</option>
                                    </select>
                                </label>
                                <label className="text-sm font-medium text-slate-700">
                                    Contact Person <span className="text-red-500">*</span>
                                    <input
                                        type="text"
                                        name="contactPerson"
                                        required
                                        className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                                    />
                                </label>
                                <label className="text-sm font-medium text-slate-700">
                                    Position/Title
                                    <input
                                        type="text"
                                        name="positionTitle"
                                        className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                                    />
                                </label>
                                <label className="text-sm font-medium text-slate-700">
                                    Email Address <span className="text-red-500">*</span>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                                    />
                                </label>
                                <label className="text-sm font-medium text-slate-700">
                                    Phone Number <span className="text-red-500">*</span>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                                    />
                                </label>
                                <label className="text-sm font-medium text-slate-700">
                                    Country <span className="text-red-500">*</span>
                                    <input
                                        type="text"
                                        name="country"
                                        required
                                        className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                                    />
                                </label>
                                <label className="text-sm font-medium text-slate-700">
                                    Company Website
                                    <input
                                        type="url"
                                        name="website"
                                        placeholder="https://"
                                        className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                                    />
                                </label>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-blue-900">Product Requirements</h3>
                            <div className="mt-5 space-y-6">
                                <div>
                                    <p className="text-sm font-medium text-slate-700">
                                        Product Categories <span className="text-red-500">*</span>{" "}
                                        <span className="text-xs font-normal text-slate-500">(Select all that apply)</span>
                                    </p>
                                    <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                        {productCategories.map((item) => (
                                            <label key={item.id} className="flex items-center gap-2 text-sm text-slate-600">
                                                <input
                                                    type="checkbox"
                                                    name="productCategories"
                                                    value={item.id}
                                                    className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                                                />
                                                {item.label}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <label className="text-sm font-medium text-slate-700">
                                    Product Description <span className="text-red-500">*</span>
                                    <textarea
                                        name="productDescription"
                                        required
                                        rows={4}
                                        placeholder="Describe the products you need: style, fabric, colors, sizes, special features, etc."
                                        className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                                    />
                                </label>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <label className="text-sm font-medium text-slate-700">
                                        Order Quantity (pieces) <span className="text-red-500">*</span>
                                        <input
                                            type="number"
                                            name="orderQuantity"
                                            required
                                            className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                                        />
                                    </label>
                                    <label className="text-sm font-medium text-slate-700">
                                        Target Price per Piece (USD)
                                        <input
                                            type="text"
                                            name="targetPrice"
                                            placeholder="Optional"
                                            className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                                        />
                                    </label>
                                    <label className="text-sm font-medium text-slate-700">
                                        Required Delivery Date
                                        <input
                                            type="date"
                                            name="deliveryDate"
                                            className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                                        />
                                    </label>
                                    <label className="text-sm font-medium text-slate-700">
                                        Destination Port/Country <span className="text-red-500">*</span>
                                        <input
                                            type="text"
                                            name="destination"
                                            required
                                            className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                                        />
                                    </label>
                                    <label className="text-sm font-medium text-slate-700 md:col-span-2">
                                        Preferred Incoterms
                                        <select
                                            name="incoterms"
                                            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                                        >
                                            <option value="">Select incoterms</option>
                                            <option value="fob">FOB</option>
                                            <option value="cif">CIF</option>
                                            <option value="exw">EXW</option>
                                            <option value="ddp">DDP</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-blue-900">Additional Requirements</h3>
                            <div className="mt-5 space-y-6">
                                <div>
                                    <p className="text-sm font-medium text-slate-700">Services Needed</p>
                                    <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                        {servicesNeeded.map((item) => (
                                            <label key={item.id} className="flex items-center gap-2 text-sm text-slate-600">
                                                <input
                                                    type="checkbox"
                                                    name="servicesNeeded"
                                                    value={item.id}
                                                    className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                                                />
                                                {item.label}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-700">Certifications Required</p>
                                    <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                        {certifications.map((item) => (
                                            <label key={item.id} className="flex items-center gap-2 text-sm text-slate-600">
                                                <input
                                                    type="checkbox"
                                                    name="certifications"
                                                    value={item.id}
                                                    className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                                                />
                                                {item.label}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <label className="text-sm font-medium text-slate-700 md:col-span-2">
                                    Order Frequency
                                    <select
                                        name="orderFrequency"
                                        className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                                    >
                                        <option value="">One-time Order</option>
                                        <option value="repeat">Repeat Order</option>
                                        <option value="seasonal">Seasonal</option>
                                        <option value="monthly">Monthly</option>
                                    </select>
                                    <span className="mt-2 block text-xs text-slate-500">
                                        Regular orders qualify for better pricing and priority service
                                    </span>
                                </label>
                                <label className="text-sm font-medium text-slate-700">
                                    Additional Information or Special Requirements
                                    <textarea
                                        name="additionalInfo"
                                        rows={4}
                                        placeholder="Any other details, special requests, or questions..."
                                        className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                                    />
                                </label>
                                <label className="text-sm font-medium text-slate-700">
                                    Reference Images/Tech Pack (Optional)
                                    <input
                                        type="file"
                                        name="referenceFiles"
                                        multiple
                                        className="mt-2 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 file:mr-4 file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:text-sm file:font-medium file:text-slate-700 hover:file:bg-slate-200"
                                    />
                                    <span className="mt-2 block text-xs text-slate-500">
                                        You can upload images or PDF files showing your desired products
                                    </span>
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-3 text-center">
                            <button
                                type="submit"
                                className="w-full rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-400 sm:w-auto sm:min-w-[260px]"
                            >
                                Submit Inquiry
                            </button>
                            <p className="text-xs text-slate-500">
                                We'll respond within 24 hours with a detailed quotation
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ProductInquiryFormSection;
