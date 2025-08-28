"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SingaporePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  const whySingapore = [
    "Home to world-class institutions like NUS and NTU (ranked in the global top 20).",
    "English is the medium of instruction, making education accessible.",
    "Safe, clean, and technologically advanced country.",
    "Strong focus on research, innovation, and industry collaboration.",
    "Strategic location and global connectivity within Asia.",
  ];

  const topUniversities = [
    "National University of Singapore (NUS)",
    "Nanyang Technological University (NTU)",
    "Singapore Management University (SMU)",
    "Singapore University of Technology and Design (SUTD)",
    "James Cook University, Singapore",
  ];

  const popularCourses = [
    "Business & Management",
    "Computer Science & Information Technology",
    "Engineering & Technology",
    "Life Sciences & Biotechnology",
    "Finance & Economics",
  ];

  const scholarships = [
    "Singapore International Graduate Award (SINGA)",
    "ASEAN Undergraduate Scholarship",
    "NUS and NTU Merit Scholarships",
    "Ministry of Education Tuition Grant Scheme",
  ];

  const admissionCriteria = [
    {
      title: "Academic Requirements",
      items: [
        "Completion of high school (Grade 12 / IB / A-Levels or equivalent)",
        "Bachelor’s degree for postgraduate admission",
        "Strong academic performance required for top institutions like NUS & NTU",
      ],
    },
    {
      title: "Language Proficiency",
      items: [
        "English is the medium of instruction",
        "IELTS 6.0–6.5 / TOEFL iBT 80–90 (varies by university)",
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
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-green-100">
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Study in <span className="bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">Singapore</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Singapore is Asia’s leading education hub, known for its 
              globally ranked universities, high academic standards, multicultural society, 
              and strong industry connections with global companies.
            </p>
          </div>
        </section>

        {/* Why Singapore */}
        <section className="py-20 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Study in Singapore?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whySingapore.map((reason, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:-translate-y-2 transition">
                <p className="text-gray-700 text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Top Universities */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Top Universities in Singapore</h2>
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
        <section className="py-20 bg-gradient-to-br from-teal-50 to-green-50 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Admission Criteria</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {admissionCriteria.map((crit, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="text-lg font-bold text-teal-700 mb-4">{crit.title}</h3>
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
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Costs & Scholarships</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
              <p className="text-gray-700">
                Tuition fees in Singapore vary depending on the program and university:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Undergraduate:</strong> SGD 12,000 – 20,000 per year</li>
                <li><strong>Postgraduate:</strong> SGD 18,000 – 30,000 per year</li>
                <li><strong>Living expenses:</strong> SGD 10,000 – 15,000 per year</li>
              </ul>
              <h3 className="text-xl font-bold text-teal-700">Scholarships</h3>
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
          <h2 className="text-4xl font-bold text-center mb-8">Visa & Work Opportunities</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-gray-700 mb-4">
              International students require a{" "}
              <strong>Student Pass issued by the Immigration & Checkpoints Authority (ICA)</strong>.
              Part-time work (up to 16 hours/week) is permitted during term, and full-time during breaks.
            </p>
            <p className="text-gray-700">
              After graduation, students can apply for an <strong>Employment Pass</strong> 
              to stay and work in Singapore, offering excellent career opportunities 
              in finance, tech, engineering, and biotech.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SingaporePage;
