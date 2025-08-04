import React from "react";
import {
  Globe,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Globe className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-bold">Eduvyn Education</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Empowering students to achieve their international education
                dreams through personalized guidance and comprehensive support.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <Mail className="text-white w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <Phone className="text-white w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <Globe className="text-white w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">
                  University Selection
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Application Support
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Visa Assistance
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Scholarship Guidance
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <a
                  href="https://maps.google.com/?q=Delhi, India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 hover:text-white transition-colors cursor-pointer"
                >
                  <Globe className="w-4" /> Delhi, India
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex gap-2 hover:text-white transition-colors cursor-pointer"
                >
                  <Phone className="w-4" /> +91 98765 43210
                </a>
                <a
                  href="mailto:info@eduvyn.com"
                  className="flex gap-2 hover:text-white transition-colors cursor-pointer"
                >
                  <Mail className="w-4" /> info@eduvyn.com
                </a>
                <a
                  href="https://www.eduvyn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 hover:text-white transition-colors cursor-pointer"
                >
                  <Globe className="w-4" /> www.eduvyn.com
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 Eduvyn Education. All rights reserved. | Designed for
              aspiring global students
            </p>
          </div>
        </div>
      </footer>
  );
}
export default Footer;