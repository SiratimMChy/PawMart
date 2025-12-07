import { Heart, Home, PawPrint, Sparkles } from 'lucide-react';
import React from 'react';

const WhyAdopt = () => {
    const benefits = [
        {
            icon: PawPrint,
            title: "Save a Life",
            description:
                "Every adoption rescues a vulnerable animal from uncertainty and gives them a second chance at happiness, safety, and love.",
        },
        {
            icon: Home,
            title: "Reduce Homelessness",
            description:
                "Your adoption frees up vital shelter resources, allowing more animals to receive the care they need. Make a difference in your community.",
        },
        {
            icon: Heart,
            title: "Unconditional Love",
            description:
                "Welcome a loyal companion who brings endless joy, affection, and meaningful moments into your everyday life.",
        },
    ];

    return (
        <section className="px-5 py-20 bg-base-200 relative overflow-hidden">

            {/* Soft floating glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <Sparkles className="w-4 h-4" />
                        Why Choose PawMart
                    </div>

                    <h2 className="text-5xl font-extrabold mb-6 text-base-content">
                        Adopt with <span className="text-primary">Confidence</span>
                    </h2>

                    <p className="text-base-content/70 max-w-3xl mx-auto text-lg leading-relaxed">
                        At PawMart, we believe every pet deserves a loving home. Adoption doesn’t just save lives—it enriches yours.
                        Join thousands of families who've found their perfect companion.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-base-100 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-base-content/10 w-full max-w-lg"
                            >
                                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <Icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold mb-3 text-base-content">
                                    {benefit.title}
                                </h3>

                                <p className="text-base-content/70 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyAdopt;
