import React from 'react';

// --- Colors: Defined internally to resolve the 'Could not resolve "./Colors"' error ---
const PRIMARY_BLUE = 'rgb(0, 86, 210)';

const Footer = () => {
    // Placeholder data for the footer
    const footerLinks = [
        { title: 'Company', links: ['About', 'Careers', 'Blog', 'Affiliate'] },
        { title: 'Support', links: ['Help & Support', 'Trust & Safety', 'Get the app'] },
        { title: 'Legal', links: ['Terms', 'Privacy policy', 'Cookie settings', 'Sitemap'] },
        { title: 'Community', links: ['Instructors', 'Students', 'Partners'] },
        { title: 'Courses', links: ['Finance', 'Software Development', 'Accounting', 'Ecommerce'] },
    ];

    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 border-b border-gray-700 pb-10">
                    {/* Link Sections */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-lg font-bold mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-400 hover:text-white transition duration-150 text-sm">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Language Selector (Placeholder for an extra column on large screens) */}
                    {/* <div className="col-span-2 md:col-span-4 lg:col-span-1 flex justify-start lg:justify-end">
                        <button 
                            className="flex items-center space-x-2 px-4 py-2 border rounded-lg text-sm font-medium transition duration-150 hover:bg-gray-800"
                            style={{ borderColor: PRIMARY_BLUE, color: PRIMARY_BLUE }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            <span>English</span>
                        </button>
                    </div> */}
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <div className="text-2xl font-extrabold mb-4 md:mb-0" style={{ color: PRIMARY_BLUE }}>
                        Youdemi
                    </div>
                    <div>
                        © 2024 Youdemi, Inc.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
