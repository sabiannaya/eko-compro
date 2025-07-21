"use client";

import Footer from "@/components/Footer";
import {
  contact,
  contactDetail,
  contactForm,
  contactInfo,
} from "@/data/sections";
import { useLanguage } from "@/utils/LanguageContext";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";

export default function Homepage() {
  const Map = dynamic(() => import("@/components/Map"), {
    ssr: false,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { currentLanguage } = useLanguage();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {contact.title[currentLanguage]}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {contact.description[currentLanguage]}
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 2xl:py-24">
        <div className="grid lg:grid-cols-2 gap-12 pb-28">
          {/* Contact Information */}
          <div className="space-y-8 mb-3">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {contactDetail.title[currentLanguage]}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {contactDetail.description[currentLanguage]}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div
                className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm transition-all duration-300 hover:scale-105 hover:z-10 active:scale-105
          origin-center relative group cursor-pointer"
              >
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {contactInfo[0].title[currentLanguage]}
                  </h3>
                  <p className="text-gray-600">
                    {contactInfo[0].description[currentLanguage]}
                  </p>
                </div>
              </div>

              <div
                className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm transition-all duration-300 hover:scale-105 hover:z-10 active:scale-105
          origin-center relative group cursor-pointer"
              >
                <div className="bg-green-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {contactInfo[1].title[currentLanguage]}
                  </h3>
                  <p className="text-gray-600">
                    {contactInfo[1].description[currentLanguage]}
                    <br />
                    {contactInfo[2].description[currentLanguage]}
                  </p>
                </div>
              </div>

              <div
                className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm transition-all duration-300 hover:scale-105 hover:z-10 active:scale-105
          origin-center relative group cursor-pointer"
              >
                <div className="bg-purple-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">
                    {contactInfo[3].description[currentLanguage]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {contactForm[0].title[currentLanguage]}
            </h3>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {contactForm[1].title[currentLanguage]}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John Smith"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {contactForm[2].title[currentLanguage]}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {contactForm[3].title[currentLanguage]}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Hey!..."
                  required
                ></textarea>
              </div>

              {/* <p className="text-sm text-gray-500">
                Informasi pribadi Anda akan dijaga kerahasiaannya dan tidak akan
                dibagikan ke pihak ketiga.
              </p> */}

              <a
                href={`mailto:iqbalghazali44@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${formData.name}%0AEmail:%20${formData.email}%0AMessage:%20${formData.message}`}
                onClick={handleSubmit}
                className="block w-full bg-green-500 hover:bg-green-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform text-center no-underline"
              >
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-red-400 h-64 rounded-lg flex items-center justify-center -translate-y-1/2">
            <Map latitude={-6.92694635434613} longitude={107.62733114022402} />
          </div>
        </div>
      </div>

      <Footer currentLanguage={currentLanguage} />
    </div>
  );
}
