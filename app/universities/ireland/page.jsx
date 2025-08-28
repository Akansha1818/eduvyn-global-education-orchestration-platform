"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IrelandPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  const whyIreland = [
    "Home to top universities such as Trinity College Dublin and University College Dublin.",
    "Strong connections with global industries – Google, Apple, Microsoft, and Facebook have European HQs in Ireland.",
    "English-speaking environment within the European Union.",
    "Post-study work visa: 2 years for master’s graduates (Third Level Graduate Scheme).",
    "Safe, welcoming, and multicultural society.",
  ];

  const popularCourses = [
    "Computer Science & Data Analytics",
    "Engineering & Technology",
    "Business, Management & Finance",
    "Pharmaceutical Sciences & Biotechnology",
    "Arts, Literature & Humanities",
  ];

  const scholarships = [
    "Government of Ireland International Education Scholarship",
    "University-specific scholarships (UCD Global, Trinity College Dublin, etc.)",
    "Irish Research Council funding for PhD and research students",
  ];

  const admissionCriteria = [
    {
      title: "Academic Requirements",
      items: [
        "High school completion (Grade 12 / IB / A-Levels or equivalent)",
        "Bachelor’s degree for postgraduate programs",
        "Minimum GPA depending on the institution",
      ],
    },
    {
      title: "Language Proficiency",
      items: [
        "IELTS 6.0–6.5 / TOEFL iBT 80–90",
        "Some universities may also accept Duolingo or PTE Academic",
      ],
    },
    {
      title: "Documents Required",
      items: [
        "Valid passport",
        "Academic transcripts & certificates",
        "Statement of Purpose (SOP)",
        "Letters of Recommendation",
        "Proof of financial support",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Study in <span className="bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">Ireland</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Ireland is a leading European destination for international students, 
              offering globally ranked universities, a vibrant culture, and excellent 
              career opportunities in technology, business, and healthcare.
            </p>
          </div>
        </section>

        {/* Why Ireland */}
        <section className="py-20 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Study in Ireland?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyIreland.map((reason, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:-translate-y-2 transition">
                <p className="text-gray-700 text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Courses */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Popular Courses</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularCourses.map((course, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                  <p className="text-gray-700 font-semibold">{course}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Criteria */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Admission Criteria</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {admissionCriteria.map((crit, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="text-lg font-bold text-green-700 mb-4">{crit.title}</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    {crit.items.map((it, j) => (
                      <li key={j} className="text-sm">{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Costs & Scholarships */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Costs & Scholarships</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
              <p className="text-gray-700">
                Tuition fees in Ireland vary depending on the program and institution:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Undergraduate:</strong> €9,000 – €25,000 per year</li>
                <li><strong>Postgraduate:</strong> €10,000 – €35,000 per year</li>
                <li><strong>Living expenses:</strong> €10,000 – €15,000 per year</li>
              </ul>
              <h3 className="text-xl font-bold text-green-700">Scholarships</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {scholarships.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Work Opportunities */}
        <section className="py-20 max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Work Opportunities</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-gray-700 mb-4">
              International students with a valid Irish student visa can work part-time 
              (up to 20 hours/week during term and 40 hours/week during holidays). 
            </p>
            <p className="text-gray-700">
              After graduation, Ireland’s <strong>Third Level Graduate Scheme</strong> allows 
              master’s graduates to stay back for 2 years to gain valuable work experience 
              in global industries.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default IrelandPage;
