import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-14">
      <div className="max-w-4xl mx-auto">
        {/* Form Section */}
        <form className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="space-y-4">
            {/* Name Input */}
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            {/* Budget Input */}
            <input
              type="text"
              placeholder="Budget"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            {/* Textarea for Project Description */}
            <textarea
              placeholder="Describe your project..."
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none h-24"
            ></textarea>
          </div>

          {/* Centered Button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="px-7 py-3.5 bg-transparent border border-teal-400 text-teal-400 rounded-md hover:bg-teal-400 hover:text-black transition"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Footer Text */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Minimal Template made in Webflow. All rights reserved.
          </p>
        </div>

        {/* Decorative Element */}
        <div className="mt-4 text-center text-gray-500">
          <span className="text-sm">N</span>
          <span className="mx-2">M</span>
          <span className="text-sm">F</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
