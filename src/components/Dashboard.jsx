import React, { useEffect, useState } from "react";
// Assuming lucide-react or similar icons library is available
// Using inline SVGs to ensure compatibility in the single file context
// If using a library, replace these with actual imports like:
// import { Bell, CheckCircle, GraduationCap, Clock, BarChart3, ChevronRight, X, UserCheck } from 'lucide-react';

// --- Icon Definitions (Simulating lucide-react icons using inline SVG) ---
const Icon = ({ children, className = "w-5 h-5" }) => (
    <div className={className}>{children}</div>
);

const UserCheck = () => (
    <Icon className="w-5 h-5 text-green-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg></Icon>
);

const GraduationCap = ({ className = "w-6 h-6" }) => (
    <Icon className={className}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M12 22V10"/><path d="M12 18V10"/></svg></Icon>
);

const Clock = ({ className = "w-6 h-6" }) => (
    <Icon className={className}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></Icon>
);

const BarChart3 = ({ className = "w-6 h-6" }) => (
    <Icon className={className}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg></Icon>
);

const ChevronRight = () => (
    <Icon className="w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></Icon>
);

const X = ({ onClick }) => (
    <Icon className="w-5 h-5 cursor-pointer" onClick={onClick}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></Icon>
);

// --- Constants and Mock Data ---
const PRIMARY_BLUE = 'rgb(0, 86, 210)';
const PRIMARY_HOVER_BLUE = 'rgb(0, 68, 168)';
const BG_LIGHT_BLUE = 'rgb(240, 248, 255)';

const MOCK_STATS = [
    { title: "Courses Enrolled", value: 5, icon: GraduationCap, color: 'text-indigo-500', bgColor: 'bg-indigo-100' },
    { title: "Hours Spent", value: "42.5h", icon: Clock, color: 'text-orange-500', bgColor: 'bg-orange-100' },
    { title: "Overall Progress", value: "75%", icon: BarChart3, color: 'text-green-500', bgColor: 'bg-green-100' },
];

const MOCK_LATEST_COURSES = [
    { id: 1, title: 'React & Tailwind Masterclass', instructor: 'Jane Doe', progress: 65, imageUrl: 'https://placehold.co/400x200/4F46E5/FFFFFF?text=React' },
    { id: 2, title: 'Node.js Backend Development', instructor: 'John Smith', progress: 82, imageUrl: 'https://placehold.co/400x200/06B6D4/FFFFFF?text=Node.js' },
    { id: 3, title: 'Advanced Data Structures (Python)', instructor: 'Alice Brown', progress: 12, imageUrl: 'https://placehold.co/400x200/F97316/FFFFFF?text=Python' },
];

// --- Custom Components ---

const StatCard = ({ title, value, icon: IconComponent, color, bgColor }) => (
    <div className="p-5 bg-white rounded-xl shadow-lg transition duration-300 hover:shadow-xl border border-gray-100">
        <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-full ${bgColor} ${color}`}>
                <IconComponent className="w-6 h-6" />
            </div>
            <div>
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <p className="text-3xl font-bold text-gray-900">{value}</p>
            </div>
        </div>
    </div>
);

const CourseCard = ({ title, instructor, progress, imageUrl }) => {
    const progressWidth = `${progress}%`;
    const progressColor = progress < 50 ? 'bg-orange-500' : 'bg-green-500';

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col transition duration-300 hover:shadow-xl hover:scale-[1.01]">
            {/* Image/Placeholder */}
            <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-36 object-cover" 
                onError={(e) => {
                    // Fallback to a styled placeholder on error
                    e.target.onerror = null; 
                    e.target.style.display = 'none'; 
                    e.target.parentNode.style.minHeight = '9rem';
                    e.target.parentNode.style.backgroundColor = PRIMARY_BLUE;
                    e.target.parentNode.style.color = 'white';
                    e.target.parentNode.innerHTML = `<div class="h-full flex items-center justify-center text-xl font-bold">${title}</div>`;
                }}
            />

            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-600 mb-3">By {instructor}</p>

                {/* Progress Bar */}
                <div className="mt-auto pt-2">
                    <div className="flex justify-between items-center text-sm mb-1">
                        <span className="font-medium text-gray-700">Progress</span>
                        <span className="font-semibold" style={{ color: PRIMARY_BLUE }}>{progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                            className={`h-2.5 rounded-full transition-all duration-500 ${progressColor}`} 
                            style={{ width: progressWidth }}
                        ></div>
                    </div>
                </div>

                {/* Action Button */}
                <button 
                    className="mt-4 w-full flex items-center justify-center py-2 text-white text-sm font-semibold rounded-lg transition duration-200"
                    style={{ backgroundColor: PRIMARY_BLUE }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = PRIMARY_HOVER_BLUE}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = PRIMARY_BLUE}
                >
                    Continue Course
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};


// --- Main Dashboard Component ---
export default function Dashboard() {
    const [userName, setUserName] = useState('New User');
    const [isVerified, setIsVerified] = useState(false);
    const [showVerificationAlert, setShowVerificationAlert] = useState(true);

    useEffect(() => {
        // Retrieve and parse user data
        const storedUser = localStorage.getItem('user');
        
        if (storedUser) {
            try {
                const userObject = JSON.parse(storedUser);
                
                // Use a default name if userObject.name is not available or is null/undefined
                setUserName(userObject.name || userObject.email.split('@')[0] || 'Learner');
                setIsVerified(userObject.verified === true);
            } catch (error) {
                console.error("Failed to parse user data from localStorage", error);
            }
        }
    }, []);

    // Verification Alert Component
    const VerificationAlert = () => {
        if (isVerified || !showVerificationAlert) return null;

        return (
            <div 
                className="w-full p-4 mb-8 rounded-xl shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between transition-all duration-500"
                style={{ backgroundColor: BG_LIGHT_BLUE, borderLeft: `6px solid ${PRIMARY_BLUE}` }}
            >
                <div className="flex items-start">
                    <div className="text-2xl mr-4" style={{ color: PRIMARY_BLUE }}>
                        {/* Exclamation Mark Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Account Verification Required</h3>
                        <p className="text-sm text-gray-600 mt-1">
                            Your account is unverified. Please check your email and click the verification link to unlock all features.
                        </p>
                    </div>
                </div>
                <div className="mt-3 md:mt-0 flex items-center space-x-4">
                    <a 
                        href="/verified" // Placeholder for the verification link route
                        className="py-2 px-4 text-sm font-semibold rounded-lg text-white transition duration-200 shadow-md"
                        style={{ backgroundColor: PRIMARY_BLUE }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = PRIMARY_HOVER_BLUE}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = PRIMARY_BLUE}
                    >
                        Verify Account Now
                    </a>
                    <X onClick={() => setShowVerificationAlert(false)} />
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            
            {/* --- Navigation Bar --- */}
            <header className="sticky top-0 z-10 bg-white border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="text-2xl font-extrabold" style={{ color: PRIMARY_BLUE }}>
                        Youdemi
                    </div>
                    <nav className="flex items-center space-x-6">
                        <a href="/courses" className="text-gray-600 hover:text-gray-900 transition duration-150">Courses</a>
                        <a href="/certificates" className="text-gray-600 hover:text-gray-900 transition duration-150 hidden sm:inline">Certificates</a>
                        <a href="/settings" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition duration-150">
                            {/* Bell Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.375 22a2 2 0 0 0 3.25 0"/></svg>
                        </a>
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold text-white uppercase text-lg cursor-pointer transition-all duration-300 hover:ring-2" style={{ backgroundColor: PRIMARY_BLUE }}>
                            {userName.charAt(0)}
                        </div>
                    </nav>
                </div>
            </header>

            {/* --- Main Content Container --- */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* --- Welcome Header and Verification Status --- */}
                <div className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end">
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                            Hello, <span style={{ color: PRIMARY_BLUE }}>{userName}</span>
                        </h1>
                        <p className="mt-2 text-xl text-gray-600">
                            Welcome back! Your path to mastery awaits.
                        </p>
                    </div>
                    <div className="mt-4 sm:mt-0 flex items-center space-x-2 text-lg font-semibold">
                        {isVerified ? (
                            <span className="text-green-600 flex items-center">
                                <UserCheck />
                                <span className="ml-2">Verified Account</span>
                            </span>
                        ) : (
                            <span className="text-orange-500 flex items-center">
                                {/* Alert Triangle Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-9-15-9 15z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                                <span className="ml-2">Unverified</span>
                            </span>
                        )}
                    </div>
                </div>

                {/* --- Verification Alert --- */}
                <VerificationAlert />

                {/* --- Statistics Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {MOCK_STATS.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>

                {/* --- Continue Learning Section --- */}
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">
                    <span style={{ color: PRIMARY_BLUE }}>Continue</span> Learning
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MOCK_LATEST_COURSES.map((course) => (
                        <CourseCard key={course.id} {...course} />
                    ))}
                </div>

                {/* --- Call to Action: Explore More --- */}
                <div className="mt-12 text-center p-10 rounded-xl shadow-lg" style={{ backgroundColor: BG_LIGHT_BLUE }}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready for the Next Challenge?</h3>
                    <p className="text-gray-700 mb-6">
                        Explore thousands of courses in Technology, Business, and Arts.
                    </p>
                    <a 
                        href="/browse"
                        className="inline-flex items-center py-3 px-6 text-lg font-bold rounded-lg text-white transition duration-200 shadow-xl"
                        style={{ backgroundColor: PRIMARY_BLUE }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = PRIMARY_HOVER_BLUE}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = PRIMARY_BLUE}
                    >
                        Browse All Courses
                        <ChevronRight />
                    </a>
                </div>

            </main>
        </div>
    );
}












// import { useEffect, useState } from "react"

// export default function Dashboard() {
//     const [userName, setUserName] = useState('');
//     const [isVerified, setIsVerified] = useState(false);

//     useEffect(() => {
//         // Retrieve the user data from localStorage
//         const storedUser = localStorage.getItem('user');

//         if (storedUser) {
//             try {
//                 const userObject = JSON.parse(storedUser);
//                 if (userObject.name) {
//                     setUserName(userObject.name);
//                 }

//                 if (userObject.verified) {
//                     setIsVerified(true)
//                 }
//             } catch (error) {
//                 console.error("Failed to parse user data from localStorage", error);
//             }
//         }
//     }, []);

//     return (
//         <div>
//             <h1>Dashboard</h1>
//             {
//                 userName ? (
//                     <h2>Hello, <span className="name_color">{userName}</span></h2>
//                 ) : (
//                     <h2>Hello, User</h2>
//                 )}
//             <p>Welcome to your dashboard</p>
//             <br />
//             <br />
//             <br />
//             {
//                 isVerified ? (
//                     <h2>Hello, You  are a verified User</h2>
//                 ) : (
//                     <>
//                         <h2>Hey there, you are unverified, click the button below to get verified</h2>
//                         <a href="/verified">Verify account now</a>

//                     </>
//                 )
//             }


//             {/* <h2>Welcome, {user.email}</h2> */}
//         </div>
//     )
// }