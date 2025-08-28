"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EuropePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  const whyEurope = [
    "Access to top-ranked institutions like Oxford, Sorbonne, ETH Zurich, and Heidelberg.",
    "Affordable or free tuition in countries like Germany, Norway, and Finland.",
    "Multicultural learning environment across 40+ European countries.",
    "Opportunities to travel and study across the EU with Erasmus+.",
    "High-quality research and innovation facilities.",
  ];

  const topUniversities = [
    "University of Oxford (UK)",
    "ETH Zurich (Switzerland)",
    "University of Cambridge (UK)",
    "Sorbonne University (France)",
    "Ludwig Maximilian University of Munich (Germany)",
    "University of Amsterdam (Netherlands)",
    "University of Copenhagen (Denmark)",
  ];

  const popularCourses = [
    "Engineering & Technology",
    "Computer Science & IT",
    "Business & Management",
    "Medicine & Life Sciences",
    "Arts, Humanities & Social Sciences",
    "Law & International Relations",
  ];

  const scholarships = [
    "Erasmus+ Scholarships (EU-wide mobility program)",
    "DAAD Scholarships (Germany)",
    "Eiffel Excellence Scholarships (France)",
    "Swedish Institute Scholarships",
    "Holland Scholarships (Netherlands)",
  ];

  const admissionCriteria = [
    {
      title: "Academic Requirements",
      items: [
        "High school completion (Grade 12 / IB / A-Levels or equivalent)",
        "Bachelor’s degree for postgraduate studies",
        "Minimum GPA as required by the university",
      ],
    },
    {
      title: "Language Proficiency",
      items: [
        "English: IELTS 6.0–6.5 / TOEFL iBT 80–90",
        "Some programs require German, French, Dutch, or Spanish proficiency",
        "Preparatory language courses available in many universities",
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
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Study in <span className="bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">Europe</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Europe is home to world-class universities, diverse cultures, affordable education, and research opportunities across more than 40 countries.
            </p>
          </div>
        </section>

        {/* Why Europe */}
        <section className="py-20 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Study in Europe?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyEurope.map((reason, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:-translate-y-2 transition">
                <p className="text-gray-700 text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Top Universities */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Top Universities in Europe</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topUniversities.map((uni, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                  <p className="text-gray-700 font-semibold">{uni}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Courses */}
        <section className="py-20 px-4">
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
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Admission Criteria</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {admissionCriteria.map((crit, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="text-lg font-bold text-indigo-700 mb-4">{crit.title}</h3>
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

        {/* Cost & Scholarships */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Cost of Studying & Scholarships</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
              <p className="text-gray-700">
                Tuition fees vary by country. Many EU countries (Germany, Norway, Finland) 
                offer <strong>low or no tuition fees</strong> for international students. 
                In others, fees range from <strong>€2,000 – €20,000 per year</strong>. 
                Living expenses average <strong>€700 – €1,200 per month</strong>.
              </p>
              <h3 className="text-xl font-bold text-indigo-700">Popular Scholarships</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {scholarships.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Visa & Work Opportunities */}
        <section className="py-20 max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Visa & Work Opportunities</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-gray-700 mb-4">
              Non-EU students generally require a <strong>student visa/residence permit</strong>. 
              Most European countries allow students to work part-time during studies 
              (10–20 hours/week).
            </p>
            <p className="text-gray-700">
              After graduation, the <strong>EU Blue Card</strong> or country-specific post-study visas 
              provide pathways to stay and build a career in Europe.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default EuropePage;
