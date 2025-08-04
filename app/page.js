"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Award,
  BookOpen,
  Star,
  ArrowRight,
  Home,
  Users,
  GraduationCap,
  ClipboardList,
  Plane,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EduvynHomepage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCountry, setActiveCountry] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeBanner, setActiveBanner] = useState(0);
  const [banners, setBanners] = useState([]);
  const [loadingBanners, setLoadingBanners] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await fetch("/api/banners");
        const data = await res.json();
        setBanners(data);
      } catch (error) {
        console.error("Failed to load banners:", error);
      } finally {
        setLoadingBanners(false);
      }
    };
    fetchBanners();
  }, []);

  useEffect(() => {
    const bannerTimer = setInterval(() => {
      setActiveBanner((prev) =>
        banners.length ? (prev + 1) % banners.length : 0
      );
    }, 5000);
    return () => clearInterval(bannerTimer);
  }, [banners]);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setActiveCountry((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { number: "6K+", label: "Students Placed", icon: Users },
    { number: "1.2K+", label: "Partner Universities", icon: BookOpen },
    { number: "98%", label: "Success Rate", icon: Award },
  ];

  const countries = [
    {
      name: "United Kingdom",
      code: "UK",
      flagImage: "/images/uk-flag.jpg",
      monumentImage: "/images/big-ben.png",
    },
    {
      name: "United States",
      code: "US",
      flagImage: "/images/us-flag.jpg",
      monumentImage: "/images/statue-of-liberty.png",
    },
    {
      name: "Canada",
      code: "CA",
      flagImage: "/images/canada-flag.jpg",
      monumentImage: "/images/cn-tower.png",
    },
    {
      name: "Australia",
      code: "AU",
      flagImage: "/images/australia-flag.jpg",
      monumentImage: "/images/sydney-opera-house.png",
    },
  ];

  const services = [
    {
      title: "Personalized Counseling",
      description:
        "One-on-one expert guidance to choose the best path tailored to your goals and profile.",
      icon: <Users className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "University Selection",
      description:
        "Find the perfect match from our global network of top universities based on your profile.",
      icon: <GraduationCap className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Test Preparation",
      description:
        "Expert coaching and resources for exams like UCAT, SAT, GRE, IELTS, TOEFL, and more.",
      icon: <Award className="w-6 h-6" />,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Application & Scholarship Guidance",
      description:
        "End-to-end support for preparing applications, essays, and exploring scholarship opportunities.",
      icon: <ClipboardList className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Visa Assistance",
      description:
        "Complete guidance for visa paperwork, interview preparation, and process tracking.",
      icon: <Plane className="w-6 h-6" />,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Accommodation Support",
      description:
        "Help finding and securing safe and comfortable accommodation abroad near your campus.",
      icon: <Home className="w-6 h-6" />,
      gradient: "from-red-500 to-pink-500",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      university: "Stanford University",
      text: "Eduvyn made my dream of studying at Stanford a reality. Their personalized guidance was exceptional.",
      rating: 5,
    },
    {
      name: "Rahul Patel",
      university: "University of Toronto",
      text: "The visa process seemed daunting, but Eduvyn's team made it incredibly smooth and stress-free.",
      rating: 5,
    },
    {
      name: "Ananya Singh",
      university: "Oxford University",
      text: "From application to arrival, Eduvyn supported me every step of the way. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-x-hidden">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="mb-6">
                <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200">
                  Your Gateway to Global Education
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  Study Abroad Dreams
                </span>
                Into Reality
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Navigate your international education journey with confidence.
                From university selection to visa success, we're with you every
                step of the way.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/roadmap"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center group"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all">
                  Contact Us
                </button>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Popular Destinations
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {countries.map((country, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-xl border-2 bg-cover bg-top transition-all duration-500 cursor-pointer ${
                          activeCountry === index
                            ? "border-blue-500 scale-105"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        style={{
                          backgroundImage: `url(${country.monumentImage})`,
                          opacity: activeCountry === index ? 1 : 0.5,
                        }}
                      >
                        <div className="text-center">
                          <div className="relative flex justify-center items-center">
                            <div
                              className="relative text-5xl font-bold mb-2 uppercase bg-contain bg-left-bottom text-transparent bg-clip-text"
                              style={{
                                backgroundImage: `url(${country.flagImage})`,
                              }}
                            >
                              {country.code}
                            </div>
                          </div>

                          <p className="font-semibold text-gray-900">
                            {country.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden w-full h-[300px] md:h-[400px] lg:h-[500px]">
        {loadingBanners ? (
          <div className="flex justify-center items-center w-full h-full text-gray-500">
            Loading banners...
          </div>
        ) : banners.length === 0 ? (
          <div className="flex justify-center items-center w-full h-full text-gray-500">
            No banners available.
          </div>
        ) : (
          <>
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeBanner * 100}%)` }}
            >
              {banners.map((banner, index) => (
                <div key={banner._id} className="w-full flex-shrink-0 relative">
                  <div
                    className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${banner.url})` }}
                  >
                    <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
                      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        {banner.name}
                      </h2>
                      <p className="text-white text-sm md:text-lg mb-6 max-w-2xl">
                        Uploaded on {banner.uploadDate}
                      </p>
                      <a
                        href="/contact"
                        className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all text-sm md:text-base"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {banners.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveBanner(i)}
                  className={`w-3 h-3 rounded-full ${
                    activeBanner === i ? "bg-white" : "bg-white/50"
                  }`}
                ></button>
              ))}
            </div>
          </>
        )}
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 delay-${
                  index * 100
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Study Abroad{" "}
              </span>
              Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to landing in your dream destination, we
              provide end-to-end support for your international education
              journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Success Stories from
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Our Students
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Hear from students who achieved their dreams with Eduvyn Education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200 + 800}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-blue-600 text-sm">
                    {testimonial.university}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Begin Your
            <span className="block">International Education Journey?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who have successfully studied abroad with
            our guidance. Your dream university is waiting for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EduvynHomepage;
