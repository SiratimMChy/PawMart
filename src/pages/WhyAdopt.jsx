import { Heart, Home, PawPrint, Sparkles } from 'lucide-react';
import React from 'react';

const WhyAdopt = () => {
    const benefits = [
        {
            icon: PawPrint,
            title: "Save a Life",
            description: "Every adoption rescues a vulnerable animal from uncertainty and gives them a second chance at happiness, safety, and love. Your choice today can transform a life forever.",
            gradient: "from-blue-500 to-blue-600"
        },
        {
            icon: Home,
            title: "Reduce Homelessness",
            description: "Your adoption frees up vital shelter resources, allowing more animals to receive the care and attention they desperately need. Make a difference in your community.",
            gradient: "from-blue-600 to-cyan-500"
        },
        {
            icon: Heart,
            title: "Unconditional Love",
            description: "Welcome a loyal companion who will bring endless joy, affection, and meaningful moments into your everyday life. Experience the bond that only a pet can provide.",
            gradient: "from-cyan-500 to-blue-500"
        }
    ];

    return (
        <section className="px-5 py-20 bg-linear-to-br from-gray-50 via-blue-50 to-slate-100 relative overflow-hidden">
           
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
               
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <Sparkles className="w-4 h-4" />
                        Why Choose PawMart
                    </div>
                    <h2 className="text-5xl font-extrabold mb-6 text-gray-800">
                        Adopt with <span className="text-blue-600">Confidence</span>
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        At PawMart, we believe every pet deserves a loving home. Adoption doesn't just save lives—it enriches yours. 
                        Join thousands of happy families who've found their perfect companion through our platform.
                    </p>
                </div>

                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 justify-items-center">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div 
                                key={index}
                                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 w-full max-w-lg"
                            >
                                <div className={`w-16 h-16 bg-linear-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
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