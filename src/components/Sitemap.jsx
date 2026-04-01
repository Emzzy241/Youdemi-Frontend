import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const PRIMARY_BLUE = 'rgb(0, 86, 210)';


const siteLinks = [
    {
        title: 'Company',
        links: [
            { label: 'About', path: '/about' },
            { label: 'Careers', path: '/career-page' },
            { label: 'Blog', path: '/blog' },
            { label: 'Affiliate', path: '/affiliate' }
        ]
    },
    {
        title: 'Support',
        links: [
            { label: 'Help & Support', path: '/help-support' },
            { label: 'Trust & Safety', path: '/safety' },
            { label: 'Get the app', path: '/get-the-app' }
        ]
    },
    {
        title: 'Legal',
        links: [
            { label: 'Terms', path: '/terms' },
            { label: 'Privacy policy', path: '/privacy' },
            { label: 'Cookie settings', path: '/cookies' }
        ]
    },
    {
        title: 'Courses',
        links: [
            { label: 'Software Development', path: '/courses?category=dev' },
            { label: 'Finance', path: '/courses?category=finance' },
            { label: 'Accounting', path: '/courses?category=accounting' },
            { label: 'Ecommerce', path: '/courses?category=ecommerce' }
        ]
    },
]

const Sitemap = () => (
    <React.Fragment>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-24 min-h-[60vh]">
            <h1 className="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">
                Platform Directory
            </h1>
            <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
                Find your way around the Youdemi ecosystem. From world-class courses to 
                legal documentation, everything is just one click away.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {siteLinks.map((col) => (
                    <div key={col.title} className="group">
                        <h2 
                            className="text-sm font-bold mb-6 uppercase tracking-[0.2em]"
                            style={{ color: PRIMARY_BLUE }}
                        >
                            {col.title}
                        </h2>
                        <ul className="space-y-4">
                            {col.links.map((linkItem) => (
                                <li key={linkItem.path}>
                                    <Link 
                                        to={linkItem.path} 
                                        className="text-gray-600 hover:text-gray-900 hover:translate-x-1 inline-block transition-all duration-200"
                                    >
                                        {linkItem.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        <Footer />
    </React.Fragment>
);

export default Sitemap;