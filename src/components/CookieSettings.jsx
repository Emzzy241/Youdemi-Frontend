import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PRIMARY_BLUE = 'rgb(0, 86, 210)';

const CookieSettings = () => {
    const [settings, setSettings] = React.useState({
        essential: true, // Always true
        analytics: true,
        marketing: false,
        personalization: true,
    });

    const cookieTypes = [
        {
            id: 'essential',
            title: 'Strictly Necessary',
            desc: 'Required for the website to function. They handle logins and security.',
            locked: true
        },
        {
            id: 'analytics',
            title: 'Performance & Analytics',
            desc: 'Helps us understand how students interact with courses so we can improve the UI.'
        },
        {
            id: 'personalization',
            title: 'Personalization',
            desc: 'Remembers your volume levels, playback speed, and dark mode settings.'
        },
        {
            id: 'marketing',
            title: 'Targeted Advertising',
            desc: 'Used to show you relevant course recommendations on other platforms.'
        },
    ];

    return (
        <React.Fragment>
            <Navbar />
            <div className="max-w-3xl mx-auto px-4 py-20">
                <h1 className="text-4xl font-black mb-4">Cookie Preference Center</h1>
                <p className="text-gray-600 mb-12">Choose which data you allow us to use. Essential cookies cannot be disabled as they are required for Youdemi to work.</p>

                <div className="space-y-6">
                    {cookieTypes.map((type) => (
                        <div key={type.id} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm flex items-start justify-between gap-6">
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg mb-1">{type.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{type.desc}</p>
                            </div>
                            <button
                                onClick={() => !type.locked && setSettings({ ...settings, [type.id]: !settings[type.id] })}
                                disabled={type.locked}
                                className={`w-14 h-8 shrink-0 rounded-full transition-colors relative ${settings[type.id] ? 'bg-blue-600' : 'bg-gray-200'} ${type.locked ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${settings[type.id] ? 'left-7' : 'left-1'}`} />
                            </button>
                        </div>
                    ))}
                </div>

                <button
                    className="mt-12 w-full py-4 rounded-2xl font-bold text-white shadow-lg active:scale-[0.98] transition-all"
                    style={{ backgroundColor: PRIMARY_BLUE }}
                >
                    Save My Preferences
                </button>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default CookieSettings;