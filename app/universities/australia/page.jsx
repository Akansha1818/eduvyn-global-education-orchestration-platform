"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AustraliaPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  const whyStudyReasons = [
    "High-quality education and globally recognised universities",
    "Welcoming culture and strong student support services",
    "Multiple intakes per year with scholarship and visa options",
    "Post-study work rights and pathways to residency",
    "Stunning natural landscapes and vibrant student life",
  ];

  const topUniversities = [
    {
      name: "University of Melbourne",
      location: "Melbourne, Victoria",
      ranking: "#1 in Australia",
      specialties: ["Medicine", "Law", "Engineering", "Arts"],
      tuition: "AUD 30,000–45,000/year",
      acceptance: "15%",
    },
    {
      name: "Monash University",
      location: "Melbourne, Victoria",
      ranking: "Top 5 in Australia",
      specialties: ["Pharmacy", "Business", "Engineering"],
      tuition: "AUD 28,000–42,000/year",
      acceptance: "30%",
    },
    {
      name: "Australian National University (ANU)",
      location: "Canberra, ACT",
      ranking: "Top 3 in Australia",
      specialties: ["Politics", "Science", "Economics"],
      tuition: "AUD 32,000–46,000/year",
      acceptance: "35%",
    },
  ];

  const popularCourses = [
    { category: "STEM", courses: ["Engineering", "Computer Science", "Data Science", "IT"] },
    { category: "Business", courses: ["MBA", "Finance", "Management", "Accounting"] },
    { category: "Health Sciences", courses: ["Medicine", "Nursing", "Pharmacy", "Public Health"] },
    { category: "Social Sciences", courses: ["Law", "Education", "Psychology", "Environmental Science"] },
  ];

  const admissionCriteria = [
    {
      title: "Academic Requirements",
      items: [
        "High school completion (Year 12 / IB / A-Levels or equivalent)",
        "Bachelor’s degree for postgraduate programs",
        "Strong academic transcripts",
      ],
    },
    {
      title: "English Proficiency",
      items: ["IELTS: 6.5+", "TOEFL iBT: 90+", "PTE: 58+"],
    },
    {
      title: "Documents Required",
      items: [
        "Application form & processing fee",
        "Statement of Purpose (SOP)",
        "2–3 Letters of Recommendation",
        "Valid passport and student visa",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Study in <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">Australia</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Experience world-class education, vibrant student life, and career opportunities in one of the most sought-after destinations for international students.
            </p>
          </div>
        </section>

        {/* Why Study */}
        <section className="py-20 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Study in Australia?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyStudyReasons.map((reason, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:-translate-y-2 transition">
                <p className="text-gray-700 text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Top Universities */}
        <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Top Universities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {topUniversities.map((uni, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition">
                  <h3 className="text-xl font-bold">{uni.name}</h3>
                  <p className="text-gray-600">{uni.location}</p>
                  <p className="text-gray-700">{uni.ranking}</p>
                  <p className="text-gray-700">Specialties: {uni.specialties.join(", ")}</p>
                  <p className="text-gray-700">Tuition: {uni.tuition}</p>
                  <p className="text-gray-700">Acceptance Rate: {uni.acceptance}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Popular Courses</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {popularCourses.map((cat, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                  <h3 className="text-lg font-bold text-orange-600 mb-4">{cat.category}</h3>
                  <ul className="space-y-2">
                    {cat.courses.map((c, j) => (
                      <li key={j} className="text-sm">→ {c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Criteria */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Admission Criteria</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {admissionCriteria.map((crit, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="text-lg font-bold text-red-600 mb-4">{crit.title}</h3>
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
      </div>
      <Footer />
    </>
  );
};

export default AustraliaPage;
