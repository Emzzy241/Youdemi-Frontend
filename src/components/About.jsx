import Navbar from "./Navbar"
import Footer from "./Footer"
import { PRIMARY_BLUE, PRIMARY_HOVER_BLUE, BG_LIGHT_BLUE } from "./Colors"
import { UserIcon, GlobeIcon, ZapIcon } from "./Icons";

export default function About() {

    const StatsData = [
        { icon: UserIcon, number: '65M+', label: 'Active Learners' },
        { icon: GlobeIcon, number: '180+', label: 'Countries Represented' },
        { icon: ZapIcon, number: '24/7', label: 'Access to Expertise' },
    ];


    return (
        <div>
            <Navbar />
            {/* 
            <h2>Welcome to the About Page</h2>
            <a href="/" >Click to go back to Home Page</a> */}
            <main className="flex-grow">
                {/* 1. Hero Section - Mission & Vision */}
                <section className="py-20" style={{ backgroundColor: BG_LIGHT_BLUE }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                            Powering the Future of Learning
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our mission is simple: to make world-class education accessible to everyone, everywhere. We believe that learning is the foundation of human progress.
                        </p>
                    </div>
                </section>

                {/* 2. Key Statistics Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            {StatsData.map((stat, index) => (
                                <div key={index} className="p-8 border rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
                                    <stat.icon className="mx-auto mb-4" style={{ color: PRIMARY_BLUE }} />
                                    <div className="text-5xl font-bold mb-1" style={{ color: PRIMARY_BLUE }}>{stat.number}</div>
                                    <p className="text-lg font-medium text-gray-700">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Our Story / Values Section */}
                <section className="py-20" style={{ backgroundColor: BG_LIGHT_BLUE }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="lg:order-2">
                            {/* Placeholder Image or Graphic */}
                            <div
                                className="bg-gray-300 w-full h-80 rounded-2xl shadow-xl flex items-center justify-center text-gray-500 font-bold text-xl"
                            >
                                <img
                                    className="w-full max-w-md lg:max-w-none rounded-2xl shadow-2xl object-cover"
                                    src="/assets/images/founders.jpg"
                                    alt="Illustration of a person learning on a laptop with charts and books"
                                // onError={(e) => e.target.src = "https://placehold.co/600x400/0056D2/FFFFFF?text=Online+Education"}
                                />

                            </div>
                        </div>
                        <div className="lg:order-1">
                            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
                                Why We Built Youdemi
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Founded in 2015 by a team of educators and technologists, Youdemi was born from the belief that access to skill development shouldn't be limited by geography or cost. We created a platform to connect the world's experts with motivated students.
                            </p>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-3 p-1 rounded-full text-white flex-shrink-0" style={{ backgroundColor: PRIMARY_BLUE }}>✓</span>
                                    **Accessibility:** Learning should be available anytime, anywhere.
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 p-1 rounded-full text-white flex-shrink-0" style={{ backgroundColor: PRIMARY_BLUE }}>✓</span>
                                    **Quality:** Curated content taught by verified industry professionals.
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 p-1 rounded-full text-white flex-shrink-0" style={{ backgroundColor: PRIMARY_BLUE }}>✓</span>
                                    **Impact:** Focused on delivering tangible career and life outcomes.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 4. CTA Footer */}
                <section className="py-12 bg-gray-900 text-white text-center">
                    <h3 className="text-3xl font-bold mb-3">
                        Ready to Start Your Journey?
                    </h3>
                    <p className="mb-6 text-gray-300">
                        Join millions of learners transforming their lives and careers with Youdemi.
                    </p>
                    <a href="#"
                        className="inline-block py-3 px-8 text-lg font-semibold rounded-lg shadow-xl transition duration-300 transform hover:scale-105"
                        style={{ backgroundColor: PRIMARY_BLUE, color: 'white' }}
                    >
                        Explore Courses
                    </a>
                </section>
            </main>
            <Footer />
        </div>
    )
}