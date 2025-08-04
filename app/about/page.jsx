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
    { number: "15K+", label: "Students Guided", icon: Users },
    { number: "50+", label: "Partner Universities", icon: BookOpen },
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
                  About Eduvyn Education
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Empowering Dreams,
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  Enabling Futures
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded in 2018, Eduvyn Education has helped thousands of
                students transform their academic aspirations into global
                success stories.
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

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Our Founder
          </h2>
          <div className="flex justify-center mb-4">
            <img
              src="/images/founder.jpg" 
              alt="Dr. Sarah Johnson"
              className="w-24 h-24 rounded-full object-cover shadow-lg"
            />
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Dr. Sarah Johnson
          </h3>
          <p className="text-blue-600 font-medium mb-2">
            Founder & CEO • 15+ years experience
          </p>
          <p className="text-gray-500 text-sm mb-4">
            Specialization: International Education Strategy
          </p>
          <p className="text-gray-600 text-base mb-4">
            Former university admissions director with deep expertise in global
            education trends and student counseling.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              PhD in Education
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              Ex-Harvard Admissions
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              10K+ Students Guided
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
