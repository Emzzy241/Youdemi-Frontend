import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Navbar';
import Footer from './Footer';
import {SearchIcon, StarIcon, BookOpenIcon} from "./Icons"
import { PRIMARY_BLUE, PRIMARY_HOVER_BLUE, BG_LIGHT_BLUE } from "./Colors"
// // Simulating lucide-react icons using inline SVG for single-file compatibility

// --- Hero Section Component (Updated with Image) ---
const HeroSection = () => (
    <div 
        className="pt-16 pb-24 lg:pt-24 lg:pb-36 bg-cover bg-center" 
        style={{ 
            backgroundColor: BG_LIGHT_BLUE,
        }}
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
                
                {/* Text and Search Column (Left) */}
                <div className="lg:col-span-6 xl:col-span-7">
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                        Power Your Future with <span style={{ color: PRIMARY_BLUE }}>World-Class</span> Education
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-lg">
                        Access courses from leading universities and companies. Master in-demand skills in tech, business, and data science.
                    </p>
                    
                    {/* Search Bar */}
                    <form className="mt-8 flex shadow-xl rounded-xl overflow-hidden max-w-lg">
                        <div className="relative flex-grow">
                            <input
                                type="search"
                                placeholder="What do you want to learn today?"
                                className="w-full py-4 pl-5 pr-12 text-lg border-none focus:ring-4 focus:ring-opacity-50"
                                style={{ '--tw-ring-color': PRIMARY_BLUE, outline: 'none' }}
                            />
                            <button type="submit" className="absolute right-0 top-0 h-full w-12 text-gray-400 hover:text-gray-700 transition duration-150" aria-label="Search">
                                <SearchIcon />
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="flex items-center justify-center px-6 text-lg font-bold text-white transition duration-200"
                            style={{ backgroundColor: PRIMARY_BLUE }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = PRIMARY_HOVER_BLUE}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = PRIMARY_BLUE}
                        >
                            Search
                        </button>
                    </form>

                    {/* Trust Badges/Stats */}
                    <div className="mt-6 flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
                        <span className="flex items-center font-semibold">
                            4.8 <StarIcon /> Instructor Rating
                        </span>
                        <span className="hidden sm:inline-block">|</span>
                        <span className="flex items-center">
                            <BookOpenIcon color={PRIMARY_BLUE} />
                            <span className="ml-2">15,000+ Courses</span>
                        </span>
                    </div>
                </div>

                {/* Image Column (Right) */}
                <div className="mt-10 lg:mt-0 lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
                    <img 
                        className="w-full max-w-md lg:max-w-none rounded-2xl shadow-2xl object-cover"
                        src="/assets/images/student-virtual-learn.jpg"
                        alt="Illustration of a person learning on a laptop with charts and books"
                        // onError={(e) => e.target.src = "https://placehold.co/600x400/0056D2/FFFFFF?text=Online+Education"}
                    />
                </div>
            </div>
        </div>
    </div>
);

// --- Features/Value Proposition Component ---
const FeaturesSection = () => {
    const FEATURES = [
        { 
            title: "Expert Instructors", 
            description: "Learn from top professors and industry professionals from around the globe.", 
            icon: '🎓' 
        },
        { 
            title: "Flexible Learning", 
            description: "Study at your own pace, on any device, with lifetime access to materials.", 
            icon: '⏱️' 
        },
        { 
            title: "Sharpen Your Skills", 
            description: "Gain verifiable certificates and hands-on experience to advance your career.", 
            icon: '💼' 
        },
    ];

    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                        The Youdemi Advantage
                    </h2>
                    <p className="mt-3 text-xl text-gray-600">
                        Your skills deserve a world-class platform.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {FEATURES.map((feature, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg transition duration-300 hover:shadow-2xl text-center border-t-4" style={{ borderColor: PRIMARY_BLUE }}>
                            <div className="text-6xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- New Section 1: Categories Component ---
const CategoriesSection = () => {
    const CATEGORIES = [
        { title: "Web Development", icon: '💻', color: 'bg-green-100', hover: 'hover:bg-green-200' },
        { title: "Artificial Intelligence", icon: '🤖', color: 'bg-indigo-100', hover: 'hover:bg-indigo-200' },
        { title: "Data Science", icon: '📊', color: 'bg-red-100', hover: 'hover:bg-red-200' },
        { title: "Digital Marketing", icon: '📈', color: 'bg-yellow-100', hover: 'hover:bg-yellow-200' },
        { title: "Financial Modeling", icon: '💰', color: 'bg-purple-100', hover: 'hover:bg-purple-200' },
        { title: "Graphic Design", icon: '🎨', color: 'bg-pink-100', hover: 'hover:bg-pink-200' },
    ];

    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                        Top Learning Categories
                    </h2>
                    <p className="mt-3 text-xl text-gray-600">
                        Find the perfect path to elevate your career.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                    {CATEGORIES.map((category, index) => (
                        <div 
                            key={index} 
                            className={`p-6 rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.03] cursor-pointer text-center ${category.color} ${category.hover}`}
                        >
                            <div className="text-4xl mb-3">{category.icon}</div>
                            <p className="text-lg font-semibold text-gray-800">{category.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- New Section 2: Testimonials Component ---
const TestimonialsSection = () => {
    const TESTIMONIALS = [
        { 
            quote: "Youdemi transformed my career. The project-based learning prepared me perfectly for my first data science role!", 
            name: "Sarah K.", 
            course: "Data Science Bootcamp" 
        },
        { 
            quote: "The flexible schedule allowed me to upskill while working full-time. Highly recommend the courses on web development.", 
            name: "Mark T.", 
            course: "Full-Stack Development" 
        },
        { 
            quote: "World-class instructors and engaging content. I earned my certificate and immediately saw a raise at work.", 
            name: "Aisha R.", 
            course: "Advanced Finance" 
        },
    ];

    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                        Hear from Our Learners
                    </h2>
                    <p className="mt-3 text-xl text-gray-600">
                        Thousands of students are reaching their goals with Youdemi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-2xl border-t-8 border-gray-100" style={{ borderColor: PRIMARY_BLUE }}>
                            <div className="flex justify-center md:justify-start mb-4">
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>
                            <p className="mt-4 text-xl italic text-gray-700">"{t.quote}"</p>
                            <div className="mt-6 pt-4 border-t border-gray-100">
                                <p className="font-bold text-gray-900">{t.name}</p>
                                <p className="text-sm text-gray-500">{t.course}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

<Footer />


// // --- Footer Component ---
// const Footer = () => (
//     <footer className="bg-gray-800 text-white py-10 mt-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
//                 <div>
//                     <h4 className="text-xl font-bold mb-4" style={{ color: PRIMARY_BLUE }}>Youdemi</h4>
//                     <p className="text-sm text-gray-400">Master the world's most in-demand skills.</p>
//                 </div>
//                 <div className="space-y-2">
//                     <h5 className="font-semibold mb-2">Explore</h5>
//                     <Link to="/courses" className="block text-sm text-gray-400 hover:text-white">All Courses</Link>
//                     <Link to="/certificates" className="block text-sm text-gray-400 hover:text-white">Certificates</Link>
//                     <Link to="/business" className="block text-sm text-gray-400 hover:text-white">Youdemi for Business</Link>
//                 </div>
//                 <div className="space-y-2">
//                     <h5 className="font-semibold mb-2">Company</h5>
//                     <Link to="/about" className="block text-sm text-gray-400 hover:text-white">About Us</Link>
//                     <Link to="/blog" className="block text-sm text-gray-400 hover:text-white">Blog</Link>
//                     <Link to="/contact" className="block text-sm text-gray-400 hover:text-white">Contact</Link>
//                 </div>
//                 <div className="space-y-2">
//                     <h5 className="font-semibold mb-2">Legal</h5>
//                     <Link to="/terms" className="block text-sm text-gray-400 hover:text-white">Terms of Service</Link>
//                     <Link to="/privacy" className="block text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
//                 </div>
//                 <div className="flex justify-end col-span-2 md:col-span-1 md:justify-start">
//                     {/* Placeholder for social media icons */}
//                     <div className="flex space-x-4">
//                         <a href="#" className="text-gray-400 hover:text-white transition duration-150" aria-label="Facebook">FB</a>
//                         <a href="#" className="text-gray-400 hover:text-white transition duration-150" aria-label="Twitter">TW</a>
//                     </div>
//                 </div>
//             </div>
//             <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
//                 &copy; {new Date().getFullYear()} Youdemi, Inc. All rights reserved.
//             </div>
//         </div>
//     </footer>
// );

// --- Main Index Page Component ---
export default function IndexPage() {
    return (
        <div className="min-h-screen font-sans antialiased">
            <NavBar />
            <main>
                <HeroSection />
                <FeaturesSection />
                <CategoriesSection />
                <TestimonialsSection />
                
                {/* Call to Action Banner: Find your course */}
                <div className="py-16 bg-white border-t border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            Ready to Start Your Learning Journey?
                        </h2>
                        <p className="mt-3 text-lg text-gray-600">
                            Don't wait. Find the perfect course and register today!
                        </p>
                        <div className="mt-6 space-x-8">
                            <Link 
                                to="/auth/signup"
                                className="inline-block py-3 px-8 text-lg font-bold rounded-lg text-white shadow-xl transition duration-300 transform hover:scale-[1.05]"
                                style={{ backgroundColor: PRIMARY_BLUE }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = PRIMARY_HOVER_BLUE}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = PRIMARY_BLUE}
                            > 
                                Get Started Free
                            </Link>
                            <Link 
                                to="/courses"
                                className="inline-block py-3 px-8 text-lg font-bold rounded-lg border-2 text-gray-800 transition duration-300 hover:bg-gray-50 mt-8"
                                style={{ borderColor: PRIMARY_BLUE }}
                            >
                                Explore Courses
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
