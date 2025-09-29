import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaSpinner } from 'react-icons/fa'; // Import icons

// Primary brand blue color for consistency
const PRIMARY_BLUE = 'rgb(0, 86, 210)';
const HOVER_BLUE = 'rgb(0, 68, 168)';

const SignUpForm = () => {
    const [fullName, setFullName] = useState('');
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
            // Note: I'm including fullName in the body, as a signup usually requires it.
            const response = await fetch('https://youdemi-fullstack.onrender.com/api/v1/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullName, email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Sign Up Failed. Please try again.');
            }

            const data = await response.json();
            console.log('Sign Up Successful:', data);

            // Store the token (and user data, if provided by your backend)
            localStorage.setItem('token', data.token);
            // Optionally: localStorage.setItem('user', JSON.stringify(data.user));

            // Redirect the user
            navigate('/dashboard');

        } catch (err) {
            console.error('Error during Sign Up: ', err);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 space-y-6">
                
                {/* Header Section */}
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900" style={{ color: PRIMARY_BLUE }}>
                        Youdemi
                    </h1>
                    <h2 className="mt-2 text-2xl font-bold text-gray-800">
                        Create Your Account
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Join millions learning on Youdemi today!
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

                    {/* Full Name Input Field */}
                    <div className="relative">
                        <FaUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text" // Changed from 'name' to 'text'
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Full Name"
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:ring-2 focus:outline-none transition duration-150"
                            style={{ '--tw-ring-color': PRIMARY_BLUE }}
                            aria-label="Full Name"
                        />
                    </div>

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
                            style={{ '--tw-ring-color': PRIMARY_BLUE }}
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
                            placeholder="Create a password"
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:ring-2 focus:outline-none transition duration-150"
                            style={{ '--tw-ring-color': PRIMARY_BLUE }}
                            aria-label="Password"
                        />
                    </div>

                    {/* Sign Up Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex justify-center items-center py-3 px-4 border border-transparent text-lg font-semibold rounded-lg text-white shadow-md focus:outline-none focus:ring-4 transition duration-300 ease-in-out disabled:opacity-70"
                        style={{ backgroundColor: PRIMARY_BLUE, '--tw-ring-color': PRIMARY_BLUE, '--tw-ring-opacity': 0.5 }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = HOVER_BLUE}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = PRIMARY_BLUE}
                    >
                        {isLoading ? (
                            <>
                                <FaSpinner className="animate-spin mr-3 h-5 w-5" />
                                Signing Up...
                            </>
                        ) : 'Sign Up'}
                    </button>
                </form>

                {/* Footer Link */}
                <div className="text-center text-sm mt-4">
                    <p className="text-gray-600">
                        Already have an account? 
                        <Link to="/auth/signIn" className="font-medium ml-1 hover:underline transition duration-150" style={{ color: PRIMARY_BLUE }}>
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;











// import { useState } from "react"
// import { useNavigate } from "react-router-dom";


// const SignUpForm = () => {
//     const [fullName, setFullName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');
//         setIsLoading(true);

//         try {
//             const response = await fetch('https://youdemi-fullstack.onrender.com/api/v1/signup', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password }),
//             });

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 throw new Error(errorData.message || 'Sign Up Failed')
//             }

//             const data = await response.json();
//             console.log('Sign Up Successful:', data);

//             localStorage.setItem('token', data.token);

//             navigate('/dashboard');

//         } catch (err) {
//             console.error('Error during Sign Up: ', err);
//             setError(err.message);
//         } finally {
//             setIsLoading(false);
//         }
//     }

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 <br />
//                 <input
//                     type="name"
//                     value={email}
//                     onChange={(e) => setFullName(e.target.value)}
//                     placeholder="Full Name"
//                 />
//                 <br />
//                 <br />
//                 <br />
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Email"
//                 />
//                 <br />
//                 <br />
//                 <br />
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Password"
//                 />
//                 <br />
//                 <br />
//                 <button type="submit" disabled={isLoading}>
//                     {isLoading ? 'Signing Up....' : 'Sign Up'}
//                 </button>
//             </form>
//         </>
//     )
// }

// export default SignUpForm;