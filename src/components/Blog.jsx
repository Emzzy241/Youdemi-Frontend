import React, { useState } from 'react';

// --- Constants (Matching the Sign In/Dashboard theme) ---
const PRIMARY_BLUE = 'rgb(0, 86, 210)';
const PRIMARY_HOVER_BLUE = 'rgb(0, 68, 168)';
const BG_LIGHT_BLUE = 'rgb(240, 248, 255)';

// --- Icon Definitions (Simplified for single-file compatibility) ---
const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
// A simple "Link" placeholder since actual routing isn't used in a standalone component
const DummyLink = ({ children, to, className, style, onClick }) => (
    <button onClick={onClick} className={className} style={style}>{children}</button>
);

// --- Mock Blog Data ---
const BLOG_POSTS = [
    { id: 1, title: "The Future of AI in Education: Personalized Learning Paths", category: "Technology", date: "Oct 1, 2024", readTime: "7 min read", author: "Dr. Elena V.", featured: true, image: "https://placehold.co/800x400/0056D2/FFFFFF?text=AI+Future+of+Education", excerpt: "Artificial intelligence is reshaping how we learn and teach, creating personalized paths for every student. Discover the new frontier of online education." },
    { id: 2, title: "Mastering React Hooks: Beyond useState and useEffect", category: "Web Development", date: "Sep 28, 2024", readTime: "5 min read", author: "Alex J.", featured: false, image: "https://placehold.co/400x250/007FFF/FFFFFF?text=React+Hooks", excerpt: "Unlock the full potential of functional components by diving into custom hooks, useMemo, and useCallback for performance optimization." },
    { id: 3, title: "Data Science Ethics: A Guide for Beginners", category: "Data Science", date: "Sep 25, 2024", readTime: "10 min read", author: "Dr. Liam K.", featured: false, image: "https://placehold.co/400x250/4B0082/FFFFFF?text=Data+Ethics", excerpt: "As data becomes central to decision-making, understanding the ethical implications of your models is crucial. Start building responsibly." },
    { id: 4, title: "The Power of Financial Literacy: Why Everyone Needs It", category: "Finance & Business", date: "Sep 20, 2024", readTime: "6 min read", author: "Sarah M.", featured: false, image: "https://placehold.co/400x250/228B22/FFFFFF?text=Financial+Literacy", excerpt: "From budgeting to investing, financial knowledge is key to security and growth. Learn the basics to take control of your future." },
    { id: 5, title: "Designing for Accessibility: Tips for UX/UI Designers", category: "Design", date: "Sep 15, 2024", readTime: "8 min read", author: "Maya P.", featured: false, image: "https://placehold.co/400x250/FF4500/FFFFFF?text=UX+Design", excerpt: "Creating inclusive experiences is not just good practice, it's essential. Implement these five key accessibility tips today." },
    { id: 6, title: "Getting Started with Python: Your First Project", category: "Programming", date: "Sep 10, 2024", readTime: "4 min read", author: "David L.", featured: false, image: "https://placehold.co/400x250/FFD700/000000?text=Python+Project", excerpt: "Ready to code? This guide walks you through setting up your environment and building your first practical Python program." },
];


// --- Blog Post Card Component (Internal Helper) ---
const BlogPostCard = ({ post }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 transform hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
        <img 
            className="w-full h-48 object-cover" 
            src={post.image} 
            alt={`Cover for ${post.title}`} 
            onError={(e) => e.target.src = "https://placehold.co/400x250/AAAAAA/FFFFFF?text=Article+Image"}
        />
        <div className="p-6">
            <span 
                className="text-xs font-bold uppercase tracking-widest rounded-full py-1 px-3 mb-2 inline-block text-white" 
                style={{ backgroundColor: PRIMARY_BLUE }}
            >
                {post.category}
            </span>
            <h3 className="text-xl font-extrabold text-gray-900 mt-2 line-clamp-2 leading-snug">
                <DummyLink to="#" className="hover:text-gray-700 transition duration-150">{post.title}</DummyLink>
            </h3>
            <p className="mt-3 text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
            <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                    <ClockIcon />
                    <span>{post.readTime}</span>
                </div>
                <span className="font-semibold text-gray-700">By {post.author}</span>
            </div>
        </div>
    </div>
);

// --- Featured Blog Post Component (Internal Helper) ---
const FeaturedPost = ({ post }) => (
    <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-10 border-t-8 border-gray-100" style={{ borderColor: PRIMARY_BLUE }}>
        <div className="lg:flex lg:space-x-10">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
                <img 
                    className="w-full h-64 sm:h-96 object-cover rounded-xl shadow-lg" 
                    src={post.image} 
                    alt={`Cover for ${post.title}`}
                    onError={(e) => e.target.src = "https://placehold.co/800x400/0056D2/FFFFFF?text=Featured+Article"}
                />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center">
                <span className="text-sm font-semibold uppercase tracking-wider rounded-full py-1 px-3 mb-3 inline-block self-start text-white bg-red-600">
                    Featured
                </span>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                    <DummyLink to="#" className="hover:text-gray-700 transition duration-150">{post.title}</DummyLink>
                </h2>
                <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>
                <div className="flex flex-wrap items-center space-x-4 text-gray-500 text-sm">
                    <span className="font-medium text-gray-700">By {post.author}</span>
                    <span className="text-gray-300">•</span>
                    <span>{post.date}</span>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center space-x-1">
                        <ClockIcon />
                        <span>{post.readTime}</span>
                    </div>
                </div>
                <DummyLink 
                    to="#"
                    className="mt-8 self-start py-3 px-8 text-lg font-bold rounded-xl text-white transition duration-200 shadow-lg transform hover:scale-[1.02]"
                    style={{ backgroundColor: PRIMARY_BLUE }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = PRIMARY_HOVER_BLUE}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = PRIMARY_BLUE}
                >
                    Read Full Article
                </DummyLink>
            </div>
        </div>
    </div>
);

// --- Main Blog Component ---
export default function Blog() {
    const featuredPost = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];
    const recentPosts = BLOG_POSTS.filter(p => p.id !== featuredPost.id);

    return (
        <div className="min-h-screen font-sans antialiased bg-gray-50">
            {/* Nav Bar Placeholder (for context, normally would be external) */}
            <header className="sticky top-0 z-20 bg-white border-b border-gray-100 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                    <div className="text-3xl font-extrabold tracking-tight" style={{ color: PRIMARY_BLUE }}>Youdemi Blog</div>
                    <div className="text-lg font-medium text-gray-600">Learning Hub</div>
                </div>
            </header>
            
            <main>
                {/* Blog Header / Hero Section (Clean Banner) */}
                <div className="py-24 lg:py-32 text-center" style={{ backgroundColor: BG_LIGHT_BLUE }}>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
                            The Youdemi Learning Hub
                        </h1>
                        <p className="mt-4 text-xl text-gray-600">
                            Insights, tutorials, and career advice from the forefront of digital education.
                        </p>
                        <div className="mt-8">
                            <DummyLink className="text-lg font-medium transition duration-150 hover:underline" style={{ color: PRIMARY_BLUE }}>
                                ← Return to Home Page
                            </DummyLink>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    
                    {/* Featured Post Section */}
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-8 pt-4">Featured Story</h2>
                    <div className="mb-20">
                        <FeaturedPost post={featuredPost} />
                    </div>

                    {/* Recent Posts Grid */}
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b pb-3">All Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {recentPosts.map(post => (
                            <BlogPostCard key={post.id} post={post} />
                        ))}
                    </div>

                    {/* Pagination/Load More Placeholder */}
                    <div className="mt-16 text-center">
                        <button 
                            className="py-3 px-8 text-base font-semibold rounded-xl border-2 transition duration-300 hover:bg-gray-100"
                            style={{ borderColor: PRIMARY_BLUE, color: PRIMARY_BLUE }}
                        >
                            Load More Articles
                        </button>
                    </div>
                </div>
            </main>

            {/* Footer Placeholder (for context, normally would be external) */}
            <footer className="p-10 text-center bg-gray-800 text-white mt-12">
                <p className="text-sm">&copy; 2024 Youdemi. All rights reserved.</p>
            </footer>
        </div>
    );
}
