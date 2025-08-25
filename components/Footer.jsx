import React from "react";
import { Globe, Mail, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex space-x-2">
              <Image
                src="/images/logo.png"
                alt="Eduvyn Logo"
                width={150}
                height={150}
                className="rounded-xl"
              />
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
                Personalized Counseling
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                University Selection
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Application & Scholarship Guidance
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Visa Assistance
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Accommodation Support
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <a
                href="https://maps.google.com/?q=1721, 16th Floor, Hope Tower (Office Tower), Galaxy Blue Sapphire Plaza, Greater Noida West Rd, Sector 4, Greater Noida, Uttar Pradesh 201309"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 hover:text-white transition-colors cursor-pointer"
              >
                <Globe className="w-14" /> Sky Garden sector 16B Greater Noida west, Uttar Pradesh
              </a>
              <a
                href="tel:+919289272046"
                className="flex gap-2 hover:text-white transition-colors cursor-pointer"
              >
                <Phone className="w-4" /> +91-8527361010
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 Eduvyn. All rights reserved. | Designed for aspiring
            global students
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
