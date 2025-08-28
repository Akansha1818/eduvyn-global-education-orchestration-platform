"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

const StudyUKPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  const whyStudyReasons = [
    {
      title: "Prestigious Institutions",
      description: "Home to world-class universities like Oxford and Cambridge.",
    },
    {
      title: "Globally Recognized Degrees",
      description:
        "UK degrees are respected worldwide, opening doors for global careers.",
    },
    {
      title: "Cultural Diversity",
      description: "Over 500,000 international students study in the UK each year.",
    },
    {
      title: "Work Opportunities",
      description: "2-year post-study work visa (Graduate Route) available.",
    },
  ];

  const topUniversities = [
    {
      name: "University of Oxford",
      location: "Oxford, England",
      ranking: "#1 in UK",
      specialties: ["Philosophy", "Law", "Medicine"],
      tuition: "£25,000–£45,000/year",
      acceptance: "17.5%",
    },
    {
      name: "University of Cambridge",
      location: "Cambridge, England",
      ranking: "#2 in UK",
      specialties: ["Engineering", "Science", "Economics"],
      tuition: "£24,000–£40,000/year",
      acceptance: "21%",
    },
    {
      name: "Imperial College London",
      location: "London, England",
      ranking: "#3 in UK",
      specialties: ["STEM", "Engineering", "Medicine"],
      tuition: "£30,000–£42,000/year",
      acceptance: "15%",
    },
  ];

  const popularCourses = [
    { category: "STEM", courses: ["Engineering", "Computer Science", "AI", "Data Science"] },
    { category: "Business", courses: ["MBA", "Finance", "Management", "Marketing"] },
    { category: "Arts & Humanities", courses: ["History", "English Literature", "Law", "Philosophy"] },
    { category: "Health Sciences", courses: ["Medicine", "Nursing", "Pharmacy", "Public Health"] },
  ];

  const admissionCriteria = [
    {
      title: "Academic Requirements",
      items: [
        "High school diploma (A-levels/IB or equivalent)",
        "Bachelor’s degree for postgraduate studies",
        "Strong academic transcripts",
      ],
    },
    {
      title: "English Proficiency",
      items: ["IELTS: 6.5+", "TOEFL iBT: 90+", "PTE: 60+"],
    },
    {
      title: "Documents Required",
      items: [
        "Application form",
        "Statement of purpose",
        "2–3 Letters of recommendation",
        "Valid passport",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <Navbar />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900 via-blue-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Study in{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              UK
            </span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Unlock your potential in one of the world’s leading destinations for higher education.
          </p>
        </div>
      </section>

      {/* Why Study */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Study in the UK?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyStudyReasons.map((reason, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:-translate-y-2 transition"
            >
              <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Top Universities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {topUniversities.map((uni, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition"
              >
                <h3 className="text-xl font-bold mb-2">{uni.name}</h3>
                <ul className="list-disc pl-5">
                    <li className="text-gray-600">{uni.location}</li>
                    <li>{uni.ranking}</li>
                    <li>Specialties: {uni.specialties.join(", ")}</li>
                    <li>Tuition: {uni.tuition}</li>
                    <li>Acceptance Rate: {uni.acceptance}</li>
                </ul>
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
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-blue-600 mb-4">{cat.category}</h3>
                <ul className="space-y-2">
                  {cat.courses.map((c, j) => (
                    <li key={j} className="text-sm">• {c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Criteria */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-red-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Admission Criteria</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {admissionCriteria.map((crit, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-red-600 mb-4">{crit.title}</h3>
                <ul className="space-y-2">
                  {crit.items.map((it, j) => (
                    <li key={j} className="text-sm">• {it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyUKPage;
