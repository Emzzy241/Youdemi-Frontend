import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const TrustSafety = () => (
    <React.Fragment>
        <Navbar />
        
    <div className="min-h-screen bg-white">
        <section className="py-20 text-center bg-slate-900 text-white">
            <h1 className="text-4xl font-bold mb-4">Trust & Safety at Youdemi</h1>
            <p className="text-slate-400 max-w-2xl mx-auto">We work around the clock to keep our community safe, inclusive, and transparent.</p>
        </section>

        <section className="max-w-6xl mx-auto py-20 px-4 grid md:grid-cols-3 gap-12">
            {[
                { icon: "🛡️", title: "Identity Verification", desc: "We verify instructors to ensure expert-led content." },
                { icon: "🔒", title: "Secure Payments", desc: "Encrypted transactions via industry-leading partners." },
                { icon: "🤝", title: "Community Standards", desc: "Strict policies against harassment and academic fraud." }
            ].map((item, i) => (
                <div key={i} className="p-8 border border-gray-100 rounded-3xl text-center hover:shadow-xl transition-shadow">
                    <div className="text-5xl mb-6">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </section>
    </div>
    <Footer />
    </React.Fragment>
);

export default TrustSafety;