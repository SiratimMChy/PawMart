import { Heart, Home, PawPrint, Sparkles, Stethoscope } from 'lucide-react';
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
        {
            icon: Stethoscope,
            title: "Health-Checked & Verified Pets",
            description:
                "All listed pets undergo basic health checks and vaccinations, ensuring safer and more confident adoption decisions.",
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
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <Sparkles className="w-4 h-4" />
                        Why Choose PawMart
                    </div>

                    <h2 className="text-4xl font-extrabold mb-6 text-base-content">
                        Adopt with <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Confidence</span>
                    </h2>

                    <p className="text-base-content/70 max-w-3xl mx-auto text-lg leading-relaxed">
                        At PawMart, we believe every pet deserves a loving home. Adoption doesn't just save lives it enriches yours.
                        Join thousands of families who've found their perfect companion.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-4 mb-8">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="card bg-base-100 w-full max-w-lg shadow-sm border border-base-content/10 flex flex-col h-full p-8"
                            >
                                {/* Icon */}
                                <div className="w-16 h-16 bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                    <Icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Title & Description */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-base-content mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-base-content/70 text-sm leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyAdopt;
