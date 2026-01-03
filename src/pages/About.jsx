import React from 'react';
import { Heart, Users, Shield, Handshake, Sparkles } from 'lucide-react';

const About = () => {
    const values = [
        {
            icon: Heart,
            title: "Animal Welfare",
            description: "We prioritize the health, safety, and well-being of every animal on our platform through careful verification and support."
        },
        {
            icon: Shield,
            title: "Trust & Transparency",
            description: "Building trust through verified listings, honest communication, and transparent processes between adopters and pet owners."
        },
        {
            icon: Users,
            title: "Community Support",
            description: "Fostering a supportive community of pet lovers who share knowledge, resources, and experiences."
        },
        {
            icon: Handshake,
            title: "Responsible Adoption",
            description: "Promoting responsible pet ownership through education, guidance, and ongoing support for new pet parents."
        }
    ];

    return (
        <div className="min-h-screen bg-base-200">
            {/* Hero Section */}
            <section className="px-5 py-20 bg-base-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            <Sparkles className="w-4 h-4" />
                            About PawMart
                        </div>

                        <h1 className="text-4xl font-extrabold mb-6 text-base-content">
                            Bangladesh's Trusted <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Pet Adoption Platform</span>
                        </h1>

                        <p className="text-base-content/70 max-w-5xl mx-auto text-lg leading-relaxed">
                            PawMart connects pet owners with loving adopters across Bangladesh. We provide a secure, transparent platform
                            for pet adoption, rehoming, and the sale of pet supplies, making responsible pet ownership accessible to everyone.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="px-5 py-20 bg-base-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            <Heart className="w-4 h-4" />
                            Our Core Values
                        </div>

                        <h2 className="text-4xl font-extrabold mb-6 text-base-content">
                            What <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Guides</span> Our Work
                        </h2>

                        <p className="text-base-content/70 max-w-3xl mx-auto text-lg leading-relaxed">
                            Our commitment to animals, adopters, and the community
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={index}
                                    className="card bg-base-100 w-full max-w-lg shadow-sm border border-base-content/10 flex flex-col h-full p-8"
                                >
                                    {/* Icon container */}
                                    <div className="w-16 h-16 bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-base-content mb-3">
                                            {value.title}
                                        </h3>
                                        <p className="text-base-content/70 leading-relaxed text-sm">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>
        </div>
    );
};

export default About;