import React from 'react';

const PetHeroes = () => {
    const heroes = [
        {
            id: 1,
            name: "Dr. Kevin Frost",
            specialization: "Cold Weather Nutrition",
            experience: "6 Years Exp.",
            image: "https://i.ibb.co.com/5WTyZ3TB/12596.jpg",
        },
        {
            id: 2,
            name: "Dr. Sarah Malik",
            specialization: "Senior Dog Care Specialist",
            experience: "8 Years Exp.",
            image: "https://i.ibb.co.com/XxzXjQsQ/portrait-young-female-doctor.jpg",
        },
        {
            id: 3,
            name: "Dr. Akram Khan",
            specialization: "Veterinary Surgeon",
            experience: "12 Years Exp.",
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400"
        },
        {
            id: 4,
            name: "Dr. Aaradhya Das",
            specialization: "Animal Behavioral Therapist",
            experience: "5 Years Exp.",
            image: "https://i.ibb.co.com/PG4wfqZL/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-postur.jpg"
        }
    ];

    return (
        <section className="px-6 py-16 bg-base-200 mt-10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">

              
                <h2 className="text-4xl font-bold text-center text-base-content mb-4">
                    Meet Our <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Pet Heroes</span>
                </h2>

                <p className="text-center text-base-content/70 max-w-2xl mx-auto text-lg mb-12">
                    Dedicated professionals committed to the health and happiness of every animal.
                </p>

           
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {heroes.map((hero) => (
                        <div
                            key={hero.id}
                            className="bg-base-100 rounded-lg shadow-md overflow-hidden border border-base-content/10 hover:shadow-xl transition-all duration-300"
                        >
                            <img
                                src={hero.image}
                                alt={hero.name}
                                className="w-full h-65 object-cover"
                            />

                            <div className="p-5">
                                <h3 className="font-bold text-xl text-base-content mb-2">
                                    {hero.name}
                                </h3>

                                <p className="text-primary font-medium text-sm mb-1">
                                    {hero.specialization}
                                </p>

                                <p className="text-base-content/60 text-sm">
                                    {hero.experience}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PetHeroes;
