import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Mock Data Structure
const ALL_COURSES = [
  { id: 1, title: 'React Mastery', category: 'programming-tech', description: "Best Course in the world.", price: 49.99, instructor: 'Jane Doe', rating: 4.8 },
  { id: 2, title: 'Data Science Bootcamp', category: 'data-science', description: "Best Course in the world.", price: 89.99, instructor: 'John Smith', rating: 4.9 },
  { id: 3, title: 'Starting your SaaS', category: 'startup-company', description: "Best Course in the world.", price: 59.99, instructor: 'Elon M.', rating: 4.7 },
  // ... add more for Accounting, Ecommerce, etc.
];

// Catalog endpoint for when a User visits the /course route.
const COURSE_CATALOG_URL = "https://youdemi-fullstack.onrender.com/api/v1/courses/catalog";
const Course = () => {
  const { categorySlug } = useParams(); // e.g., 'programming-tech'
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  
    // Map slugs to readable titles
    const categoryTitles = {
      'programming-tech': 'Programming & Tech',
      'data-science': 'Data Science',
      'finance-business': 'Finance & Business',
      'arts-humanities': 'Arts & Humanities',
      'startup-company': 'Startup & Company',
      'software-development': 'Software Development',
      'accounting': 'Accounting',
      'ecommerce': 'Ecommerce'
    };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(COURSE_CATALOG_URL);
        if (!response.ok) {
          console.error("Failed to fetch courses.");
          return;
        }

        const data = await response.json();
        console.log(data);

        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses: ", error)
      }
    };

    fetchCourses();
  }, []);

  // Another COurse Endpoint would be needed once User Signs in

  useEffect(() => {
    if (categorySlug) {
      const filtered = courses.filter(course => course.category === categorySlug);
      setFilteredCourses(filtered);
    } else {
      setFilteredCourses(courses);
    }
  }, [categorySlug, courses]);

  return (
    <div className="min-h-screen bg-youdemi-bg">
      {/* Header Section */}
      <header className="bg-white border-b border-gray-200 py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {categoryTitles[categorySlug] || "All Courses"}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Explore the best {categoryTitles[categorySlug]} courses on Youdemi.
            From beginner to advanced, we have you covered.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-10 flex gap-8">
        {/* Sidebar Filters - Classic LMS Look */}
        <aside className="w-64 hidden md:block">
          <h3 className="font-bold text-lg mb-4">Ratings</h3>
          {/* Add Rating Filter Checkboxes here */}
          <h3 className="font-bold text-lg mt-8 mb-4">Price</h3>
          {/* Add Price Filter Checkboxes here */}
        </aside>

        {/* Course Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-700 font-semibold">{filteredCourses.length} results</p>
            <select className="border p-2 rounded-md">
              <option>Most Relevant</option>
              <option>Newest</option>
              <option>Highest Rated</option>
            </select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
// const Course = () => {

//   const { categorySlug } = useParams(); // e.g., 'programming-tech'
//   const [filteredCourses, setFilteredCourses] = useState([]);

//   // Map slugs to readable titles
//   const categoryTitles = {
//     'programming-tech': 'Programming & Tech',
//     'data-science': 'Data Science',
//     'finance-business': 'Finance & Business',
//     'arts-humanities': 'Arts & Humanities',
//     'startup-company': 'Startup & Company',
//     'software-development': 'Software Development',
//     'accounting': 'Accounting',
//     'ecommerce': 'Ecommerce'
//   };

//   useEffect(() => {
//     if (categorySlug) {
//       const filtered = ALL_COURSES.filter(course => course.category === categorySlug);
//       setFilteredCourses(filtered);
//     } else {
//       setFilteredCourses(ALL_COURSES);
//     }
//   }, [categorySlug]);

//   return (
//     <div className="min-h-screen bg-youdemi-bg">
//       {/* Header Section */}
//       <header className="bg-white border-b border-gray-200 py-12 px-8">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             {categoryTitles[categorySlug] || "All Courses"}
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl">
//             Explore the best {categoryTitles[categorySlug]} courses on Youdemi.
//             From beginner to advanced, we have you covered.
//           </p>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-8 py-10 flex gap-8">
//         {/* Sidebar Filters - Classic LMS Look */}
//         <aside className="w-64 hidden md:block">
//           <h3 className="font-bold text-lg mb-4">Ratings</h3>
//           {/* Add Rating Filter Checkboxes here */}
//           <h3 className="font-bold text-lg mt-8 mb-4">Price</h3>
//           {/* Add Price Filter Checkboxes here */}
//         </aside>

//         {/* Course Grid */}
//         <div className="flex-1">
//           <div className="flex justify-between items-center mb-6">
//             <p className="text-gray-700 font-semibold">{filteredCourses.length} results</p>
//             <select className="border p-2 rounded-md">
//               <option>Most Relevant</option>
//               <option>Newest</option>
//               <option>Highest Rated</option>
//             </select>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
//             {filteredCourses.map(course => (
//               <CourseCard key={course.id} course={course} />
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// Reusable Course Card


const CourseCard = ({ course }) => (
  <div className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden group">
    <div className="h-40 bg-gray-300" /> {/* Placeholder for Course Image */}
    <div className="p-4">
      <h4 className="font-bold text-lg text-gray-900 group-hover:text-youdemi-blue leading-tight mb-1">
        {course.title}
      </h4>
      <p className="text-sm text-gray-500 mb-2">{course.instructor}</p>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-yellow-600 font-bold">{course.rating}</span>
        <span className="text-gray-400 text-xs">★★★★★</span>
      </div>
      <p className="font-bold text-xl">${course.price}</p>
      <button className="mt-4 w-full bg-youdemi-blue hover:bg-youdemi-blue-dark text-white py-2 rounded font-semibold transition-colors">
        View Course
      </button>
    </div>
  </div>
);

export default Course;