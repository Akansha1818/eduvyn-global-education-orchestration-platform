"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

const StudyUSAPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const whyStudyReasons = [
    {
      title: "World's Top Universities",
      description:
        "Home to 8 of the world's top 10 universities including Harvard, MIT, and Stanford",
    },
    {
      title: "Global Recognition",
      description:
        "US degrees are recognized worldwide and highly valued by employers globally",
    },
    {
      title: "Diverse Community",
      description:
        "Study alongside students from over 200 countries in a multicultural environment",
    },
    {
      title: "Career Opportunities",
      description:
        "Access to internships and job opportunities in the world's largest economy",
    },
  ];

  const topUniversities = [
    {
      name: "Harvard University",
      location: "Cambridge, Massachusetts",
      ranking: "#1 in USA",
      specialties: ["Business", "Medicine", "Law"],
      tuition: "$59,076/year",
      acceptance: "3.4%",
    },
    {
      name: "Stanford University",
      location: "Stanford, California",
      ranking: "#2 in USA",
      specialties: ["Engineering", "Computer Science", "Business"],
      tuition: "$61,731/year",
      acceptance: "3.6%",
    },
    {
      name: "MIT",
      location: "Cambridge, Massachusetts",
      ranking: "#3 in USA",
      specialties: ["Engineering", "Technology", "Science"],
      tuition: "$64,310/year",
      acceptance: "4.5%",
    },
    {
      name: "University of California, Berkeley",
      location: "Berkeley, California",
      ranking: "#4 in USA",
      specialties: ["Engineering", "Business", "Computer Science"],
      tuition: "$51,858/year",
      acceptance: "11.4%",
    },
    {
      name: "Princeton University",
      location: "Princeton, New Jersey",
      ranking: "#5 in USA",
      specialties: ["Liberal Arts", "Engineering", "Economics"],
      tuition: "$61,160/year",
      acceptance: "4.0%",
    },
    {
      name: "Yale University",
      location: "New Haven, Connecticut",
      ranking: "#6 in USA",
      specialties: ["Liberal Arts", "Medicine", "Law"],
      tuition: "$63,970/year",
      acceptance: "4.6%",
    },
  ];

  const popularCourses = [
    {
      category: "STEM",
      courses: [
        "Computer Science & AI",
        "Data Science & Analytics",
        "Biomedical Engineering",
        "Electrical Engineering",
        "Mechanical Engineering",
      ],
    },
    {
      category: "Business",
      courses: [
        "MBA (Master of Business Administration)",
        "Finance & Investment Banking",
        "Marketing & Digital Marketing",
        "International Business",
        "Entrepreneurship",
      ],
    },
    {
      category: "Liberal Arts",
      courses: [
        "Psychology",
        "International Relations",
        "Economics",
        "Communications",
        "Political Science",
      ],
    },
    {
      category: "Health Sciences",
      courses: [
        "Medicine (MD)",
        "Nursing",
        "Public Health",
        "Pharmacy",
        "Physical Therapy",
      ],
    },
  ];

  const admissionCriteria = [
    {
      title: "Academic Requirements",
      items: [
        "High school diploma or equivalent (12th grade completion)",
        "Minimum GPA of 3.0-4.0 (varies by university)",
        "Strong academic transcripts with competitive grades",
      ],
    },
    {
      title: "Standardized Tests",
      items: [
        "SAT: 1200+ for competitive universities",
        "ACT: 26+ for competitive universities",
        "GRE/GMAT for graduate programs",
      ],
    },
    {
      title: "English Proficiency",
      items: [
        "TOEFL: 80+ (iBT) / 550+ (PBT)",
        "IELTS: 6.5+ overall band score",
        "Duolingo English Test: 110+",
      ],
    },
    {
      title: "Documents Required",
      items: [
        "Completed application form",
        "Letters of recommendation (2-3)",
        "Statement of purpose/Personal essay",
        "Financial documents showing ability to pay",
        "Valid passport",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-blue-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 via-red-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className={`text-5xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Unlock Your Future in{" "}
            <span className="block bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              America
            </span>
          </h1>

          <p className="text-xl lg:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto text-blue-100">
            Join over 1 million international students at world-renowned
            universities. Experience academic excellence, cultural diversity,
            and unlimited opportunities.
          </p>
        </div>
      </section>

      {/* Why Study in USA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Study in the{" "}
              <span className="text-blue-600">United States?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The USA offers unparalleled educational opportunities with
              world-class facilities, innovative teaching methods, and a gateway
              to global career success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyStudyReasons.map((reason, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Top Universities in the USA
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover some of the leading institutions shaping innovation and
              research worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topUniversities.map((uni, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {uni.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{uni.location}</p>
                <p className="text-sm text-gray-600 mb-2">{uni.ranking}</p>
                <p className="text-sm text-gray-600 mb-2">
                  Specialties: {uni.specialties.join(", ")}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Tuition: {uni.tuition}
                </p>
                <p className="text-sm text-gray-600">
                  Acceptance Rate: {uni.acceptance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Popular Courses for International Students
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the most in-demand courses that attract thousands of
              students to the USA each year.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularCourses.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.courses.map((course, i) => (
                    <li key={i} className="text-gray-700 text-sm">
                      • {course}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Criteria */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Admission Criteria
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To study in the USA, students must meet certain academic and
              documentation requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionCriteria.map((criteria, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <h3 className="text-xl font-semibold text-red-600 mb-4">
                  {criteria.title}
                </h3>
                <ul className="space-y-2">
                  {criteria.items.map((item, i) => (
                    <li key={i} className="text-gray-700 text-sm">
                      • {item}
                    </li>
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

export default StudyUSAPage;
