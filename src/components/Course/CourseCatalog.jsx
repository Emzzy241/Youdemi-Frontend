import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { COURSE_CATEGORIES } from './../../utils/constants';
import CourseCard from './CourseCard';
import Navbar from '../Navbar';
import Footer from '../Footer';
import CourseCTA from './CourseCTA';


const COURSE_CATALOG_URL = "https://youdemi-fullstack.onrender.com/api/v1/catalog";

const CourseCatalog = () => {

    const { categorySlug } = useParams();
    const [courses, setCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);


    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch(COURSE_CATALOG_URL);

                if (!response.ok) {
                    console.error("Failed to fetch courses.");
                    return;
                }

                const data = await response.json();
                console.log("API DATA:", data);
                setCourses(data.data);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };
        
        fetchCourses();
    }, []);
    
    useEffect(() => {
        console.log("courses state is now: ", courses);
    }, [courses]);

    useEffect(() => {
        if (!categorySlug) {
            setFilteredCourses(courses);
            return;
        }

        const categoryInfo = COURSE_CATEGORIES[categorySlug];

        console.log(categoryInfo);

        if (!categoryInfo) {
            setFilteredCourses([]);
            return;
        }

        const filtered = courses.filter(course =>
            categoryInfo.dbTags.some(tag =>
                course.tags?.includes(tag)
            )
        );

        setFilteredCourses(filtered);

    }, [categorySlug, courses]);

    // Determine the Title to display
    const pageTitle = COURSE_CATEGORIES[categorySlug]?.label || "All Courses";

    return (
        <React.Fragment>
            <Navbar />

            <div className="p-8">
                <h1 className="text-3xl font-bold mb-8 text-slate-900">
                    {pageTitle}
                </h1>

                {filteredCourses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredCourses.map(course => (
                            <CourseCard key={course._id} course={course} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-slate-50 rounded-lg">
                        <p className="text-slate-500 italic">
                            No courses found for this category yet.
                        </p>
                        <br />
                        <Link to="/catalog">Click to see all courses</Link>
                    </div>
                )}
            </div>

            <CourseCTA />

            <Footer />

        </React.Fragment>

    );
};
export default CourseCatalog;



// const CourseCatalog = ({ allCourses }) => {
//   const { categorySlug } = useParams();

//   // 1. Determine active category info
//   const categoryInfo = COURSE_CATEGORIES[categorySlug] || { label: 'All Courses', dbTags: [] };

//   // 2. Filter logic (specifically handles your "Startup & Company" requirement)
//   const filteredCourses = useMemo(() => {
//     if (!categorySlug) return allCourses;

//     return allCourses.filter(course =>
//       categoryInfo.dbTags.some(tag => course.tags.includes(tag))
//     );
//   }, [categorySlug, allCourses, categoryInfo]);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Breadcrumbs */}
//       <div className="px-6 py-4 flex items-center gap-2 text-sm text-slate-500">
//         <Link to="/" className="hover:text-[rgb(0,86,210)]">Home</Link>
//         <ChevronRight size={14} />
//         <span className="font-medium text-slate-800">{categoryInfo.label}</span>
//       </div>

//       <header className="px-6 py-8 border-b border-slate-100">
//         <div className="max-w-[1400px] mx-auto">
//           <h1 className="text-3xl font-bold text-slate-900 mb-2">
//             {categoryInfo.label} Courses
//           </h1>
//           <p className="text-slate-600 max-w-3xl">
//             Everything you need to master {categoryInfo.label.toLowerCase()}. Join over 5,000 students
//             learning from industry experts on Youdemi.
//           </p>
//         </div>
//       </header>

//       <main className="max-w-[1400px] mx-auto px-6 py-8">
//         <div className="flex flex-col lg:flex-row gap-8">

//           {/* Real-world Sidebar Filters */}
//           <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
//             <button className="flex items-center gap-2 border border-slate-900 px-4 py-2 font-bold text-sm lg:hidden">
//               <Filter size={16} /> Filter
//             </button>

//             <div className="hidden lg:block">
//               <h4 className="font-bold text-lg mb-4">Ratings</h4>
//               {[4.5, 4.0, 3.5].map(rate => (
//                 <label key={rate} className="flex items-center gap-2 mb-2 cursor-pointer group">
//                   <input type="checkbox" className="w-4 h-4 accent-slate-900" />
//                   <span className="text-sm text-slate-700 group-hover:underline">{rate} & up</span>
//                 </label>
//               ))}
//             </div>
//           </aside>

//           {/* Results Grid */}
//           <div className="flex-1">
//             <div className="flex justify-between items-center mb-6">
//               <span className="text-slate-500 text-sm font-bold">
//                 {filteredCourses.length} results
//               </span>
//               <div className="flex items-center gap-2">
//                 <span className="text-xs font-bold text-slate-900">Sort by</span>
//                 <select className="border-b border-slate-900 text-sm py-1 outline-none">
//                   <option>Most Relevant</option>
//                   <option>Newest</option>
//                   <option>Highest Rated</option>
//                 </select>
//               </div>
//             </div>



//             {filteredCourses.length > 0 ? (
//               <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-10">
//                 {filteredCourses.map(course => (
//                   <CourseCard key={course.id} course={course} />
//                 ))}
//               </div>
//             ) : (
//               <div className="py-20 text-center">
//                 <p className="text-slate-400">No courses found in this category yet.</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };
