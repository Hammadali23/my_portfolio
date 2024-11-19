import React from 'react';
import { BsTelephoneForward } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiMapPinUserFill } from "react-icons/ri";

export default function Contact(){
  return (
    <div className="bg-slate-600 min-h-screen flex flex-col items-center pt-4 py-12 px-4">
    <div className="">
      <h1 className="text-4xl font-bold text-center mb-8 mt-24 underline text-cyan-300 animate-scale-up-down">Contact Me</h1>
        <div className="bg-blue-950 text-white min-h-screen flex items-center justify-center  py-24 px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side: Contact Form */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg mt-8 ">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-gray-400">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 mt-2 bg-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            {/* Email and Phone Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-gray-400">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 mt-2 bg-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-400">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Your Phone Number"
                  className="w-full px-4 py-2 mt-2 bg-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-gray-400">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-2 mt-2 bg-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-transform transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side: Contact Information */}
        <div className="space-y-8 text-gray-300">
          <h2 className="text-3xl font-bold">
            Contact <span className="text-blue-500">Us</span>
          </h2>
          <p className="text-lg">
            For questions, technical assistance, or collaboration opportunities via the contact information provided.
          </p>
          <div className="space-y-4">
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <BsTelephoneForward style={{ fontSize: "25px" }}/>
                </svg>
              </div>
              <p>0325-7059641</p>
            </div>
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                 <MdEmail style={{ fontSize: "25px" }}/>
                </svg>
              </div>
              <p>malik.hammad.ali78@gmail.com</p>
            </div>
            {/* Address */}
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <RiMapPinUserFill style={{ fontSize: "25px" }}/>
                </svg>
              </div>
              <p>RKV House No 555, Model Colony, Karachi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};


