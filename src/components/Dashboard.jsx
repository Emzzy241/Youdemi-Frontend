import { useEffect, useState } from "react"

export default function Dashboard () {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        // Retrieve the user data from localStorage
        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            try {
                const userObject = JSON.parse(storedUser);
                if (userObject.name) {
                    setUserName(userObject.name);
                }
            } catch (error) {
                console.error("Failed to parse user data from localStorage", error);
            }
        }
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            {
                userName ? (
                    <h2>Hello, <span className="name_color">{userName}</span></h2>
                ) : (
                    <h2>Hello, User</h2>
                )}
            <p>Welcome to your dashboard</p>
            {/* <h2>Welcome, {user.email}</h2> */}
        </div>
    )
}