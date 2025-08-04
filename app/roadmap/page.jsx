'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight, Globe, Users, Award, BookOpen, Star, ArrowRight, Menu, X, CheckCircle, Clock, MapPin, Target, Calendar, FileText, Plane, GraduationCap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RoadmapPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 8);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const roadmapSteps = [
    {
      phase: "Phase 1",
      title: "Initial Consultation & Assessment",
      duration: "Week 1-2",
      description: "Free consultation to understand your goals, academic background, and preferred destinations.",
      tasks: [
        "Complete academic profile assessment",
        "Discuss career goals and interests",
        "Explore destination preferences",
        "Initial budget planning"
      ],
      icon: Target,
      color: "from-blue-500 to-cyan-500"
    },
    {
      phase: "Phase 2",
      title: "Test Preparation & Language Training",
      duration: "Week 3-4",
      description: "Prepare for standardized tests and enhance language skills for your chosen destination.",
      tasks: [
        "IELTS/TOEFL/PTE preparation",
        "GRE/GMAT/SAT coaching if required",
        "Foreign language courses (German, French, Spanish)",
        "Mock tests and practice sessions"
      ],
      icon: Award,
      color: "from-green-500 to-emerald-500"
    },
    {
      phase: "Phase 3", 
      title: "University Research & Selection",
      duration: "Week 5-16",
      description: "Comprehensive research and shortlisting of universities based on your profile and preferences.",
      tasks: [
        "Research universities and programs",
        "Analyze admission requirements",
        "Shortlist 8-12 universities",
        "Create application timeline"
      ],
      icon: BookOpen,
      color: "from-purple-500 to-pink-500"
    },
    {
      phase: "Phase 4",
      title: "Application Preparation",
      duration: "Week 17-20",
      description: "Craft compelling applications with strong SOPs, LORs, and supporting documents.",
      tasks: [
        "Draft Statement of Purpose (SOP)",
        "Arrange Letters of Recommendation",
        "Prepare academic transcripts",
        "Create compelling essays"
      ],
      icon: FileText,
      color: "from-yellow-500 to-orange-500"
    },
    {
      phase: "Phase 5",
      title: "Application Submission",
      duration: "Week 21-24",
      description: "Submit applications to shortlisted universities with proper documentation.",
      tasks: [
        "Complete online applications",
        "Submit required documents",
        "Pay application fees",
        "Track application status"
      ],
      icon: CheckCircle,
      color: "from-red-500 to-pink-500"
    },
    {
      phase: "Phase 6",
      title: "Scholarship & Financial Aid",
      duration: "Week 25-28",
      description: "Apply for scholarships and financial aid opportunities to minimize costs.",
      tasks: [
        "Research scholarship opportunities",
        "Prepare scholarship applications",
        "Apply for financial aid",
        "Explore education loans"
      ],
      icon: Star,
      color: "from-indigo-500 to-purple-500"
    },
    {
      phase: "Phase 7",
      title: "Visa Application Process",
      duration: "Week 29-32",
      description: "Navigate the visa application process with expert guidance and preparation.",
      tasks: [
        "Gather visa documentation",
        "Complete visa application forms",
        "Visa interview preparation",
        "Submit visa application"
      ],
      icon: Plane,
      color: "from-teal-500 to-blue-500"
    },
    {
      phase: "Phase 8",
      title: "Pre-Departure Preparation",
      duration: "Week 33-36",
      description: "Final preparations for your international education journey.",
      tasks: [
        "Accommodation arrangements",
        "Travel planning and booking",
        "Pre-departure orientation",
        "Connect with student communities"
      ],
      icon: GraduationCap,
      color: "from-rose-500 to-orange-500"
    }
  ];

  const timelineItems = [
    { month: "Month 1-2", activity: "Assessment & Research", status: "active" },
    { month: "Month 3-4", activity: "Test Prep & Training", status: "upcoming" },
    { month: "Month 5-6", activity: "Applications", status: "upcoming" },
    { month: "Month 7-9", activity: "Visa & Departure", status: "upcoming" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-6">
              <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200">
                Your Success Roadmap
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Step-by-Step
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Study Abroad Journey
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Follow our proven 8-phase roadmap that has helped thousands of students successfully navigate their international education journey. From initial consultation to landing in your dream destination.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">9-Month Journey</span> Overview
            </h2>
            <p className="text-lg text-gray-600">A structured timeline to help you plan and track your progress</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 transition-all duration-500 ${
                  item.status === 'active' 
                    ? 'border-blue-500 bg-blue-50 scale-105' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                    item.status === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.month}</h3>
                  <p className="text-gray-600 text-sm">{item.activity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Detailed
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Roadmap Phases</span>
            </h2>
            <p className="text-xl text-gray-600">
              Each phase is carefully designed to build upon the previous one, ensuring comprehensive preparation
            </p>
          </div>

          <div className="space-y-8">
            {roadmapSteps.map((step, index) => (
              <div
                key={index}
                className={`relative ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex lg:items-center lg:gap-12`}
              >
                {index < roadmapSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-full w-px h-8 bg-gradient-to-b from-gray-300 to-transparent transform -translate-x-1/2 z-10"></div>
                )}

                <div className={`lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 mb-6 lg:mb-0 flex justify-center`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg ${
                    activeStep === index ? 'scale-110 animate-pulse' : ''
                  } transition-all duration-500`}>
                    {index + 1}
                  </div>
                </div>

                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'}`}>
                  <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}>
                    
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mr-4`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-500">{step.phase}</span>
                        <span className="block text-xs text-blue-600 font-medium">{step.duration}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-6">{step.description}</p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Key Tasks:</h4>
                      {step.tasks.map((task, taskIndex) => (
                        <ul key={taskIndex} className="flex items-start space-x-3 list-disc pl-5">
                          {/* <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /> */}
                          <li className="text-gray-700 text-sm list-disc">{task}</li>
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default RoadmapPage;