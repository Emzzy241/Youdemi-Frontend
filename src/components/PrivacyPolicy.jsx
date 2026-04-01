import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

const PRIMARY_BLUE = 'rgb(0, 86, 210)';


const privacyData = [
    {
        id: v4(),
        header: "Information We Collect",
        description: "We collect information you provide directly, such as account details, profile photos, and payment info. We also automatically collect 'Learning Data,' which includes course progress, quiz scores, time spent on lessons, and interaction with instructors."
    },
    {
        id: v4(),
        header: "How We Use Your Learning Data",
        description: "Your data helps us personalize your dashboard, recommend courses, and provide 'Video Heatmaps' to instructors so they can improve their teaching materials. We do not sell your personal learning habits to third-party advertisers."
    },
    {
        id: v4(),
        header: "Instructor-Specific Data",
        description: "If you are an instructor, we collect tax identification numbers and payout details (via Stripe or PayPal) to comply with financial regulations. We also track student feedback and ratings to maintain platform quality."
    },
    {
        id: v4(),
        header: "Cookies and Tracking Technologies",
        description: "We use cookies to keep you logged in and to remember your playback speed preferences. You can manage these via our Cookie Settings page, though some features like 'Resume Playback' may not function without them."
    },
    {
        id: v4(),
        header: "Data Sharing & Third Parties",
        description: "We share data with service providers who help us with cloud hosting (AWS), payment processing, and email delivery. We may also share anonymized, aggregate data with university partners for educational research purposes."
    },
    {
        id: v4(),
        header: "Student Privacy & Minors",
        description: "Youdemi is intended for users 13 years of age and older. We do not knowingly collect data from children under 13. If we discover such data has been collected, we will take immediate steps to delete it."
    },
    {
        id: v4(),
        header: "Your Data Rights (GDPR/CCPA)",
        description: "Depending on your location, you have the right to access, correct, or delete your personal data. You can request a 'Data Export' from your account settings to see every piece of information Youdemi has stored about your learning journey."
    },
    {
        id: v4(),
        header: "Data Retention",
        description: "We retain your information for as long as your account is active. If you choose to close your account, we will anonymize your quiz scores and forum posts so the 'Community Knowledge' remains intact while your identity is removed."
    },
    {
        id: v4(),
        header: "Security Measures",
        description: "We employ SSL encryption for all data in transit and hash all passwords. While no system is 100% secure, we perform regular audits to protect your educational records from unauthorized access."
    },
    {
        id: v4(),
        header: "International Data Transfers",
        description: "Youdemi is based in the United States. By using the platform, you acknowledge that your information may be transferred to and processed in servers located outside of your home country."
    }
];

// Use the same mapping logic as the Terms page
const PrivacyPolicy = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className="bg-white min-h-screen">
                {/* Header / Preamble */}
                <header className="max-w-4xl mx-auto px-4 pt-20 pb-12 border-b border-gray-100">
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
                        Privacy <span style={{ color: PRIMARY_BLUE }}>Policy</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Your trust is our most important asset. This policy explains how Youdemi
                        collects, uses, and protects your data while you master new skills.
                        We believe in <strong>Data Minimalism</strong>: we only ask for what we need
                        to help you learn.
                    </p>
                </header>

                <div className="max-w-7xl mx-auto px-4 py-16 lg:flex lg:gap-16">

                    {/* Sidebar Navigation */}
                    <aside className="hidden lg:block w-72 shrink-0">
                        <div className="sticky top-28 p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                                Privacy Sections
                            </h3>
                            <nav className="space-y-2">
                                {privacyData.map((item, idx) => (
                                    <a
                                        key={item.id}
                                        href={`#privacy-${idx}`}
                                        className="block py-2 text-sm text-gray-500 hover:text-blue-600 transition-all font-medium"
                                    >
                                        {idx + 1}. {item.header}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-grow max-w-3xl">
                        <div className="space-y-20">
                            {privacyData.map((item, index) => (
                                <section
                                    id={`privacy-${index}`}
                                    key={item.id}
                                    className="relative pl-16 scroll-mt-32 group"
                                >
                                    {/* The Number Indicator */}
                                    <span
                                        className="absolute left-0 top-0 w-10 h-10 rounded-2xl flex items-center justify-center text-sm font-bold text-white shadow-md transition-all group-hover:rotate-6 group-hover:scale-110"
                                        style={{ backgroundColor: PRIMARY_BLUE }}
                                    >
                                        {index + 1}
                                    </span>

                                    <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                                        {item.header}
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {item.description}
                                    </p>
                                </section>
                            ))}
                        </div>

                        {/* Footer Note */}
                        <div className="mt-24 p-10 rounded-[3rem] bg-slate-900 text-white text-center">
                            <h3 className="text-2xl font-bold mb-4">Have questions about your data?</h3>
                            <p className="text-slate-400 mb-8 max-w-md mx-auto">
                                Our privacy team is ready to help. Reach out to us for data export
                                requests or privacy concerns.
                            </p>
                            <Link
                                to="/help-support"
                                className="inline-block px-8 py-4 rounded-2xl font-bold bg-white text-slate-900 hover:bg-blue-50 transition-colors"
                            >
                                Contact Privacy Team
                            </Link>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default PrivacyPolicy;