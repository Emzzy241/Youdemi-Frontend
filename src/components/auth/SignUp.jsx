import { useState } from "react"
import { useNavigate } from "react-router-dom";


const SignUpForm = () => {
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
            const response = await fetch('https://youdemi-fullstack.onrender.com/api/v1/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Sign Up Failed')
            }

            const data = await response.json();
            console.log('Sign Up Successful:', data);

            localStorage.setItem('token', data.token);

            navigate('/dashboard');

        } catch (err) {
            console.error('Error during Sign Up: ', err);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

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
                {isLoading ? 'Signing In....' : 'Sign In'}
            </button>
        </form>
    )
}

export default SignUpForm;