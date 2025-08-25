"use client";
import React, { useState, useEffect } from "react";
import { BookOpen, Languages, Target, PenTool, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TestPreparationPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tasks = [
    "IELTS/TOEFL/PTE preparation",
    "GRE/GMAT/SAT coaching if required",
    "Foreign language courses (German, French, Spanish)",
    "Mock tests and practice sessions",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="mb-6">
              <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200">
                Phase 2
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Test Preparation &{" "}
              <span className="bg-gradient-to-r from-indigo-900 to-sky-400 bg-clip-text text-transparent block">
                Language Training
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Prepare for standardized tests and enhance language skills for your
              chosen destination. Our structured program ensures you are fully
              equipped for academic success abroad.
            </p>
          </div>

          {/* Right Content - Decorative Card */}
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
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Duration: Week 3–4
                </h3>
                <ul className="space-y-4">
                  {tasks.map((task, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision style section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-sky-400 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div
            className={`text-white transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 mr-3" />
              <h2 className="text-3xl font-bold">Test Excellence</h2>
            </div>
            <p className="text-xl text-blue-100 leading-relaxed">
              Our training modules are tailored for global exams like IELTS,
              TOEFL, GRE, GMAT, and SAT. We focus on strategies that maximize
              your performance and confidence.
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
              <Languages className="w-8 h-8 mr-3" />
              <h2 className="text-3xl font-bold">Language Mastery</h2>
            </div>
            <p className="text-xl text-blue-100 leading-relaxed">
              Whether German, French, or Spanish, our language programs enhance
              your communication skills and cultural adaptability, preparing you
              for success in your new environment.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestPreparationPage;
