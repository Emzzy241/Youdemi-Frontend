import React from "react";
import { Link } from "react-router-dom";

const CourseCTA = () => {
  return (
    <div className="mt-10 bg-gradient-to-r from-gray-950 via-slate-900 to-gray-950 text-white rounded-1xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">

      {/* TEXT */}
      <div className="max-w-xl">
        <h2 className="text-xl md:text-2xl font-bold mb-2">
          Start learning today.
        </h2>
        <p className="text-sm md:text-base text-gray-300">
          Unlock full access to high-quality courses designed to help you grow your skills, build real projects, and stay ahead in tech.
        </p>

        {/* Optional trust line */}
        <p className="text-xs text-gray-500 mt-2">
          Join thousands of learners already building real-world skills.
        </p>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-3">
        <Link to="/auth/signIn" className="bg-white text-gray-900 font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-200 transition">
          Sign In
        </Link>
        <Link to="/catalog" className="border border-gray-600 text-gray-200 font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-800 hover:text-white transition">
          Browse Courses
        </Link>
      </div>
    </div>
  );
};

export default CourseCTA;