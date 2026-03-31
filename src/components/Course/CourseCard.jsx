import { Star } from 'lucide-react';

const CourseCard = ({ course }) => {
  return (
    <div className="group cursor-pointer flex flex-col h-full bg-white border border-slate-200 hover:shadow-md transition-all duration-200">
      <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
        <img 
          src={course.image || 'https://via.placeholder.com/300x180'} 
          alt={course.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        {course.isBestseller && (
          <span className="absolute top-2 left-2 bg-[#eceb98] text-[#3d3c0a] text-[10px] font-bold px-2 py-1 shadow-sm">
            Bestseller
          </span>
        )}
      </div>
      
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="font-bold text-[15px] leading-tight text-slate-900 line-clamp-2 mb-1 group-hover:text-[rgb(0,86,210)]">
          {course.title}
        </h3>
        <p className="text-xs text-slate-500 mb-1">{course.instructor}</p>
        
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[13px] font-bold text-[#b4690e]">{course.rating}</span>
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill={i < Math.floor(course.rating) ? "currentColor" : "none"} />
            ))}
          </div>
          <span className="text-[11px] text-slate-400">({course.reviewsCount.toLocaleString()})</span>
        </div>
        
        <div className="mt-auto pt-2 flex items-center gap-2">
          <span className="font-bold text-lg">${course.price}</span>
          {course.oldPrice && (
            <span className="text-sm text-slate-400 line-through">${course.oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;