import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Navbar';
import Footer from './Footer';
import {SearchIcon, MenuIcon, XIcon, ChevronDown, StarIcon, BookOpenIcon} from "./Icons"
import { PRIMARY_BLUE, PRIMARY_HOVER_BLUE, BG_LIGHT_BLUE } from "./Colors"
// // Simulating lucide-react icons using inline SVG for single-file compatibility

// // --- Constants (Matching the Sign In/Dashboard theme) ---
// const PRIMARY_BLUE = 'rgb(0, 86, 210)';
// const PRIMARY_HOVER_BLUE = 'rgb(0, 68, 168)';
// const BG_LIGHT_BLUE = 'rgb(240, 248, 255)';

// const SearchIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
// );
// const MenuIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
// );
// const XIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
// );
// const ChevronDown = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
// );
// const StarIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="gold" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
// );
// const BookOpenIcon = ({ color = 'currentColor' }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 19.5c0 .32 0 .52.1.72s.22.42.4.6.46.3.8.3H20c.34 0 .68-.1.8-.3s.3-.38.4-.6c.1-.2.1-.4.1-.72V5.5c0-.32 0-.52-.1-.72s-.22-.42-.4-.6-.46-.3-.8-.3H5c-.34 0-.68.1-.8.3s-.3.38-.4.6c-.1.2-.1.4-.1.72v14z"/><line x1="6" y1="12" x2="20" y2="12"/></svg>
// );


// // --- Navigation Sub-Menu Data ---
// const COURSES_MENU = [
//     { name: 'Programming & Tech', href: '#' },
//     { name: 'Data Science', href: '#' },
//     { name: 'Finance & Business', href: '#' },
//     { name: 'Arts & Humanities', href: '#' },
// ];
// const HOW_IT_WORKS_MENU = [
//     { name: 'Become a Student', href: '#' },
//     { name: 'Teach on Youdemi', href: '#' },
//     { name: 'For Business', href: '#' },
// ];

// // --- Dropdown Menu Component ---
// const DropdownMenu = ({ title, items }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div className="relative">
//             <button
//                 className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 rounded-lg transition duration-150 text-base"
//                 onClick={() => setIsOpen(!isOpen)}
//                 aria-expanded={isOpen}
//             >
//                 {title}
//                 <ChevronDown />
//             </button>
//             {isOpen && (
//                 <div 
//                     className="absolute z-20 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
//                     onMouseLeave={() => setIsOpen(false)}
//                 >
//                     {items.map((item, index) => (
//                         <Link
//                             key={index}
//                             to={item.href}
//                             className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition duration-150"
//                         >
//                             {item.name}
//                         </Link>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// // --- Navbar Component ---
// const NavBar = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     return (
//         <header className="sticky top-0 z-20 bg-white border-b border-gray-100 shadow-md">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                
//                 {/* Logo */}
//                 <Link to="/" className="text-3xl font-extrabold tracking-tight" style={{ color: PRIMARY_BLUE }}>
//                     Youdemi
//                 </Link>

//                 {/* Desktop Navigation */}
//                 <nav className="hidden lg:flex items-center space-x-6">
//                     <DropdownMenu title="Courses" items={COURSES_MENU} />
//                     <DropdownMenu title="How Youdemi Works" items={HOW_IT_WORKS_MENU} />
//                     <Link to="/blog" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-lg transition duration-150 text-base">Blog</Link>
//                     <Link to="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-lg transition duration-150 text-base">Contact</Link>
//                 </nav>

//                 {/* Action Buttons & Search (Desktop) */}
//                 <div className="hidden lg:flex items-center space-x-4">
//                     <button 
//                         className="p-2 rounded-full text-gray-700 hover:bg-gray-100 transition duration-150" 
//                         aria-label="Search"
//                     >
//                         <SearchIcon />
//                     </button>
//                     <Link 
//                         to="/auth/signIn"
//                         className="py-2 px-4 text-base font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition duration-150 text-gray-800"
//                     >
//                         Sign In
//                     </Link>
//                     <Link 
//                         to="/auth/signUp"
//                         className="py-2 px-4 text-base font-semibold rounded-lg text-white transition duration-150 shadow-md"
//                         style={{ backgroundColor: PRIMARY_BLUE }}
//                         onMouseEnter={(e) => e.currentTarget.style.backgroundColor = PRIMARY_HOVER_BLUE}
//                         onMouseLeave={(e) => e.currentTarget.style.backgroundColor = PRIMARY_BLUE}
//                     >
//                         Sign Up
//                     </Link>
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <button
//                     className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition duration-150"
//                     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                     aria-label="Open Menu"
//                 >
//                     {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
//                 </button>
//             </div>

//             {/* Mobile Menu Content (Simplified) */}
//             {isMobileMenuOpen && (
//                 <div className="lg:hidden bg-white px-4 pb-4 border-t border-gray-100 shadow-inner">
//                     <nav className="flex flex-col space-y-2 pt-4">
//                         <Link to="/" className="block py-2 text-gray-700 font-semibold hover:bg-gray-50 rounded-md">Home</Link>
//                         {COURSES_MENU.map((item, index) => (
//                             <Link key={index} to={item.href} className="block pl-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md text-sm">{item.name}</Link>
//                         ))}
//                         <Link to="/contact" className="block py-2 text-gray-700 font-semibold hover:bg-gray-50 rounded-md">Contact</Link>
//                     </nav>
//                     <div className="flex flex-col space-y-3 mt-5">
//                         <Link 
//                             to="/auth/signIn"
//                             className="text-center py-2 px-4 font-semibold rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-50"
//                         >
//                             Sign In
//                         </Link>
//                         <Link 
//                             to="/auth/signUp"
//                             className="text-center py-2 px-4 font-semibold rounded-lg text-white"
//                             style={{ backgroundColor: PRIMARY_BLUE }}
//                         >
//                             Sign Up
//                         </Link>
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// };

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
