"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DubaiPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  const whyDubai = [
    "Hosts top international branch campuses (Heriot-Watt, University of Birmingham, Middlesex University).",
    "Globally recognized UK, US, and Australian degrees available in Dubai.",
    "Strategic location connecting Asia, Europe, and Africa.",
    "Tax-free lifestyle, safe environment, and high employability rates.",
    "Multicultural student community with over 200 nationalities.",
  ];

  const topUniversities = [
    {
      name: "University of Birmingham Dubai",
      type: "UK Branch Campus",
      specialties: ["Business", "Engineering", "Computer Science"],
      tuition: "AED 60,000–100,000/year",
    },
    {
      name: "Heriot-Watt University Dubai",
      type: "UK Branch Campus",
      specialties: ["Architecture", "Engineering", "Management"],
      tuition: "AED 55,000–90,000/year",
    },
    {
      name: "Middlesex University Dubai",
      type: "UK Branch Campus",
      specialties: ["Law", "Media", "Hospitality"],
      tuition: "AED 45,000–80,000/year",
    },
    {
      name: "American University in Dubai (AUD)",
      type: "Private",
      specialties: ["Business", "International Relations", "Design"],
      tuition: "AED 65,000–95,000/year",
    },
    {
      name: "Manipal Academy of Higher Education (Dubai Campus)",
      type: "Indian University Branch",
      specialties: ["Engineering", "IT", "Health Sciences"],
      tuition: "AED 40,000–75,000/year",
    },
  ];

  const popularCourses = [
    { category: "Business & Management", courses: ["MBA", "International Business", "Finance"] },
    { category: "Engineering & Technology", courses: ["Civil", "Mechanical", "AI & Robotics"] },
    { category: "Hospitality & Tourism", courses: ["Hotel Management", "Event Management"] },
    { category: "Computer Science & AI", courses: ["Data Science", "Artificial Intelligence", "Cybersecurity"] },
    { category: "Architecture & Design", courses: ["Urban Design", "Interior Architecture"] },
  ];

  const admissionCriteria = [
    {
      title: "Academic Requirements",
      items: [
        "High school completion (Grade 12 / IB / A-Levels or equivalent)",
        "Bachelor’s degree for postgraduate studies",
        "Minimum GPA as per university requirements",
      ],
    },
    {
      title: "English Proficiency",
      items: [
        "IELTS: 6.0–6.5",
        "TOEFL iBT: 80–90",
        "Some universities offer English placement tests on campus",
      ],
    },
    {
      title: "Documents Required",
      items: [
        "Valid passport",
        "Academic transcripts & certificates",
        "Statement of Purpose (SOP)",
        "Letters of Recommendation",
        "Proof of funds for tuition & living expenses",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50">
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Study in <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">Dubai</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Dubai has become one of the fastest-growing international education hubs, hosting world-class campuses and offering outstanding career opportunities in a global city.
            </p>
          </div>
        </section>

        {/* Why Dubai */}
        <section className="py-20 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Study in Dubai?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyDubai.map((reason, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:-translate-y-2 transition">
                <p className="text-gray-700 text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Top Universities */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Top Universities in Dubai</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {topUniversities.map((uni, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition">
                  <h3 className="text-xl font-bold">{uni.name}</h3>
                  <p className="text-gray-600">{uni.type}</p>
                  <p className="text-gray-700">Specialties: {uni.specialties.join(", ")}</p>
                  <p className="text-gray-700">Tuition: {uni.tuition}</p>
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
              {popularCourses.map((cat, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                  <h3 className="text-lg font-bold text-orange-700 mb-4">{cat.category}</h3>
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
        <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Admission Criteria</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {admissionCriteria.map((crit, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="text-lg font-bold text-orange-700 mb-4">{crit.title}</h3>
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

        {/* Cost & Visa Info */}
        <section className="py-20 max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Cost of Studying & Visa</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="mb-6 text-gray-700">
              Tuition fees in Dubai range between <strong>AED 40,000 – 100,000 per year</strong> 
              (USD 11,000 – 27,000), depending on the university and program. 
              Living costs average <strong>AED 3,000 – 5,000 per month</strong>.
            </p>
            <p className="text-gray-700">
              International students require a <strong>UAE Student Visa</strong>, usually sponsored by their university. 
              During studies, students may work part-time with approval. After graduation, Dubai offers a 
              <strong> Golden Visa (5–10 years)</strong> for outstanding students and graduates, creating strong career opportunities.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DubaiPage;
