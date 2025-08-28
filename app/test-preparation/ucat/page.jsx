"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const UCATPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const examPattern = [
    { section: "Verbal Reasoning", questions: 44, duration: "21 minutes", desc: "Evaluate written information critically" },
    { section: "Decision Making", questions: 29, duration: "31 minutes", desc: "Make sound decisions with complex information" },
    { section: "Quantitative Reasoning", questions: 36, duration: "25 minutes", desc: "Analyse numerical information critically" },
    { section: "Abstract Reasoning", questions: 50, duration: "12 minutes", desc: "Infer relationships using convergent/divergent thinking" },
    { section: "Situational Judgement", questions: 66, duration: "26 minutes", desc: "Understand real-world situations & appropriate behaviour" },
  ];

  const universities = [
    "University of Aberdeen", "Anglia Ruskin University", "Aston University",
    "University of Birmingham", "University of Bristol", "Brunel University London",
    "Cardiff University", "University of Dundee", "University of Edinburgh",
    "University of Glasgow", "King's College London", "University of Leeds",
    "University of Manchester", "University of Nottingham", "University of Sheffield",
    "University of Southampton", "University of St Andrews", "St George's, University of London",
    "University of Warwick", "Queen Mary University of London"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <span className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200">
              UCAT Preparation
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            UCAT{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              University Clinical Aptitude Test
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            UCAT is required for admission into leading <b>medical and dental degree programs</b> in the UK and worldwide.
            Conducted annually at Pearson VUE centres in 130+ countries.
          </p>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Duration</h3>
            <p className="text-gray-600">2 hours (with 1-min instructions before each subtest)</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Mode</h3>
            <p className="text-gray-600">Computer-based at Pearson VUE centres</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Fee</h3>
            <p className="text-gray-600">£70 (UK) | £115 (outside UK)</p>
          </div>
        </div>
      </section>

      {/* Exam Pattern */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Exam Pattern</h2>
          <p className="text-lg text-gray-600">Five subtests with individual timings</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examPattern.map((sub, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-md">
              <h3 className="text-2xl font-semibold mb-2 text-blue-800">{sub.section}</h3>
              <p className="text-gray-700 mb-2">{sub.desc}</p>
              <p className="text-sm text-gray-600">Questions: {sub.questions} | Duration: {sub.duration}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Universities */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-500 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Universities Accepting UCAT</h2>
          <p className="text-indigo-100 text-lg">Top UK medical and dental schools</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((uni, idx) => (
            <div key={idx} className="bg-white/10 rounded-xl p-4 text-white">
              {uni}
            </div>
          ))}
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">UCAT 2023 Important Dates</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow border">
            <p><b>Account Creation:</b> May 16</p>
            <p><b>Booking:</b> June 20</p>
            <p><b>Testing Begins:</b> July 10</p>
            <p><b>Last Booking:</b> September 21</p>
            <p><b>Last Test Date:</b> September 28</p>
            <p><b>Results:</b> Early November</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow border">
            <p><b>Access Arrangement Deadline:</b> Sept 12</p>
            <p><b>Bursary Deadline:</b> Sept 29</p>
            <p><b>UCAS Deadline:</b> Oct 16</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UCATPage;
