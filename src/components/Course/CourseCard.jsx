import { Star } from 'lucide-react';

const CourseCard = ({ course }) => {
  return (
    <div className="group cursor-pointer flex flex-col h-full bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">

      {/* IMAGE */}
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={course.image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"}
          alt={course.title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Bestseller badge */}
        {course.isBestSeller && (
          <span className="absolute top-3 left-3 bg-yellow-300 text-yellow-900 text-xs font-semibold px-2 py-1 rounded-md shadow">
            Bestseller
          </span>
        )}

        {/* Optional category */}
        {course.category && (
          <span className="absolute bottom-3 left-3 bg-white/90 text-xs font-medium px-2 py-1 rounded">
            {course.category}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col flex-grow space-y-2">

        {/* Title */}
        <h3 className="font-semibold text-base text-slate-900 leading-snug line-clamp-2 group-hover:text-blue-600 transition">
          {course.title}
        </h3>

        {/* Instructor */}
        <p className="text-xs text-slate-500">
          {course.instructor}
        </p>

        {/* Description */}
        <p className="text-sm text-slate-600 line-clamp-2">
          {course.description || "No description available for this course."}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm">
          <span className="font-semibold text-amber-600">
            {course.rating}
          </span>

          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < Math.floor(course.rating) ? "currentColor" : "none"}
                strokeWidth={1.5}
              />
            ))}
          </div>

          <span className="text-xs text-slate-400">
            ({course.reviewsCount})
          </span>
        </div>

        {/* PRICE */}
        <div className="mt-auto flex items-center gap-2 pt-3">
          <span className="font-bold text-xl text-slate-900">
            ${course?.newPrice?.$numberDecimal}
          </span>

          {course?.oldPrice?.$numberDecimal && (
            <span className="text-sm text-slate-400 line-through">
              ${course.oldPrice.$numberDecimal}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;