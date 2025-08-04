"use client";
import React, { useState, useEffect } from "react";
import {
  Globe,
  BookOpen,
  Layers,
  Target,
  Star,
  MapPin,
  Search,
  GraduationCap,
  Flag,
  Landmark,
  Atom,
  Rocket,
  BarChart,
  Settings,
  Library,
  BadgeCheck,
  DollarSign,
  Zap,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const UniversitiesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCountry, setActiveCountry] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredUniversity, setHoveredUniversity] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const countries = [
    { code: "all", name: "All Countries", flag: Globe, count: 150 },
    { code: "us", name: "United States", flag: Flag, count: 45 },
    { code: "uk", name: "United Kingdom", flag: Flag, count: 25 },
    { code: "germany", name: "Germany", flag: Landmark, count: 20 },
    { code: "spain", name: "Spain", flag: Landmark, count: 15 },
    { code: "canada", name: "Canada", flag: Flag, count: 18 },
    { code: "australia", name: "Australia", flag: Flag, count: 12 },
    { code: "others", name: "Others", flag: MapPin, count: 15 },
  ];

  const categories = [
    { id: "all", name: "All Programs" },
    { id: "engineering", name: "Engineering & Technology" },
    { id: "business", name: "Business & Management" },
    { id: "medicine", name: "Medicine & Health Sciences" },
    { id: "arts", name: "Arts & Humanities" },
    { id: "science", name: "Natural Sciences" },
  ];

  const universities = [
  // United States
  {
    name: "Harvard University",
    country: "us",
    location: "Cambridge, Massachusetts",
    ranking: "#4 World",
    categories: ["business", "medicine", "arts"],
    programs: ["MBA", "MD", "Law", "Engineering"],
    tuition: "$59,076/year",
    scholarships: "Need-based financial aid",
    acceptance: "3.7%",
    highlights: ["Ivy League", "Need-blind admissions", "World-renowned faculty"],
    logo: GraduationCap,
    partnership: "Tier 1",
    image: "/images/harvard.jpg",
    url: "https://www.harvard.edu",
  },
  {
    name: "Stanford University",
    country: "us",
    location: "Stanford, California",
    ranking: "#6 World",
    categories: ["engineering", "business", "science"],
    programs: ["Computer Science", "MBA", "Engineering", "Medicine"],
    tuition: "$61,731/year",
    scholarships: "Need-based financial aid",
    acceptance: "3.6%",
    highlights: ["Silicon Valley location", "Innovation hub", "Tech industry connections"],
    logo: Atom,
    partnership: "Tier 1",
    image: "/images/stanford.jpg",
    url: "https://www.stanford.edu",
  },
  {
    name: "MIT",
    country: "us",
    location: "Cambridge, Massachusetts",
    ranking: "#1 World",
    categories: ["engineering", "science"],
    programs: ["Computer Science", "Engineering", "AI/ML", "Robotics"],
    tuition: "$64,310/year",
    scholarships: "Need-based financial aid",
    acceptance: "4.5%",
    highlights: ["STEM excellence", "Research opportunities", "Industry partnerships"],
    logo: Atom,
    partnership: "Tier 1",
    image: "/images/mit.jpg",
    url: "https://www.mit.edu",
  },
  {
    name: "University of California, Berkeley",
    country: "us",
    location: "Berkeley, California",
    ranking: "#2 Public (USNWR)",
    categories: ["engineering", "business", "science"],
    programs: ["Engineering", "Business", "Computer Science", "Data Science"],
    tuition: "$51,858/year",
    scholarships: "Merit & need-based aid",
    acceptance: "11.4%",
    highlights: ["Public Ivy", "Research excellence", "Diverse community"],
    logo: BookOpen,
    partnership: "Tier 2",
    image: "/images/berkeley.jpg",
    url: "https://www.berkeley.edu",
  },

  // United Kingdom
  {
    name: "University of Oxford",
    country: "uk",
    location: "Oxford, England",
    ranking: "#3 World",
    categories: ["arts", "medicine", "business"],
    programs: ["PPE", "Medicine", "Law", "MBA"],
    tuition: "£35,000–£59,000/year",
    scholarships: "Bursaries & scholarships",
    acceptance: "14%",
    highlights: ["Oldest English university", "Tutorial system", "Historic prestige"],
    logo: Landmark,
    partnership: "Tier 1",
    image: "/images/oxford.jpg",
    url: "https://www.ox.ac.uk",
  },
  {
    name: "University of Cambridge",
    country: "uk",
    location: "Cambridge, England",
    ranking: "#5 World",
    categories: ["science", "engineering", "arts"],
    programs: ["Natural Sciences", "Engineering", "Mathematics", "Medicine"],
    tuition: "£27,000–£41,000/year",
    scholarships: "Bursaries & scholarships",
    acceptance: "17%",
    highlights: ["800+ years old", "Research excellence", "Notable alumni"],
    logo: Landmark,
    partnership: "Tier 1",
    image: "/images/cambridge.jpg",
    url: "https://www.cam.ac.uk",
  },
  {
    name: "Imperial College London",
    country: "uk",
    location: "London, England",
    ranking: "#2 World",
    categories: ["engineering", "science", "medicine"],
    programs: ["Engineering", "Medicine", "Computing", "Business"],
    tuition: "£9,535 (Home) or ~£36,000 (Intl)/year",
    scholarships: "Scholarships available",
    acceptance: "14%",
    highlights: ["STEM focus", "London location", "Industry connections"],
    logo: Settings,
    partnership: "Tier 1",
    image: "/images/imperial.jpg",
    url: "https://www.imperial.ac.uk",
  },
  {
    name: "London School of Economics",
    country: "uk",
    location: "London, England",
    ranking: "#6 Social Sciences",
    categories: ["business", "arts"],
    programs: ["Economics", "Finance", "International Relations", "Law"],
    tuition: "£23,000/year",
    scholarships: "Need-based aid",
    acceptance: "12.2%",
    highlights: ["Social sciences excellence", "Global perspective", "Career opportunities"],
    logo: BarChart,
    partnership: "Tier 2",
    image: "/images/lse.jpg",
    url: "https://www.lse.ac.uk",
  },

  // Germany
  {
    name: "Technical University of Munich",
    country: "germany",
    location: "Munich, Bavaria",
    ranking: "#22 World",
    categories: ["engineering", "science"],
    programs: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"],
    tuition: "€0 (EU) or €4–6,000/year (Intl)",
    scholarships: "German/DAAD scholarships",
    acceptance: "8%",
    highlights: ["Top German university", "Research excellence", "Industry partnerships"],
    logo: Settings,
    partnership: "Tier 1",
    image: "/images/tum.jpg",
    url: "https://www.tum.de",
  },
  {
    name: "Ludwig Maximilian University",
    country: "germany",
    location: "Munich, Bavaria",
    ranking: "#58 World",
    categories: ["medicine", "arts", "science"],
    programs: ["Medicine", "Natural Sciences", "Humanities", "Law"],
    tuition: "€0 (EU) or ~€3,000/year (Intl)",
    scholarships: "International exchange programs",
    acceptance: "varies",
    highlights: ["Historic institution", "Research focus", "International programs"],
    logo: Landmark,
    partnership: "Tier 2",
    image: "/images/lmu.jpg",
    url: "https://www.en.uni-muenchen.de",
  },
  {
    name: "RWTH Aachen University",
    country: "germany",
    location: "Aachen, North Rhine-Westphalia",
    ranking: "#105 World",
    categories: ["engineering"],
    programs: ["Mechanical Engineering", "Electrical Engineering", "Computer Science"],
    tuition: "€0 (EU) or ~€3,000/year (Intl)",
    scholarships: "Engineering excellence",
    acceptance: "varies",
    highlights: ["Engineering excellence", "Industry connections", "Research opportunities"],
    logo: Settings,
    partnership: "Tier 2",
    image: "/images/rwth.jpg",
    url: "https://www.rwth-aachen.de",
  },

  // Spain
  {
    name: "IE University",
    country: "spain",
    location: "Madrid & Segovia",
    ranking: "Private",
    categories: ["business", "engineering"],
    programs: ["MBA", "Business Administration", "Engineering", "International Relations"],
    tuition: "€21,000/year",
    scholarships: "Merit scholarships",
    acceptance: "varies",
    highlights: ["Innovation focus", "Global perspective", "Entrepreneurship"],
    logo: Rocket,
    partnership: "Tier 1",
    image: "/images/ie.jpg",
    url: "https://www.ie.edu",
  },
  {
    name: "Universidad Complutense Madrid",
    country: "spain",
    location: "Madrid",
    ranking: "#187 World",
    categories: ["arts", "medicine", "business"],
    programs: ["Medicine", "Law", "Business", "Humanities"],
    tuition: "€1,000–2,000/year",
    scholarships: "Government-funded scholarships",
    acceptance: "varies",
    highlights: ["Historic university", "Comprehensive programs", "Cultural richness"],
    logo: Library,
    partnership: "Tier 2",
    image: "/images/ucm.jpg",
    url: "https://www.ucm.es",
  },
  {
    name: "University of Barcelona",
    country: "spain",
    location: "Barcelona, Catalonia",
    ranking: "#160 World",
    categories: ["science", "medicine", "arts"],
    programs: ["Medicine", "Engineering", "Economics", "Psychology"],
    tuition: "€2,000–3,000/year",
    scholarships: "Regional grants",
    acceptance: "varies",
    highlights: ["Research excellence", "Mediterranean location", "Cultural diversity"],
    logo: Library,
    partnership: "Tier 2",
    image: "/images/ub.jpg",
    url: "https://www.ub.edu",
  },

  // Canada
  {
    name: "University of Toronto",
    country: "canada",
    location: "Toronto, Ontario",
    ranking: "#29 World",
    categories: ["medicine", "engineering", "business"],
    programs: ["Medicine", "Engineering", "Business", "Computer Science"],
    tuition: "CAD $58,000/year",
    scholarships: "Various scholarships",
    acceptance: "43%",
    highlights: ["Research intensive", "Diverse programs", "Global recognition"],
    logo: Landmark,
    partnership: "Tier 1",
    image: "/images/ut.jpg",
    url: "https://www.utoronto.ca",
  },
  {
    name: "McGill University",
    country: "canada",
    location: "Montreal, Quebec",
    ranking: "#27 World",
    categories: ["medicine", "science", "arts"],
    programs: ["Medicine", "Engineering", "Arts", "Management"],
    tuition: "CAD $50,000/year",
    scholarships: "Academic scholarships",
    acceptance: "46%",
    highlights: ["Bilingual environment", "Research excellence", "Historic prestige"],
    logo: Landmark,
    partnership: "Tier 1",
    image: "/images/mcg.jpg",
    url: "https://www.mcgill.ca",
  },

  // Australia
  {
    name: "University of Melbourne",
    country: "australia",
    location: "Melbourne, Victoria",
    ranking: "#19 World",
    categories: ["medicine", "business", "arts"],
    programs: ["Medicine", "Business", "Engineering", "Arts"],
    tuition: "AUD $45,000/year",
    scholarships: "Graduate merit scholarships",
    acceptance: "70%",
    highlights: ["Go8 member", "Research excellence", "Graduate employability"],
    logo: GraduationCap,
    partnership: "Tier 1",
    image: "/images/um.jpg",
    url: "https://www.unimelb.edu.au",
  },
  {
    name: "Australian National University",
    country: "australia",
    location: "Canberra, ACT",
    ranking: "#32 World",
    categories: ["arts", "science", "business"],
    programs: ["International Relations", "Economics", "Science", "Engineering"],
    tuition: "AUD $43,000/year",
    scholarships: "Research and merit awards",
    acceptance: "35%",
    highlights: ["National university", "Research focus", "Government connections"],
    logo: Landmark,
    partnership: "Tier 1",
    image: "/images/anu.jpg",
    url: "https://www.anu.edu.au",
  },
];


  const filteredUniversities = universities.filter((uni) => {
    const matchesCountry =
      activeCountry === "all" || uni.country === activeCountry;
    const matchesCategory =
      activeCategory === "all" || uni.categories.includes(activeCategory);
    const matchesSearch =
      uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCountry && matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-6">
              <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200">
                1200+ Partner Universities
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              World-Class
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Partner Universities
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Explore our extensive network of top-ranked universities across
              the globe. From Ivy League institutions to prestigious European
              universities, find your perfect academic match.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { number: "1200+", label: "Partner Universities", icon: BookOpen },
              { number: "500+", label: "Degree Programs", icon: Layers },
              { number: "98%", label: "Admission Success", icon: Target },
            ].map((stat, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search universities or locations..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Filter by Country
            </h3>
            <div className="flex flex-wrap justify-between gap-3">
              {countries.map((country) => (
                <button
                  key={country.code}
                  onClick={() => setActiveCountry(country.code)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 transition-all ${
                    activeCountry === country.code
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {/* <country.flag className="w-4 h-4" /> */}
                  <span className="font-medium">{country.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Filter by Program
            </h3>
            <div className="flex flex-wrap justify-between gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full border-2 transition-all ${
                    activeCategory === category.id
                      ? "border-purple-500 bg-purple-50 text-purple-700"
                      : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Showing {filteredUniversities.length} Universities
            </h2>
            <p className="text-gray-600">
              {activeCountry !== "all" &&
                `in ${countries.find((c) => c.code === activeCountry)?.name}`}
              {activeCategory !== "all" &&
                ` for ${categories.find((c) => c.id === activeCategory)?.name}`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUniversities.map((university, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredUniversity(index)}
                onMouseLeave={() => setHoveredUniversity(null)}
              >
                <div className="relative p-6 bg-gradient-to-r from-blue-600 to-purple-600">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <university.logo className="w-6 h-6 text-white" />
                        {(() => {
                          const countryObj = countries.find(
                            (c) => c.code === university.country
                          );
                          const CountryIcon = countryObj?.flag;
                          return CountryIcon ? (
                            <CountryIcon className="w-5 h-5 text-white" />
                          ) : null;
                        })()}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {university.name}
                      </h3>
                      <p className="text-blue-100 text-sm flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {university.location}
                      </p>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        university.partnership === "Tier 1"
                          ? "bg-yellow-400 text-yellow-900"
                          : "bg-white/20 text-white"
                      }`}
                    >
                      {university.partnership}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {university.ranking}
                    </span>
                    <span className="text-gray-600 text-sm">
                      {university.acceptance} acceptance
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Popular Programs
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {university.programs
                        .slice(0, 3)
                        .map((program, progIndex) => (
                          <span
                            key={progIndex}
                            className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                          >
                            {program}
                          </span>
                        ))}
                      {university.programs.length > 3 && (
                        <span className="text-gray-500 text-xs">
                          +{university.programs.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 text-xs">Tuition (Int'l)</p>
                      <p className="font-semibold text-gray-900">
                        {university.tuition}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-xs">Scholarships</p>
                      <p className="font-semibold text-green-600">
                        {university.scholarships}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                      Key Highlights
                    </h4>
                    <div className="space-y-1">
                      {university.highlights.map((highlight, hlIndex) => (
                        <div
                          key={hlIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <Star className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {hoveredUniversity === index && (
                  <div
                    className="absolute inset-0 flex flex-col justify-end transition-all duration-300 group-hover:opacity-100 opacity-0"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${university.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="bg-black/70 p-4 text-center">
                      <h4 className="text-lg font-bold text-white mb-2">
                        {university.name}
                      </h4>
                      <a
                        href={university.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all text-sm"
                      >
                        View University Page
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredUniversities.length === 0 ? (
            <div className="text-center py-16">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No universities found
              </h3>
              <p className="text-gray-600">
                Try adjusting your filters or search terms
              </p>
            </div>
          ) : (
            <div className="text-center mt-12">
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Our University Partnerships Matter
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Our strong relationships with top universities worldwide give you
            exclusive advantages
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BadgeCheck className="w-6 h-6 text-blue-600" />,
                title: "Direct Admission Pathways",
                description:
                  "Streamlined application processes and dedicated admission support",
              },
              {
                icon: <DollarSign className="w-6 h-6 text-green-600" />,
                title: "Exclusive Scholarships",
                description:
                  "Access to partner-specific scholarships and funding opportunities",
              },
              {
                icon: <Zap className="w-6 h-6 text-yellow-500" />,
                title: "Faster Processing",
                description:
                  "Expedited application reviews and quicker admission decisions",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className={`bg-white/30 backdrop-blur-md rounded-2xl p-8 transform transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200 + 1000}ms` }}
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UniversitiesPage;
