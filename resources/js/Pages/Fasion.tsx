import React from "react";
import MainLayout from "../Layouts/MainLayout";
import ServicesSection from "../Components/ServicesSection";
import ProductCategoriesSection from "../Components/ProductCategoriesSection";
import TransparentPricingSection from "../Components/TransparentPricingSection";
import ServiceFeesSection from "../Components/ServiceFeesSection";
import WhyChooseSection from "../Components/WhyChooseSection";
import HowItWorksSection from "../Components/HowItWorksSection";
import ProductInquiryFormSection from "../Components/ProductInquiryFormSection";

// Hi
const Fasion: React.FC = () => {
    return (
        <MainLayout>
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-blue-700">
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,197,255,0.25),_transparent_55%)]"
                    aria-hidden="true"
                />
                <div className="relative mx-auto flex min-h-[70vh] max-w-6xl items-center px-6 py-16 md:py-24">
                    <div className="w-full text-center text-white md:w-3/5 md:text-left">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
                            Buying House • Wholesale
                        </p>
                        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                            Quins Fashion
                        </h1>
                        <p className="mt-5 max-w-xl text-base text-blue-100 sm:text-lg">
                            Your trusted buying house and wholesale platform connecting Bangladesh manufacturers with
                            global buyers.
                        </p>
                        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
                            <a
                                href="/get-started"
                                className="inline-flex items-center justify-center rounded-full bg-sky-400 px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/30 transition hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Get Started
                            </a>
                            <a
                                href="/about"
                                className="text-sm font-semibold text-white underline-offset-4 hover:underline"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                    <div className="relative mt-12 hidden w-2/5 justify-end md:flex">
                        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
                        <img
                            src="/images/hero-home.jpg"
                            alt="Fashion showcase"
                            className="relative h-[360px] w-full max-w-xs rounded-[2rem] object-cover shadow-2xl shadow-blue-900/50"
                        />
                    </div>
                </div>
            </section>
            <ServicesSection />
            <ProductCategoriesSection />
            <TransparentPricingSection />
            <ServiceFeesSection />
            <WhyChooseSection />
            <HowItWorksSection />
            <ProductInquiryFormSection />
        </MainLayout>
    );
};
export default Fasion;
