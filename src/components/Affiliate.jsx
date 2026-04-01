import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PRIMARY_BLUE = 'rgb(0, 86, 210)';
const BG_LIGHT_BLUE = 'rgb(240, 248, 255)';


const Affiliate = () => {
    const steps = [
        { num: "01", title: "Join", desc: "Sign up for our partner program in under 2 minutes." },
        { num: "02", title: "Promote", desc: "Share your unique link on your blog, YouTube, or social media." },
        { num: "03", title: "Earn", desc: "Get up to 20% commission for every new student you bring in." },
    ];

    return (
        <React.Fragment>
            <Navbar />
            <div className="bg-white">
                {/* Hero Section */}
                <section className="py-24 text-center px-4" style={{ backgroundColor: BG_LIGHT_BLUE }}>
                    <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
                        Share Knowledge. <br />
                        <span style={{ color: PRIMARY_BLUE }}>Get Rewarded.</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Join the Youdemi Affiliate Program and earn industry-leading commissions
                        by helping people discover their next career-changing skill.
                    </p>
                    <button className="px-10 py-4 rounded-2xl font-bold text-white shadow-xl hover:-translate-y-1 transition-all" style={{ backgroundColor: PRIMARY_BLUE }}>
                        Become a Partner
                    </button>
                </section>

                {/* How it works */}
                <section className="max-w-6xl mx-auto py-24 px-4">
                    <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">How it works</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {steps.map((step) => (
                            <div key={step.num} className="relative p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                                <span className="text-6xl font-black text-gray-200 absolute top-6 right-8 group-hover:text-blue-100 transition-colors">
                                    {step.num}
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative">{step.title}</h3>
                                <p className="text-gray-500 leading-relaxed relative">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Stats Section */}
                <section className="bg-slate-900 py-20">
                    <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
                        <div>
                            <div className="text-4xl font-black text-blue-400 mb-2">20%</div>
                            <div className="text-sm uppercase tracking-widest text-slate-400">Commission</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-blue-400 mb-2">30-Day</div>
                            <div className="text-sm uppercase tracking-widest text-slate-400">Cookie Life</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-blue-400 mb-2">50k+</div>
                            <div className="text-sm uppercase tracking-widest text-slate-400">Courses</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-blue-400 mb-2">Monthly</div>
                            <div className="text-sm uppercase tracking-widest text-slate-400">Payouts</div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Affiliate;