"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Globe,
  Users,
  Award,
  BookOpen,
  Star,
  ArrowRight,
  Menu,
  X,
  CheckCircle,
  Clock,
  MapPin,
  Target,
  Calendar,
  FileText,
  Plane,
  GraduationCap,
  Languages,
  Headphones,
  Video,
  MessageCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [activeLanguage, setActiveLanguage] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const serviceTimer = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 6);
    }, 3000);
    const languageTimer = setInterval(() => {
      setActiveLanguage((prev) => (prev + 1) % 4);
    }, 2500);
    return () => {
      clearInterval(serviceTimer);
      clearInterval(languageTimer);
    };
  }, []);

  const studyAbroadServices = [
    {
      title: "University Selection & Research",
      description:
        "Comprehensive research and shortlisting of universities based on your academic profile, career goals, and budget preferences.",
      features: [
        "Personalized university matching",
        "Program compatibility analysis",
        "Scholarship opportunity identification",
        "Campus culture assessment",
      ],
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      duration: "2-3 weeks",
    },
    {
      title: "Application Assistance",
      description:
        "End-to-end support for university applications including documentation, essays, and submission management.",
      features: [
        "Statement of Purpose (SOP) crafting",
        "Letter of Recommendation guidance",
        "Application form completion",
        "Document verification and submission",
      ],
      icon: FileText,
      color: "from-purple-500 to-pink-500",
      duration: "4-6 weeks",
    },
    {
      title: "Test Preparation",
      description:
        "Comprehensive coaching for standardized tests required for international admissions.",
      features: [
        "IELTS/TOEFL/PTE coaching",
        "GRE/GMAT/SAT preparation",
        "Mock tests and practice sessions",
        "Personalized study plans",
      ],
      icon: Award,
      color: "from-green-500 to-emerald-500",
      duration: "8-12 weeks",
    },
    {
      title: "Visa Consultation & Support",
      description:
        "Expert guidance through the visa application process with high success rates.",
      features: [
        "Visa documentation assistance",
        "Interview preparation sessions",
        "Application form guidance",
        "Embassy liaison support",
      ],
      icon: Plane,
      color: "from-yellow-500 to-orange-500",
      duration: "3-4 weeks",
    },
    {
      title: "Scholarship Guidance",
      description:
        "Maximize your funding opportunities with our comprehensive scholarship search and application support.",
      features: [
        "Scholarship database access",
        "Application strategy development",
        "Essay and proposal writing",
        "Merit scholarship positioning",
      ],
      icon: Star,
      color: "from-red-500 to-pink-500",
      duration: "2-4 weeks",
    },
    {
      title: "Pre-Departure Services",
      description:
        "Complete preparation for your international education journey, from accommodation to cultural orientation.",
      features: [
        "Accommodation arrangements",
        "Travel planning assistance",
        "Cultural orientation sessions",
        "Student community connections",
      ],
      icon: GraduationCap,
      color: "from-indigo-500 to-purple-500",
      duration: "2-3 weeks",
    },
  ];

  const languageCourses = [
    {
      language: "German",
      flag: "🇩🇪",
      levels: "A1 to C2",
      description:
        "Master German for studies in Germany, Austria, and Switzerland. Essential for engineering, business, and research programs.",
      features: [
        "Goethe Institute certified curriculum",
        "Business German specialization",
        "TestDaF exam preparation",
        "Cultural immersion modules",
      ],
      color: "from-red-500 to-yellow-500",
      duration: "3-18 months",
      popularity: "Most Popular",
    },
    {
      language: "French",
      flag: "🇫🇷",
      levels: "A1 to C2",
      description:
        "Learn French for opportunities in France, Canada, Belgium, and francophone countries. Perfect for fashion, culinary, and business studies.",
      features: [
        "DELF/DALF exam preparation",
        "Quebec French specialization",
        "Business French modules",
        "Literature and culture studies",
      ],
      color: "from-blue-500 to-red-500",
      duration: "3-18 months",
      popularity: "High Demand",
    },
    {
      language: "Spanish",
      flag: "🇪🇸",
      levels: "A1 to C2",
      description:
        "Open doors to Spain, Latin America, and the fastest-growing global language. Ideal for business, medicine, and liberal arts.",
      features: [
        "DELE/SIELE exam preparation",
        "Latin American variants",
        "Medical Spanish specialization",
        "Business communication focus",
      ],
      color: "from-yellow-500 to-red-500",
      duration: "3-15 months",
      popularity: "Growing Fast",
    },
    {
      language: "Sanskrit",
      flag: "🕉️",
      levels: "Beginner to Advanced",
      description:
        "Explore ancient wisdom and enhance your understanding of Indian philosophy, yoga, and Ayurveda through classical Sanskrit.",
      features: [
        "Devanagari script mastery",
        "Classical text reading",
        "Vedic Sanskrit specialization",
        "Philosophy and yoga integration",
      ],
      color: "from-orange-500 to-pink-500",
      duration: "6-24 months",
      popularity: "Unique Offering",
    },
  ];

  const teachingMethods = [
    {
      title: "Interactive Live Classes",
      description:
        "Engaging online and offline sessions with certified native speakers",
      icon: Video,
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Personalized Learning",
      description:
        "Customized curriculum based on your learning pace and goals",
      icon: Target,
      color: "from-green-500 to-blue-500",
    },
    {
      title: "Cultural Immersion",
      description:
        "Learn language through cultural context and real-world scenarios",
      icon: Globe,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock doubt clearance and practice sessions",
      icon: Headphones,
      color: "from-orange-500 to-red-500",
    },
  ];

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
                Comprehensive Education Services
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Complete
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Study Abroad & Language
              </span>
              Solutions
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              From university applications to language mastery, we provide
              end-to-end services to make your international education dreams a
              reality.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Study Abroad
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support for every step of your international
              education journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {studyAbroadServices.map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                  activeService === index
                    ? "ring-2 ring-blue-500 scale-105"
                    : ""
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div> */}

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {service.duration}
                  </span>
                </div>

                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                    Key Features:
                  </h4>
                  {service.features.map((feature, featureIndex) => (
                    <ul
                      key={featureIndex}
                      className="flex items-start space-x-3 list-disc list-inside"
                    >
                      {/* <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /> */}
                      <li className="text-gray-700 text-sm">{feature}</li>
                    </ul>
                  ))}
                </div>

                {/* <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
                    Learn More
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Foreign Language
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Courses
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Master global languages to enhance your study abroad experience
              and career prospects
            </p>
            <div className="flex justify-center">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Languages className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-gray-700">
                  4 Languages • All Levels • Certified Instructors
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {languageCourses.map((course, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                  activeLanguage === index
                    ? "ring-2 ring-blue-500 scale-105"
                    : ""
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200 + 500}ms` }}
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl overflow-hidden mb-4 flex-shrink-0">
                    <img
                      src={`/images/${course.language.toLowerCase()}.png`}
                      alt={`${course.language} flag`}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <span className="absolute -top-2 -right-2 bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                    {course.popularity}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {course.language}
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {course.levels}
                  </span>
                  <span className="text-sm text-gray-500">
                    {course.duration}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  {course.description}
                </p>

                <div className="space-y-2">
                  {course.features.map((feature, featureIndex) => (
                    <ul
                      key={featureIndex}
                      className="flex items-start space-x-2 list-disc list-inside"
                    >
                      {/* <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" /> */}
                      <li className="text-gray-700 text-xs">{feature}</li>
                    </ul>
                  ))}
                </div>

                {/* <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all">
                    Enroll Now
                  </button>
                </div> */}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachingMethods.map((method, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-500 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150 + 1000}ms` }}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                >
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{method.title}</h4>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How We
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Work
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Our proven 4-step process ensures personalized attention and
              successful outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Free assessment of goals and requirements",
                icon: MessageCircle,
              },
              {
                step: "02",
                title: "Planning",
                desc: "Customized roadmap and timeline creation",
                icon: Calendar,
              },
              {
                step: "03",
                title: "Execution",
                desc: "Step-by-step guidance and support",
                icon: Target,
              },
              {
                step: "04",
                title: "Success",
                desc: "Achievement of your education goals",
                icon: GraduationCap,
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200 + 800}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white border-2 border-blue-600 text-blue-600 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
