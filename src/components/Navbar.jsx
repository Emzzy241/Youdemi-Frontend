import React, { useState } from 'react';
import { PRIMARY_BLUE, PRIMARY_HOVER_BLUE } from './Colors';
import { SearchIcon, MenuIcon, XIcon, ChevronDown } from './Icons';
import { Link } from 'react-router-dom';
// --- Navigation Sub-Menu Data (Mock) ---
const COURSES_MENU = [
    { name: 'Programming & Tech', href: '#' },
    { name: 'Data Science', href: '#' },
    { name: 'Finance & Business', href: '#' },
    { name: 'Arts & Humanities', href: '#' },
];
const HOW_IT_WORKS_MENU = [
    { name: 'Become a Student', href: '#' },
    { name: 'Teach on Youdemi', href: '#' },
    { name: 'For Business', href: '#' },
];

// --- Dropdown Menu Helper (Defined locally as it's a specific Navbar UI element) ---
const DropdownMenu = ({ title, items, onViewChange }) => { 
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            <button
                className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 rounded-lg transition duration-150 text-base"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                {title}
                <ChevronDown />
            </button>
            {isOpen && (
                <div 
                    className="absolute z-20 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
                    onMouseLeave={() => setIsOpen(false)}
                >
                    {items.map((item, index) => (
                        <a // Using <a> tag placeholder for Link
                            key={index}
                            href={item.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition duration-150"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

// --- Navbar Component (Default Export) ---
const Navbar = ({ onViewChange }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Dummy link component substitute for React Router Link
    const DummyLink = ({ children, onClick, className, style, to = "#" }) => (
        <a href={to} onClick={onClick} className={className} style={style}>{children}</a>
    );

    return (
        <header className="sticky top-0 z-20 bg-white border-b border-gray-100 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                
                {/* Logo - Navigates to LANDING (Placeholder) */}
                <button onClick={() => onViewChange('LANDING')} className="text-3xl font-extrabold tracking-tight" style={{ color: PRIMARY_BLUE }}>
                    Youdemi
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-6">
                    <DropdownMenu title="Courses" items={COURSES_MENU} />
                    <DropdownMenu title="How Youdemi Works" items={HOW_IT_WORKS_MENU} />
                    <Link className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-lg transition duration-150 text-base">Blog</Link>
                    <Link className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-lg transition duration-150 text-base">About</Link>
                </nav>

                {/* Action Buttons & Search (Desktop) */}
                <div className="hidden lg:flex items-center space-x-4">
                    <button 
                        className="p-2 rounded-full text-gray-700 hover:bg-gray-100 transition duration-150" 
                        aria-label="Search"
                    >
                        <SearchIcon />
                    </button>
                    <DummyLink 
                        to="/signin"
                        className="py-2 px-4 text-base font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition duration-150 text-gray-800"
                    >
                        Sign In
                    </DummyLink>
                    <DummyLink 
                        to="/signup"
                        className="py-2 px-4 text-base font-semibold rounded-lg text-white transition duration-150 shadow-md"
                        style={{ backgroundColor: PRIMARY_BLUE }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = PRIMARY_HOVER_BLUE}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = PRIMARY_BLUE}
                    >
                        Sign Up
                    </DummyLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition duration-150"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Open Menu"
                >
                    {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
                </button>
            </div>

            {/* Mobile Menu Content (Simplified) */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white px-4 pb-4 border-t border-gray-100 shadow-inner">
                    <nav className="flex flex-col space-y-2 pt-4">
                        <button onClick={() => onViewChange('LANDING')} className="block py-2 text-gray-700 font-semibold hover:bg-gray-50 rounded-md text-left">Home</button>
                        {COURSES_MENU.map((item, index) => (
                            <DummyLink key={index} to={item.href} className="block pl-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md text-sm">{item.name}</DummyLink>
                        ))}
                        <button onClick={() => onViewChange('BLOG')} className="block py-2 text-gray-700 font-semibold hover:bg-gray-50 rounded-md text-left">Blog</button>
                        <button onClick={() => onViewChange('VERIFICATION_REQUEST')} className="block py-2 text-gray-700 font-semibold hover:bg-gray-50 rounded-md text-left">Verify Account (Demo)</button>
                    </nav>
                    <div className="flex flex-col space-y-3 mt-5">
                        <DummyLink 
                            to="/signin"
                            className="text-center py-2 px-4 font-semibold rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-50"
                        >
                            Sign In
                        </DummyLink>
                        <DummyLink 
                            to="/signup"
                            className="text-center py-2 px-4 font-semibold rounded-lg text-white"
                            style={{ backgroundColor: PRIMARY_BLUE }}
                        >
                            Sign Up
                        </DummyLink>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
