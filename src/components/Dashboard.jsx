import { useEffect, useState } from "react"

export default function Dashboard() {
    const [userName, setUserName] = useState('');
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        // Retrieve the user data from localStorage
        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            try {
                const userObject = JSON.parse(storedUser);
                if (userObject.name) {
                    setUserName(userObject.name);
                }

                if (userObject.verified) {
                    setIsVerified(true)
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
            <br />
            <br />
            <br />
            {
                isVerified ? (
                    <h2>Hello, You  are a verified User</h2>
                ) : (
                    <>
                        <h2>Hey there, you are unverified, click the button below to get verified</h2>
                        <a href="/verified">Verify account now</a>

                    </>
                )
            }


            {/* <h2>Welcome, {user.email}</h2> */}
        </div>
    )
}