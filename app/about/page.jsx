"use client";
import React, { useState, useEffect } from "react";
import { Globe, Users, Award, BookOpen, Target, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const valueTimer = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(valueTimer);
  }, []);

  const stats = [
    { number: "6K+", label: "Students Guided", icon: Users },
    { number: "1200+", label: "Partner Universities", icon: BookOpen },
    { number: "25+", label: "Countries", icon: Globe },
    { number: "98%", label: "Success Rate", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
                  About Eduvyn
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Empowering Dreams,
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  Enabling Futures
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Eduvyn, we are an AI-powered EdTech company committed to
                helping students make informed and strategic academic decisions.
                Our intelligent platform guides learners in discovering the
                right program in the right country, aligning their choices with
                personal goals, academic background, and career aspirations. We
                specialize in undergraduate admissions across high-demand fields
                such as Medicine, Engineering, Law, Computer Science & IT,
                Business, Finance, Aerospace, and more. Whether you're aiming to
                study in the USA, UK, Canada, Australia, Ireland, or Europe,
                Eduvyn serves as your trusted compass in navigating global
                education pathways. Our platform also features advanced
                AI-driven self-assessment tools for test preparation, covering
                major exams like SAT, UCAT, GRE, GMAT, IELTS, and TOEFL. These
                tools help students identify their strengths and weaknesses,
                optimize their prep strategies, and improve their chances of
                success. With Eduvyn, every student is empowered to take charge
                of their academic future—smarter, faster, and with confidence.
              </p>
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
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div
                        key={index}
                        className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl"
                      >
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-3">
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {stat.number}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {stat.label}
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

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div
              className={`text-white transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 mr-3" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-xl text-blue-100 leading-relaxed">
                To democratize international education by providing personalized
                guidance that empowers students from all backgrounds to pursue
                their academic dreams globally.
              </p>
            </div>
            <div
              className={`text-white transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="flex items-center mb-6">
                <Lightbulb className="w-8 h-8 mr-3" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-xl text-blue-100 leading-relaxed">
                To be the world's most trusted international education partner,
                building a global community of successful, culturally-aware
                graduates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
