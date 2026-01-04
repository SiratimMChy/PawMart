import React, { useState } from 'react';
import { Phone, Mail, MapPin, Search, Heart, Shield, ExternalLink, Sparkles } from 'lucide-react';

const BDAnimalOrg = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCity, setFilterCity] = useState('All');

  const organizations = [
    // Dhaka Division (4 organizations)
    {
      id: 1,
      name: "Obhoyaronno Bangladesh",
      division: "Dhaka",
      location: "Dhaka",
      phone: "+880 1713-040355",
      email: "info@obhoyaronno.org",
      facebook: "https://www.facebook.com/ObhoyaronnoBD",
      description: "Bangladesh's first animal welfare foundation running CNVR program for street dogs and rabies prevention. Winner of HSUS Animal Advocate Award 2012.",
      specialty: "CNVR Program & Rabies Prevention"
    },
    {
      id: 2,
      name: "PAW Foundation Bangladesh",
      division: "Dhaka",
      location: "Mirpur & Lalmatia, Dhaka",
      phone: "+880 1909-617994",
      email: "contact@pawfoundationbd.org",
      facebook: "https://www.facebook.com/PAWFoundationBD",
      description: "Working since 2015 for animal welfare standards through rescue, treatment, and rehabilitation. Operates veterinary clinics at Mirpur and Lalmatia.",
      specialty: "Veterinary Clinics & Rehabilitation"
    },
    {
      id: 3,
      name: "Care For Paws (CFP)",
      division: "Dhaka",
      location: "Zigatola, Dhaka",
      phone: "+880 1635-817270",
      email: "careforpawsbd@gmail.com",
      facebook: "https://www.facebook.com/CareForPawsBD",
      description: "Registered animal welfare organization providing rescue, treatment and shelter for neglected, abused and injured animals. Registration: DHA-09431.",
      specialty: "Rescue & Shelter Services"
    },
    {
      id: 4,
      name: "Alpha Animal Shelter",
      division: "Dhaka",
      location: "Purbachal, Dhaka",
      phone: "+880 1700-000000",
      email: "info@alphaanimalshelter.com",
      facebook: "https://www.facebook.com/AlphaAnimalShelter",
      description: "A no-kill shelter dedicated to preventing animal cruelty and overpopulation. Provides medical care, nutrition, and rescue services.",
      specialty: "No-Kill Shelter"
    },
    
    // Chittagong Division (4 organizations)
    {
      id: 5,
      name: "Chittagong Veterinary Hospital",
      division: "Chittagong",
      location: "Agrabad, Chittagong",
      phone: "+880 1712-345678",
      email: "info@ctgvet.org",
      facebook: "https://www.facebook.com/CtgVetHospital",
      description: "Premier veterinary hospital in Chittagong providing comprehensive animal healthcare, emergency services, and surgical facilities for all types of pets.",
      specialty: "Comprehensive Veterinary Care"
    },
    {
      id: 6,
      name: "Chittagong Animal Welfare Society",
      division: "Chittagong",
      location: "Khulshi, Chittagong",
      phone: "+880 1812-567890",
      email: "contact@caws.org.bd",
      facebook: "https://www.facebook.com/ChittagongAnimalWelfare",
      description: "Dedicated to protecting and caring for stray animals in Chittagong. Provides rescue services, medical treatment, and adoption programs.",
      specialty: "Stray Animal Rescue & Adoption"
    },
    {
      id: 7,
      name: "Port City Pet Care",
      division: "Chittagong",
      location: "Panchlaish, Chittagong",
      phone: "+880 1923-456789",
      email: "info@portcitypet.com",
      facebook: "https://www.facebook.com/PortCityPetCare",
      description: "Modern pet clinic offering preventive care, diagnostics, grooming services, and 24/7 emergency support for pet owners in Chittagong.",
      specialty: "Pet Clinic & Emergency Care"
    },
    {
      id: 8,
      name: "Chattogram Pet Hospital",
      division: "Chittagong",
      location: "Nasirabad, Chittagong",
      phone: "+880 1645-789012",
      email: "info@chattogrampet.org",
      facebook: "https://www.facebook.com/ChattogramPetHospital",
      description: "Full-service pet hospital with advanced medical equipment, experienced veterinary staff, and 24-hour emergency care facilities.",
      specialty: "Advanced Pet Hospital"
    },

    // Rajshahi Division (4 organizations)
    {
      id: 9,
      name: "Rajshahi Animal Hospital",
      division: "Rajshahi",
      location: "Shaheb Bazar, Rajshahi",
      phone: "+880 1715-234567",
      email: "info@rajshahianimalhospital.org",
      facebook: "https://www.facebook.com/RajshahiAnimalHospital",
      description: "Leading animal healthcare facility in Rajshahi offering medical treatment, surgery, vaccination programs, and animal welfare services.",
      specialty: "Veterinary Hospital Services"
    },
    {
      id: 10,
      name: "Rajshahi Pet Welfare Foundation",
      division: "Rajshahi",
      location: "Boalia, Rajshahi",
      phone: "+880 1834-567890",
      email: "contact@rpwf.org.bd",
      facebook: "https://www.facebook.com/RajshahiPetWelfare",
      description: "Non-profit organization working to improve animal welfare standards in Rajshahi through rescue operations, medical care, and community education.",
      specialty: "Animal Welfare & Education"
    },
    {
      id: 11,
      name: "North Bengal Veterinary Clinic",
      division: "Rajshahi",
      location: "Kazla, Rajshahi",
      phone: "+880 1678-901234",
      email: "info@northbengalvet.com",
      facebook: "https://www.facebook.com/NorthBengalVet",
      description: "Professional veterinary clinic providing quality healthcare for pets and livestock with experienced veterinarians and modern facilities.",
      specialty: "Professional Veterinary Services"
    },
    {
      id: 12,
      name: "Varendra Animal Care",
      division: "Rajshahi",
      location: "Motihar, Rajshahi",
      phone: "+880 1789-012345",
      email: "info@varendraanimalcare.org",
      facebook: "https://www.facebook.com/VarendraAnimalCare",
      description: "Community-focused animal care center providing affordable veterinary services, rescue operations, and pet adoption programs.",
      specialty: "Community Animal Services"
    },

    // Khulna Division (4 organizations)
    {
      id: 13,
      name: "Khulna Animal Care Center",
      division: "Khulna",
      location: "Sonadanga, Khulna",
      phone: "+880 1756-789012",
      email: "info@khulnaanimalcare.org",
      facebook: "https://www.facebook.com/KhulnaAnimalCare",
      description: "Comprehensive animal care center offering medical services, rescue operations, and shelter facilities for abandoned and injured animals.",
      specialty: "Animal Care & Shelter"
    },
    {
      id: 14,
      name: "Sundarbans Wildlife Rescue",
      division: "Khulna",
      location: "Daulatpur, Khulna",
      phone: "+880 1867-890123",
      email: "contact@sundarbanswildlife.org",
      facebook: "https://www.facebook.com/SundarbansWildlifeRescue",
      description: "Specialized in wildlife rescue and rehabilitation near Sundarbans region. Also provides domestic animal care and emergency veterinary services.",
      specialty: "Wildlife & Domestic Animal Rescue"
    },
    {
      id: 15,
      name: "Khulna Pet Hospital",
      division: "Khulna",
      location: "Khan Jahan Ali Road, Khulna",
      phone: "+880 1923-678901",
      email: "info@khulnapethospital.com",
      facebook: "https://www.facebook.com/KhulnaPetHospital",
      description: "Modern pet hospital with advanced diagnostic equipment, experienced veterinary team, and comprehensive treatment facilities.",
      specialty: "Advanced Pet Healthcare"
    },
    {
      id: 16,
      name: "Rupsha Animal Welfare",
      division: "Khulna",
      location: "Khulna Sadar, Khulna",
      phone: "+880 1712-345890",
      email: "info@rupshaanimalwelfare.org",
      facebook: "https://www.facebook.com/RupshaAnimalWelfare",
      description: "Dedicated animal welfare organization providing rescue, medical treatment, sterilization programs, and community outreach services.",
      specialty: "Welfare & Sterilization Programs"
    },

    // Sylhet Division (4 organizations)
    {
      id: 17,
      name: "Sylhet Animal Welfare Association",
      division: "Sylhet",
      location: "Zindabazar, Sylhet",
      phone: "+880 1789-234567",
      email: "info@sylhetanimalwelfare.org",
      facebook: "https://www.facebook.com/SylhetAnimalWelfare",
      description: "Active animal welfare organization providing rescue services, medical treatment, and advocacy for animal rights in Sylhet region.",
      specialty: "Animal Welfare & Advocacy"
    },
    {
      id: 18,
      name: "Sylhet Veterinary Hospital",
      division: "Sylhet",
      location: "Amberkhana, Sylhet",
      phone: "+880 1656-345678",
      email: "contact@sylhetvet.org",
      facebook: "https://www.facebook.com/SylhetVetHospital",
      description: "Established veterinary hospital offering complete animal healthcare including surgery, diagnostics, vaccination, and emergency services.",
      specialty: "Complete Veterinary Services"
    },
    {
      id: 19,
      name: "Tea Garden Animal Care",
      division: "Sylhet",
      location: "Moulvibazar Road, Sylhet",
      phone: "+880 1734-567890",
      email: "info@teagardenanimalcare.org",
      facebook: "https://www.facebook.com/TeaGardenAnimalCare",
      description: "Serving tea garden communities and urban areas with mobile veterinary services, animal rescue, and community education programs.",
      specialty: "Mobile Veterinary Services"
    },
    {
      id: 20,
      name: "Surma Valley Pet Clinic",
      division: "Sylhet",
      location: "Dorgah Gate, Sylhet",
      phone: "+880 1823-678901",
      email: "info@surmavalleypet.com",
      facebook: "https://www.facebook.com/SurmaValleyPetClinic",
      description: "Professional pet clinic offering preventive care, medical treatment, grooming services, and nutritional counseling for all pets.",
      specialty: "Pet Clinic & Grooming"
    },

    // Barishal Division (4 organizations)
    {
      id: 21,
      name: "Barishal Animal Hospital",
      division: "Barishal",
      location: "Nathullabad, Barishal",
      phone: "+880 1845-678901",
      email: "info@barishalanimal.org",
      facebook: "https://www.facebook.com/BarishalAnimalHospital",
      description: "Primary animal healthcare facility in Barishal offering medical treatment, surgery, and preventive care for pets and livestock.",
      specialty: "Animal Medical Services"
    },
    {
      id: 22,
      name: "Barishal Pet Rescue",
      division: "Barishal",
      location: "Band Road, Barishal",
      phone: "+880 1978-789012",
      email: "contact@barishalpetrescue.org",
      facebook: "https://www.facebook.com/BarishalPetRescue",
      description: "Dedicated rescue organization for abandoned and injured animals. Provides emergency care, rehabilitation, and adoption services.",
      specialty: "Emergency Rescue & Adoption"
    },
    {
      id: 23,
      name: "Southern Bengal Vet Clinic",
      division: "Barishal",
      location: "Kashipur, Barishal",
      phone: "+880 1712-890123",
      email: "info@southernbengalvet.com",
      facebook: "https://www.facebook.com/SouthernBengalVet",
      description: "Professional veterinary clinic with qualified staff providing quality healthcare, grooming, and wellness programs for all pets.",
      specialty: "Pet Healthcare & Wellness"
    },
    {
      id: 24,
      name: "Payra River Animal Care",
      division: "Barishal",
      location: "Rupatoli, Barishal",
      phone: "+880 1634-901234",
      email: "info@payrariveranimal.org",
      facebook: "https://www.facebook.com/PayraRiverAnimalCare",
      description: "Coastal animal welfare center specializing in rescue operations, medical care, and rehabilitation services for animals in the region.",
      specialty: "Coastal Animal Welfare"
    },

    // Rangpur Division (4 organizations)
    {
      id: 25,
      name: "Rangpur Animal Welfare Center",
      division: "Rangpur",
      location: "Munshipara, Rangpur",
      phone: "+880 1623-901234",
      email: "info@rangpuranimalwelfare.org",
      facebook: "https://www.facebook.com/RangpurAnimalWelfare",
      description: "Community-based animal welfare center providing medical care, rescue services, and education programs for responsible pet ownership.",
      specialty: "Community Animal Welfare"
    },
    {
      id: 26,
      name: "Rangpur Veterinary Services",
      division: "Rangpur",
      location: "Tajhat Road, Rangpur",
      phone: "+880 1534-012345",
      email: "contact@rangpurvet.org",
      facebook: "https://www.facebook.com/RangpurVetServices",
      description: "Comprehensive veterinary services including clinical treatment, surgery, vaccination programs, and livestock healthcare.",
      specialty: "Veterinary & Livestock Care"
    },
    {
      id: 27,
      name: "North Point Pet Clinic",
      division: "Rangpur",
      location: "Station Road, Rangpur",
      phone: "+880 1867-123456",
      email: "info@northpointpet.com",
      facebook: "https://www.facebook.com/NorthPointPetClinic",
      description: "Modern pet clinic offering diagnostic services, preventive care, dental care, and nutritional counseling for pets.",
      specialty: "Modern Pet Clinic Services"
    },
    {
      id: 28,
      name: "Teesta Valley Animal Hospital",
      division: "Rangpur",
      location: "Jail Road, Rangpur",
      phone: "+880 1745-234890",
      email: "info@teestavalleyanimalhospital.org",
      facebook: "https://www.facebook.com/TeestaValleyAnimalHospital",
      description: "Full-service animal hospital providing comprehensive medical care, emergency services, and specialized treatment for all animals.",
      specialty: "Full Service Animal Hospital"
    },

    // Mymensingh Division (4 organizations)
    {
      id: 29,
      name: "Mymensingh Animal Hospital",
      division: "Mymensingh",
      location: "Charpara, Mymensingh",
      phone: "+880 1745-234567",
      email: "info@mymensinghanimal.org",
      facebook: "https://www.facebook.com/MymensinghAnimalHospital",
      description: "Well-equipped animal hospital providing comprehensive healthcare including surgery, diagnostics, and emergency services for all animals.",
      specialty: "Comprehensive Animal Healthcare"
    },
    {
      id: 30,
      name: "Bangladesh Agricultural University Vet Clinic",
      division: "Mymensingh",
      location: "BAU Campus, Mymensingh",
      phone: "+880 1890-345678",
      email: "vetclinic@bau.edu.bd",
      facebook: "https://www.facebook.com/BAUVetClinic",
      description: "University-based veterinary clinic offering advanced treatment, research-based care, and teaching hospital facilities.",
      specialty: "Academic Veterinary Services"
    },
    {
      id: 31,
      name: "Brahmaputra Pet Care",
      division: "Mymensingh",
      location: "Maskanda, Mymensingh",
      phone: "+880 1678-456789",
      email: "info@brahmaputrapetcare.com",
      facebook: "https://www.facebook.com/BrahmaputraPetCare",
      description: "Dedicated pet care center providing medical treatment, grooming, boarding facilities, and preventive healthcare services.",
      specialty: "Pet Care & Boarding"
    },
    {
      id: 32,
      name: "Old Brahmaputra Animal Rescue",
      division: "Mymensingh",
      location: "Town Hall, Mymensingh",
      phone: "+880 1556-789012",
      email: "info@oldbrahmputrarescue.org",
      facebook: "https://www.facebook.com/OldBrahmaputraAnimalRescue",
      description: "Emergency animal rescue organization providing 24/7 rescue services, medical care, rehabilitation, and adoption programs.",
      specialty: "Emergency Rescue Services"
    }
  ];

  const divisions = ['All', 'Dhaka', 'Chittagong', 'Rajshahi', 'Khulna', 'Sylhet', 'Barishal', 'Rangpur', 'Mymensingh'];

  const filteredOrgs = organizations.filter(org => {
    const matchesSearch = 
      org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      org.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      org.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDivision = filterCity === 'All' || org.division === filterCity;
    return matchesSearch && matchesDivision;
  });

  return (
    <section className="px-5 py-20 bg-base-200 relative overflow-hidden">
      {/* Soft floating glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Verified Organizations
          </div>
          
          <h2 className="text-4xl font-extrabold text-base-content mb-6">
            Animal Welfare <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Organizations</span>
          </h2>
          
          <p className="text-base-content/70 max-w-3xl mx-auto text-lg leading-relaxed">
            Connect with trusted animal welfare organizations across Bangladesh for rescue, adoption, and emergency care. 
            These verified organizations work tirelessly to protect and care for animals in need.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-base-100 rounded-2xl shadow-md p-6 mb-12 border border-base-content/10">
          <div className="flex flex-col lg:flex-row gap-4">
            
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-base-content/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search organizations, services..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-base-content/20 rounded-lg bg-base-200 text-base-content focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Division Filter */}
            <div className="flex flex-wrap gap-2">
              {divisions.map(division => (
                <button
                  key={division}
                  onClick={() => setFilterCity(division)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    filterCity === division
                      ? 'bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-base-100 text-base-content border border-base-content/20 hover:bg-base-300'
                  }`}
                >
                  {division === 'All' ? 'All Divisions' : division}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-base-content/60">
            Showing <span className="font-bold text-primary">{filteredOrgs.length}</span> organization{filteredOrgs.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Organizations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {filteredOrgs.map(org => {
            return (
              <div
                key={org.id}
                className="bg-base-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-base-content/10 group w-full max-w-lg"
              >
                <div className="p-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>

                  {/* Name and Badge */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-base-content mb-2">
                      {org.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 bg-linear-to-r from-blue-600 to-cyan-600 text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                      <Shield className="w-3 h-3" />
                      Verified
                    </span>
                  </div>

                  {/* Specialty */}
                  <p className="text-sm font-medium bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
                    {org.specialty}
                  </p>

                  {/* Description */}
                  <p className="text-base-content/70 text-sm mb-4 leading-relaxed line-clamp-3">
                    {org.description}
                  </p>

                  {/* Contact Information */}
                  <div className="space-y-2 mb-4">
                    {/* Location */}
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-base-content/80 text-xs">{org.location}</span>
                    </div>

                    {/* Phone */}
                    <a 
                      href={`tel:${org.phone.replace(/\s/g, '')}`}
                      className="flex items-start gap-2 text-base-content/80 text-xs hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{org.phone}</span>
                    </a>

                    {/* Email */}
                    <a 
                      href={`mailto:${org.email}`}
                      className="flex items-start gap-2 text-base-content/80 text-xs hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="break-all">{org.email}</span>
                    </a>
                  </div>

                  {/* Facebook Button */}
                  <a
                    href={org.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Page
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredOrgs.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-20 h-20 text-base-content/20 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-base-content mb-2">No organizations found</h3>
            <p className="text-base-content/60 mb-6">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setFilterCity('All');
              }}
              className="px-6 py-3 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Emergency Notice */}
        <div className="mt-12 bg-linear-to-r from-blue-600/10 to-cyan-600/10 border border-primary/20 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shrink-0">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-base-content mb-3">
                Found an Injured Animal?
              </h3>
              <p className="text-base-content/70 text-lg leading-relaxed">
                Contact any of the organizations above immediately. They provide emergency rescue services 
                and are dedicated to helping animals in distress. Your quick action can save a life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BDAnimalOrg;