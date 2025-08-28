"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CanadaPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  const whyStudyReasons = [
    "Affordable tuition and living costs compared to other top destinations",
    "World-class universities and globally recognized degrees",
    "Safe, welcoming, and multicultural environment",
    "Opportunities for part-time work during studies",
    "Post-graduate work permit leading to permanent residency",
  ];

  const topUniversities = [
    {
      name: "University of Toronto",
      location: "Ontario",
      ranking: "Top 20 worldwide",
      specialties: ["Engineering", "Medicine", "Business", "Law"],
      tuition: "CAD 35,000–60,000/year",
      acceptance: "43%",
    },
    {
      name: "University of British Columbia (UBC)",
      location: "Vancouver, British Columbia",
      ranking: "Top 40 worldwide",
      specialties: ["Environmental Science", "Forestry", "Computer Science"],
      tuition: "CAD 30,000–55,000/year",
      acceptance: "52%",
    },
    {
      name: "McGill University",
      location: "Montreal, Quebec",
      ranking: "Top 30 worldwide",
      specialties: ["Medicine", "Law", "Arts & Humanities"],
      tuition: "CAD 28,000–50,000/year",
      acceptance: "46%",
    },
  ];

  const popularCourses = [
    { category: "STEM", courses: ["Engineering", "Computer Science", "Data Science", "IT"] },
    { category: "Business", courses: ["MBA", "Finance", "Management", "Accounting"] },
    { category: "Health Sciences", courses: ["Medicine", "Nursing", "Pharmacy", "Public Health"] },
    { category: "Environmental", courses: ["Forestry", "Agriculture", "Sustainability Studies"] },
  ];

  const admissionCriteria = [
    {
      title: "Academic Requirements",
      items: [
        "High school completion (Grade 12 / IB / A-Levels or equivalent)",
        "Bachelor’s degree for postgraduate programs",
        "Strong academic performance in previous studies",
      ],
    },
    {
      title: "English/French Proficiency",
      items: [
        "IELTS: 6.5+ (no band less than 6.0)",
        "TOEFL iBT: 90+",
        "Some Quebec universities accept French proficiency tests (TEF/DELF).",
      ],
    },
    {
      title: "Documents Required",
      items: [
        "Academic transcripts & certificates",
        "Statement of Purpose (SOP)",
        "2–3 Letters of Recommendation",
        "Valid passport & Canadian study permit",
        "Proof of funds (CAD 10,000–15,000/year for living expenses)",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-500 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Study in <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">Canada</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Canada is one of the most popular destinations for international students, offering high-quality education, affordable tuition, and clear immigration pathways.
            </p>
          </div>
        </section>

        {/* Why Study */}
        <section className="py-20 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Study in Canada?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyStudyReasons.map((reason, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:-translate-y-2 transition">
                <p className="text-gray-700 text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Top Universities */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50 px-4">
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

        {/* Popular Courses */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Popular Courses</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {popularCourses.map((cat, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                  <h3 className="text-lg font-bold text-blue-700 mb-4">{cat.category}</h3>
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
        <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 px-4">
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
      </div>
      <Footer />
    </>
  );
};

export default CanadaPage;
