import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaSpinner } from 'react-icons/fa'; // Icons for inputs and loading

// Primary brand blue color, similar to Coursera's primary blue
const PRIMARY_BLUE = 'rgb(0, 86, 210)'; // A deep, professional blue
const HOVER_BLUE = 'rgb(0, 68, 168)';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await fetch('https://youdemi-fullstack.onrender.com/api/v1/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Sign In failed. Please check your credentials.');
            }

            const data = await response.json();
            console.log('Sign In successful:', data);

            // Store the token and user data
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            navigate('/dashboard');

        } catch (err) {
            console.error('Error during SignIn:', err);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 space-y-6">
                
                {/* Header Section */}
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900" style={{ color: PRIMARY_BLUE }}>
                        Youdemi
                    </h1>
                    <h2 className="mt-2 text-2xl font-bold text-gray-800">
                        Sign In to Your Account
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Start learning the world's top skills today!
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Error Message */}
                    {error && (
                        <div className="p-3 text-sm text-red-700 bg-red-100 rounded-lg border border-red-300 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                            <span>{error}</span>
                        </div>
                    )}

                    {/* Email Input Field */}
                    <div className="relative">
                        <FaEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email address"
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:ring-2 focus:outline-none transition duration-150"
                            style={{ '--tw-ring-color': PRIMARY_BLUE, paddingLeft: '2.5rem' }} // Apply ring color
                            aria-label="Email address"
                        />
                    </div>

                    {/* Password Input Field */}
                    <div className="relative">
                        <FaLock className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:ring-2 focus:outline-none transition duration-150"
                            style={{ '--tw-ring-color': PRIMARY_BLUE, paddingLeft: '2.5rem' }} // Apply ring color
                            aria-label="Password"
                        />
                    </div>

                    {/* Action Links */}
                    <div className="flex justify-between text-sm">
                        <Link to="/forgot-password" className="font-medium text-gray-600 hover:underline transition duration-150" style={{ color: PRIMARY_BLUE, opacity: 0.8 }}>
                            Forgot your password?
                        </Link>
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex justify-center items-center py-3 px-4 border border-transparent text-lg font-semibold rounded-lg text-white shadow-md focus:outline-none focus:ring-4 transition duration-300 ease-in-out disabled:opacity-70"
                        style={{ backgroundColor: PRIMARY_BLUE, '--tw-ring-color': PRIMARY_BLUE, '--tw-ring-opacity': 0.5 }} // Custom styles for primary blue
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = HOVER_BLUE}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = PRIMARY_BLUE}
                    >
                        {isLoading ? (
                            <>
                                <FaSpinner className="animate-spin mr-3 h-5 w-5" />
                                Signing In...
                            </>
                        ) : 'Sign In'}
                    </button>
                </form>

                {/* Footer Link */}
                <div className="text-center text-sm">
                    <p className="text-gray-600">
                        Don't have an account? 
                        <Link to="/signup" className="font-medium ml-1 hover:underline transition duration-150" style={{ color: PRIMARY_BLUE }}>
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;


















// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SignInForm = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isLoading, setIsLoading] = useState(false)
//     const [error, setError] = useState('');
//     const navigate = useNavigate(); // Initialize the hook for redirecting

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError(''); // Clear any previous errors
//         setIsLoading(true);

//         try {
//             const response = await fetch('https://youdemi-fullstack.onrender.com/api/v1/signin', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password }),
//             });

//             if (!response.ok) {
//                 // Handle server-side errors (e.g., invalid credentials)
//                 const errorData = await response.json();
//                 throw new Error(errorData.message || 'Sign In failed');
//             }

//             const data = await response.json();
//             console.log('Sign In successful:', data);

//             // Store the token (e.g., in localStorage)
//             localStorage.setItem('token', data.token);

//             // Store the user in localStorage for persistence storage
//             localStorage.setItem('user', JSON.stringify(data.user))

//             // Redirect the user to another page
//             // e.g., using useNavigate from react-router-dom
//             navigate('/dashboard');

//         } catch (err) {
//             console.error('Error during SignIn:', err);
//             setError(err.message);
//         } finally {
//             setIsLoading(false); // End Loading, regardless of success or failure
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//             />
//             <br />
//             <br />
//             <br />
//             <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//             />
//             <br />
//             <br />
//             <button type="submit" disabled={isLoading}>
//                 {isLoading ? 'Signing In...' : 'Sign In'}
//             </button>
//         </form>
//     );
// };

// export default SignInForm;