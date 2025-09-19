import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize the hook for redirecting

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear any previous errors
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
                // Handle server-side errors (e.g., invalid credentials)
                const errorData = await response.json();
                throw new Error(errorData.message || 'Sign In failed');
            }

            const data = await response.json();
            console.log('Sign In successful:', data);

            // Store the token (e.g., in localStorage)
            localStorage.setItem('token', data.token);

            // Store the user in localStorage for persistence storage
            localStorage.setItem('user', JSON.stringify(data.user))

            // Redirect the user to another page
            // e.g., using useNavigate from react-router-dom
            navigate('/dashboard');

        } catch (err) {
            console.error('Error during SignIn:', err);
            setError(err.message);
        } finally {
            setIsLoading(false); // End Loading, regardless of success or failure
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <br />
            <br />
            <br />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <br />
            <br />
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
        </form>
    );
};

export default SignInForm;