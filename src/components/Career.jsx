import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const PRIMARY_BLUE = 'rgb(0, 86, 210)';
const BG_LIGHT_BLUE = 'rgb(240, 248, 255)';

const Career = () => {
    const openings = [
        { title: "Senior Frontend Engineer", type: "Remote", dept: "Engineering" },
        { title: "Learning Content Specialist", type: "Hybrid", dept: "Education" },
        { title: "Product Designer", type: "Remote", dept: "Design" },
    ];

    return (
        <React.Fragment>
            <Navbar />
            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="py-20 text-center" style={{ backgroundColor: BG_LIGHT_BLUE }}>
                    <div className="max-w-3xl mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                            Build the future of <span style={{ color: PRIMARY_BLUE }}>Learning</span>
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We're looking for passionate minds to help us democratize world-class education.
                            Join a team that values curiosity, diversity, and impact.
                        </p>
                    </div>
                </section>

                {/* Jobs List */}
                <section className="max-w-5xl mx-auto py-16 px-4">
                    <h2 className="text-2xl font-bold mb-8 text-gray-800">Current Openings</h2>
                    <div className="grid gap-4">
                        {openings.map((job, index) => (
                            <div
                                key={index}
                                className="group flex flex-col md:flex-row md:items-center justify-between p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 bg-white"
                            >
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-blue-500">{job.dept}</span>
                                    <h3 className="text-xl font-bold text-gray-900 mt-1">{job.title}</h3>
                                    <p className="text-gray-500 text-sm mt-1">{job.type} • Full-time</p>
                                </div>
                                <button
                                    className="mt-4 md:mt-0 px-6 py-2 rounded-full font-semibold border-2 transition-colors"
                                    style={{ borderColor: PRIMARY_BLUE, color: PRIMARY_BLUE }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = PRIMARY_BLUE;
                                        e.currentTarget.style.color = 'white';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.style.color = PRIMARY_BLUE;
                                    }}
                                >
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Career;
