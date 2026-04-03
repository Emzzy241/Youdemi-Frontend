import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { PRIMARY_BLUE } from "./Colors"; // Do this for all files and refactor code

// const PRIMARY_BLUE = 'rgb(0, 86, 210)';

const HelpSupport = () => {
    const categories = [
        { icon: "💳", title: "Billing & Payments", desc: "Manage subscriptions and refunds" },
        { icon: "🎓", title: "Course Access", desc: "Troubleshoot video and quiz issues" },
        { icon: "👤", title: "Account Settings", desc: "Update password and profile" },
        { icon: "📱", title: "Mobile App", desc: "Learning on the go with iOS & Android" },
    ];

    return (
        <React.Fragment>
            <Navbar />
            <div className="min-h-screen bg-gray-50">
                {/* Header Search */}
                <div className="py-16 px-4 text-center text-white" style={{ backgroundColor: PRIMARY_BLUE }}>
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">Hey, How can we help you?</h1>
                    <div className="max-w-2xl mx-auto relative">
                        <input
                            type="text"
                            placeholder="Search for articles..."
                            className="w-full p-4 rounded-xl text-gray-900 shadow-xl focus:ring-4 focus:ring-blue-300 outline-none"
                        />
                    </div>
                </div>

                {/* Grid of Categories */}
                <div className="max-w-6xl mx-auto px-4 -mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 cursor-pointer">
                            <div className="text-4xl mb-4">{cat.icon}</div>
                            <h3 className="font-bold text-gray-900 mb-2">{cat.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{cat.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                <div className="text-center py-20">
                    <p className="text-gray-600 mb-4">Still need help?</p>
                    <button
                        className="px-8 py-3 rounded-xl font-bold text-white shadow-lg transform transition active:scale-95"
                        style={{ backgroundColor: PRIMARY_BLUE }}
                    >
                        Contact Support
                    </button>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default HelpSupport;