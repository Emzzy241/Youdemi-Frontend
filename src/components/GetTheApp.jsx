import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const PRIMARY_BLUE = 'rgb(0, 86, 210)';


const GetTheApp = () => (
    <React.Fragment>
        <Navbar />
        <div className="min-h-screen overflow-hidden bg-slate-50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 py-20 lg:flex items-center gap-16">
            <div className="lg:w-1/2">
                <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-bold mb-6">
                    COMING SUMMER 2026
                </span>
                <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-8">
                    Your Classroom, <br />
                    <span style={{ color: PRIMARY_BLUE }}>In Your Pocket.</span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                    Download lessons, chat with mentors, and track your progress—anywhere in the world. 
                    The Youdemi App is currently in private beta.
                </p>

                <form className="flex gap-2 max-w-md">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="flex-grow p-4 rounded-2xl border-none shadow-inner focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <button 
                        className="px-8 py-4 rounded-2xl font-bold text-white shadow-lg active:scale-95 transition-transform"
                        style={{ backgroundColor: PRIMARY_BLUE }}
                    >
                        Notify Me
                    </button>
                </form>
            </div>

            {/* Visual Mockup Area */}
            <div className="lg:w-1/2 mt-20 lg:mt-0 relative">
                <div className="absolute inset-0 bg-blue-400 rounded-full filter blur-[120px] opacity-20 animate-pulse"></div>
                <div className="relative bg-gray-900 w-72 h-[580px] mx-auto rounded-[3rem] border-[8px] border-gray-800 shadow-2xl flex items-center justify-center overflow-hidden">
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                            <span className="text-white text-3xl font-black">Y</span>
                        </div>
                        <p className="text-gray-400 text-sm font-medium italic">Mobile learning <br/> redesigned.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </React.Fragment>
);

export default GetTheApp;