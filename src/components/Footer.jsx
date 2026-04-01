import React from 'react';
import { Link } from "react-router-dom"
const PRIMARY_BLUE = 'rgb(0, 86, 210)';

const footerLinks = [
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
];

const Footer = () => {

    return (
        <React.Fragment>
            <footer className="bg-gray-950 text-white pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main Link Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-y-12 gap-x-8 border-b border-gray-800 pb-12">
                        {footerLinks.map((section) => (
                            <div key={section.title}>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">
                                    {section.title}
                                </h3>
                                <ul className="space-y-4">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                to={link.path}
                                                className="text-gray-300 hover:text-white transition-colors duration-200 text-base"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Bar: Logo and Copyright */}
                    <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-8">
                            <Link to="/" className="text-2xl font-black tracking-tighter" style={{ color: PRIMARY_BLUE }}>
                                Youdemi
                            </Link>
                            <nav className="hidden md:flex gap-6 text-sm text-gray-500">
                                <Link to="/sitemap" className="hover:text-gray-300">Sitemap</Link>
                                <Link to="/cookies" className="hover:text-gray-300">Cookies</Link>
                            </nav>
                        </div>

                        <div className="text-sm text-gray-500 font-medium">
                            © 2026 Youdemi, Inc. <span className="mx-2">|</span> Made for the future of education.
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
