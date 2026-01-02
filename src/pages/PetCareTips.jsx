import React, { useState } from 'react';
import { Search, X, Book, Heart, Activity, Home, Thermometer, Smile, Bird, Fish, Award, Users, Sparkles } from 'lucide-react';

export default function ProfessionalPetCareTips() {
    const [selectedTip, setSelectedTip] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('All');

    const tips = [
        {
            id: 1,
            title: "Nutrition Guide ", // 15 chars
            category: "Dog",
            icon: Heart,
            color: "bg-linear-to-r from-blue-600 to-cyan-600",
            image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=800&h=600&fit=crop&q=80",
            shortDesc: "Provide a balanced diet ensuring optimal nutrition and pet health",
            fullContent: "Adult dogs need balanced diets including protein fats carbohydrates vitamins minerals daily. Avoid chocolate grapes onions garlic xylitol toxic foods always. Provide fresh water daily. Portion size depends on age weight activity. Consult veterinarian regularly for dietary planning and healthy weight maintenance.",
            tag: "Nutrition"
        },
        {
            id: 2,
            title: "Pet Vaccines", // 15 chars
            category: "All",
            icon: Award,
            color: "bg-linear-to-r from-blue-600 to-cyan-600",
            image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&h=600&fit=crop&q=80",
            shortDesc: "Follow a precise vaccination schedule to safeguard pet wellness",
            fullContent: "Dogs require rabies distemper parvovirus adenovirus vaccines regularly. Cats need rabies panleukopenia calicivirus herpesvirus protection. Puppies kittens start vaccines six weeks with boosters until sixteen weeks. Adult pets need boosters every one three years depending veterinary advice lifestyle exposure risks.",
            tag: "Health"
        },
        {
            id: 3,
            title: "Grooming Tips  ", // 15 chars
            category: "Cat",
            icon: Smile,
            color: "bg-linear-to-r from-blue-600 to-cyan-600",
            image: "https://images.unsplash.com/photo-1536500152107-01ab1422f932?w=800&h=600&fit=crop&q=80",
            shortDesc: "Maintain long coats through systematic grooming and hygiene care",
            fullContent: "Daily brushing prevents mats reduces shedding long haired breeds. Use slicker brushes metal combs gently. Bathe every four weeks using pet shampoo. Trim nails monthly clean ears inspect paws. Professional grooming every six weeks recommended for specific long coated breeds.",
            tag: "Grooming"
        },
        {
            id: 4,
            title: "Home Prep Pets", // 15 chars
            category: "All",
            icon: Home,
            color: "bg-linear-to-r from-blue-600 to-cyan-600",
            image: "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?w=800&h=600&fit=crop&q=80",
            shortDesc: "Prepare your home environment ensuring safety and comfort for pets",
            fullContent: "Remove toxic plants secure wires store chemicals safely. Create feeding sleeping bathroom spaces clearly. Prepare bowls food bed litter toys leash collar carrier. Use baby gates limit access initially. Planning early creates safer smoother transition environment for new pets.",
            tag: "Home"
        },
        {
            id: 5,
            title: "Exercise Needs ", // 15 chars
            category: "Dog",
            icon: Activity,
            color: "bg-linear-to-r from-blue-600 to-cyan-600",
            image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&h=600&fit=crop&q=80",
            shortDesc: "Implement daily exercise regimens to maintain health and behavior",
            fullContent: "Dogs need thirty minutes two hours daily depending breed. Cats enjoy interactive play sessions climbing puzzles lasers. Mental stimulation equals physical importance. Seniors need gentle activity. Insufficient exercise causes obesity anxiety aggression and destructive habits long term health issues.",
            tag: "Fitness"
        },
        {
            id: 6,
            title: "Warning Signs ", // 15 chars
            category: "All",
            icon: Heart,
            color: "bg-linear-to-r from-blue-600 to-cyan-600",
            image: "https://img.freepik.com/free-photo/vet-with-nurse-examining-german-shepherd_7502-9552.jpg",
            shortDesc: "Recognize critical signs requiring prompt veterinary intervention",
            fullContent: "Emergency signs include breathing difficulty seizures collapse bleeding poisoning vomiting diarrhea inability urinate. Other concerns appetite loss lethargy limping behavior changes coughing weight loss. When uncertain contact veterinarian immediately. Early intervention saves lives prevents complications improves treatment success outcomes.",
            tag: "Emergency"
        },
        {
            id: 7,
            title: "Winter Care  ", // 15 chars
            category: "All",
            icon: Thermometer,
            color: "bg-linear-to-r from-blue-600 to-cyan-600",
            image: "https://img.freepik.com/free-photo/full-shot-kid-holding-dog-winter-time_23-2149344253.jpg",
            shortDesc: "Ensure pets are protected from cold with shelter, clothing, and diet",
            fullContent: "Provide insulated shelters increase food portions during cold months. Prevent water freezing limit outdoor exposure. Wipe paws after walks remove salt ice chemicals. Use pet clothing when needed. Watch hypothermia signs including shivering lethargy weakness especially vulnerable pets breeds.",
            tag: "Seasonal"
        },
        {
            id: 8,
            title: "Dental Care  ", // 15 chars
            category: "Dog",
            icon: Smile,
            color: "bg-linear-to-r from-blue-600 to-cyan-600",
            image: "https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-pet_23-2149143874.jpg",
            shortDesc: "Promote oral health through brushing, chews, and professional care",
            fullContent: "Brush teeth three times weekly using pet toothpaste only. Provide dental chews toys reduce plaque buildup. Watch bad breath bleeding gums tartar difficulty eating. Annual professional cleaning recommended. Dental disease affects most dogs early impacting overall health longevity quality life.",
            tag: "Hygiene"
        },
        {
            id: 9,
            title: "Bird Care Guide", // 15 chars
            category: "Bird",
            icon: Bird,
            color: "bg-linear-to-r from-blue-600 to-cyan-600",
            image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&h=600&fit=crop&q=80",
            shortDesc: "Provide proper cage, nutrition, and enrichment for healthy birds",
            fullContent: "Provide spacious cage varied perches balanced diet pellets fruits vegetables. Fresh water daily. Offer toys for mental stimulation social interaction. Allow supervised free flight time. Avoid toxic fumes cookware candles sprays. Schedule routine avian veterinary checkups for health.",
            tag: "Exotic"
        },
        {
            id: 10,
            title: "Fish Tank Guide", // 15 chars
            category: "Fish",
            icon: Fish,
            color: "bg-linear-to-r from-blue-600 to-cyan-600",
            image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=800&h=600&fit=crop&q=80",
            shortDesc: "Maintain water quality and care for fish in a healthy aquarium",
            fullContent: "Test water weekly ammonia nitrite nitrate pH. Change water partially weekly. Clean filters monthly preserve beneficial bacteria. Maintain stable temperature heater thermometer. Feed small portions remove leftovers promptly. Quarantine new fish prevent disease spreading outbreaks.",
            tag: "Aquatic"
        },
        {
            id: 11,
            title: "Pet Socializing", // 15 chars
            category: "All",
            icon: Users,
            color: "bg-linear-to-r from-blue-600 to-cyan-600",
            image: "https://img.freepik.com/free-photo/full-shot-woman-feeding-dog_23-2148977435.jpg",
            shortDesc: "Facilitate socialization to ensure confident and adaptable pets",
            fullContent: "Expose young pets to people sounds surfaces environments positively. Use treats praise avoid fear. Enroll puppy kitten classes. Continue socialization throughout life. Early experiences prevent fear aggression anxiety later creating adaptable confident well behaved companion animals.",
            tag: "Training"
        },
        {
            id: 12,
            title: "Pet Body Language", // 15 chars
            category: "All",
            icon: Heart,
            color: "bg-linear-to-r from-blue-600 to-cyan-600",
            image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop&q=80",
            shortDesc: "Interpret pet signals professionally to enhance care and bonding",
            fullContent: "Dogs express emotions through tail ear posture movement. Cats show trust slow blinking tail position ears. Recognizing stress fear happiness prevents conflict improves communication strengthens bond. Understanding signals helps owners respond appropriately ensuring safety comfort mutual trust.",
            tag: "Behavior"
        }
    ];


    const categories = ['All', 'Dog', 'Cat', 'Bird', 'Fish'];

    const filteredTips = tips.filter(tip => {
        const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tip.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === 'All' || tip.category === filterCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <section className="px-6 py-16 bg-base-200 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <Sparkles className="w-4 h-4" />
                        Expert Pet Care Knowledge
                    </div>

                    <h2 className="text-4xl font-bold text-center text-base-content mb-4">
                        Essential Pet <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Care Tips</span>
                    </h2>

                    <p className="text-center text-base-content/70 max-w-4xl mx-auto text-lg">
                        Science-backed advice from veterinary professionals to keep your pets happy, healthy, and thriving.
                    </p>
                </div>

                {/* Search & Filter */}
                <div className="mb-12 flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-base-content/40 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search tips..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-base-content/20 rounded-lg bg-base-100 text-base-content focus:outline-none focus:border-primary transition-colors duration-300"
                        />
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilterCategory(cat)}
                                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${filterCategory === cat
                                    ? "bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                                    }`}
                            >
                                {cat}
                            </button>

                        ))}
                    </div>
                </div>

                {/* Tips Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredTips.map(tip => {
                        const IconComponent = tip.icon;
                        return (
                            <div
                                key={tip.id}
                                className="bg-base-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-base-content/10 group"
                                onClick={() => setSelectedTip(tip)}
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={tip.image}
                                        alt={tip.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className={`absolute top-4 left-4 ${tip.color} text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg`}>
                                        <IconComponent className="w-4 h-4" />
                                        {tip.tag}
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-base-content">
                                        {tip.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-base-content">{tip.title}</h3>
                                    <p className="text-base-content/60 text-sm mb-4 line-clamp-2">{tip.shortDesc}</p>
                                    <div className="flex items-center gap-2 font-semibold text-sm">
                                        <Book className="w-4 h-4 text-blue-600" />
                                        <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                            Read More
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {filteredTips.length === 0 && (
                    <div className="text-center py-12">
                        <Search className="w-16 h-16 text-base-content/30 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-base-content mb-2">No tips found</h3>
                        <p className="text-base-content/60">Try adjusting your search or filter</p>
                    </div>
                )}
            </div>

            {/* Modal */}
            {selectedTip && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-base-100 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-base-content/10">
                        <div className="relative">
                            <img
                                src={selectedTip.image}
                                alt={selectedTip.title}
                                className="w-full h-80 object-cover rounded-t-lg"
                            />
                            <button
                                onClick={() => setSelectedTip(null)}
                                className="absolute top-4 right-4 bg-base-100 rounded-full p-2 shadow-lg hover:bg-base-200 transition-colors duration-300"
                            >
                                <X className="w-5 h-5 text-base-content" />
                            </button>
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-16 h-16 ${selectedTip.color} rounded-lg flex items-center justify-center shadow-lg`}>
                                    {React.createElement(selectedTip.icon, { className: "w-8 h-8 text-white" })}
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-base-content">{selectedTip.title}</h2>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-sm bg-base-200 px-3 py-1 rounded-full font-medium text-base-content">
                                            {selectedTip.category}
                                        </span>
                                        <span className={`text-sm ${selectedTip.color} text-white px-3 py-1 rounded-full font-medium`}>
                                            {selectedTip.tag}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-base-content/80 text-lg leading-relaxed mb-8">{selectedTip.fullContent}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}