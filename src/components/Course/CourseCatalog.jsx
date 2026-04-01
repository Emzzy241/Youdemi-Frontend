// src/pages/CourseCatalog.jsx
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { COURSE_CATEGORIES } from './../../utils/constants';
import CourseCard from './CourseCard';
import { MOCK_COURSES } from './CourseData';
import Navbar from '../Navbar';
import Footer from '../Footer';

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

const CourseCatalog = () => {

    const { categorySlug } = useParams();

    const filteredCourses = useMemo(() => {
        // 1. If there is no slug (URL is just /catalog), show everything
        if (!categorySlug) return MOCK_COURSES;

        // 2. Look up the category info
        const categoryInfo = COURSE_CATEGORIES[categorySlug];

        // 3. If the slug isn't in our list, return an empty array (or MOCK_COURSES)
        if (!categoryInfo) {
            console.warn(`Category "${categorySlug}" not found in constants.`);
            return [];
        }

        // 4. Filter the courses based on tags
        return MOCK_COURSES.filter(course =>
            // Does the course have ANY tag that matches the category's dbTags?
            categoryInfo.dbTags.some(tag => course.tags?.includes(tag))
        );
    }, [categorySlug]);

    // Determine the Title to display
    const pageTitle = COURSE_CATEGORIES[categorySlug]?.label || "All Courses";

    return (
        <React.Fragment>
            <Navbar />

            <div className="p-8">
                <h1 className="text-3xl font-bold mb-8 text-slate-900">{pageTitle}</h1>

                {filteredCourses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredCourses.map(course => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-slate-50 rounded-lg">
                        <p className="text-slate-500 italic">No courses found for this category yet.</p>
                        <br />
                        <br />
                        <Link to="/catalog" className="color-[#ababab]">Click to see all courses</Link>
                    </div>
                )}
            </div>

            <Footer />

        </React.Fragment>

    );
};
export default CourseCatalog;