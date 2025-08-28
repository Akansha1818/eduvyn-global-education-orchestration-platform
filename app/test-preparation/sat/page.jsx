"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SATPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const examPattern = [
    {
      section: "Reading & Writing (English)",
      content: "Short passages, Grammar, Vocabulary, Sentence structure",
      score: "200-800"
    },
    {
      section: "Math",
      content: "Algebra, Problem Solving, Geometry & Trigonometry",
      score: "200-800"
    }
  ];

  const acceptedCountries = [
    "United States - Harvard, MIT, Stanford",
    "Canada - University of Toronto, McGill, UBC",
    "UK - Cambridge, Imperial, King's College",
    "Australia & Singapore - Select universities",
    "Europe - Germany, Netherlands institutions",
    "India - 40+ universities"
  ];

  const indianUniversities = [
    "Ashoka University (Haryana)",
    "OP Jindal Global University (Haryana)",
    "Shiv Nadar University (UP)",
    "FLAME University (Pune)",
    "Plaksha University (Punjab)",
    "KREA University (Andhra Pradesh)",
    "Azim Premji University (Bangalore)",
    "NMIMS (Mumbai)",
    "Manipal Academy of Higher Education"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-6">
              <span className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold border border-orange-200">
                SAT Preparation
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              SAT{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
                Scholastic Assessment Test
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Gateway to undergraduate admissions in the US, Canada, UK, and top Indian universities. 
              Master the digital SAT with our comprehensive preparation program.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className={`bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-1000 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            
            <h3 className="text-xl font-semibold mb-2">Duration</h3>
            <p className="text-gray-600">2 hours 14 minutes</p>
          </div>

          <div
            className={`bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            
            <h3 className="text-xl font-semibold mb-2">Total Score</h3>
            <p className="text-gray-600">400 - 1600 points</p>
          </div>

          <div
            className={`bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            
            <h3 className="text-xl font-semibold mb-2">Frequency</h3>
            <p className="text-gray-600">7 times per year</p>
          </div>

          <div
            className={`bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-1000 delay-400 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            
            <h3 className="text-xl font-semibold mb-2">Fee</h3>
            <p className="text-gray-600">₹8,500 - ₹9,000</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Exam Pattern</h2>
            <p className="text-lg text-gray-600">Digital SAT from 2023 onwards</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {examPattern.map((section, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 transform transition-all duration-1000 delay-${(idx + 1) * 200} ${
                  isVisible ? "translate-x-0 opacity-100" : idx % 2 === 0 ? "-translate-x-8 opacity-0" : "translate-x-8 opacity-0"
                }`}
              >
                <h3 className="text-2xl font-semibold mb-4 text-orange-800">{section.section}</h3>
                <p className="text-gray-700 mb-4">{section.content}</p>
                <div className="flex items-center">
                  <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Score: {section.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Math Syllabus</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Algebra", topics: ["Linear equations", "Inequalities", "Systems of equations"] },
              { title: "Problem Solving", topics: ["Ratios & Percentages", "Probability", "Statistics"] },
              { title: "Advanced Math", topics: ["Quadratic equations", "Functions", "Word problems"] },
              { title: "Geometry", topics: ["Basic geometry", "Coordinate geometry", "Trigonometry basics"] }
            ].map((subject, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition-all duration-1000 delay-${idx * 100} ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
               
                <h3 className="text-lg font-semibold mb-3">{subject.title}</h3>
                <ul className="space-y-2">
                  {subject.topics.map((topic, topicIdx) => (
                    <li key={topicIdx} className="flex items-start gap-2 text-sm text-gray-600">
                      {/* <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> */}
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-500 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            
            <h2 className="text-4xl font-bold text-white mb-4">Global Acceptance</h2>
            <p className="text-orange-100 text-lg">SAT is accepted worldwide for undergraduate admissions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {acceptedCountries.map((country, idx) => (
              <div
                key={idx}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white transform transition-all duration-1000 delay-${idx * 100} ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                {/* <CheckCircle className="w-6 h-6 text-yellow-300 mb-3" /> */}
                <p className="font-medium">{country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">SAT Accepted Indian Universities</h2>
            <p className="text-lg text-gray-600">Over 40+ leading Indian universities accept SAT scores</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {indianUniversities.map((university, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-lg p-4 shadow-md border border-gray-200 transform transition-all duration-1000 delay-${idx * 50} ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                {/* <CheckCircle className="w-5 h-5 text-green-500 mb-2" /> */}
                <p className="font-medium text-gray-800">{university}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SAT?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className={`text-center transform transition-all duration-1000 delay-100 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              
              <h3 className="text-xl font-semibold mb-2">No Attempt Limit</h3>
              <p className="text-gray-600">Take the test as many times as needed to achieve your target score</p>
            </div>

            <div
              className={`text-center transform transition-all duration-1000 delay-200 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              
              <h3 className="text-xl font-semibold mb-2">Super Scoring</h3>
              <p className="text-gray-600">Many universities accept best section scores across multiple attempts</p>
            </div>

            <div
              className={`text-center transform transition-all duration-1000 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
            
              <h3 className="text-xl font-semibold mb-2">Single Test Solution</h3>
              <p className="text-gray-600">Use SAT for multiple university applications instead of taking separate entrance exams</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SATPage;