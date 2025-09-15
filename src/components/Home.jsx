import Header from "./Header";


export default function Home () {
    return (
        <div>
            <Header />
            <h2>Welcome to the Home Page :)</h2>
            <a href="/about" >Click to go to About Page</a>
            <br />
            <br />
            <br />
            <a href="/auth/login" >Click to go to Login Page</a>
            <br />
            <br />
            <a href="/dashboard" >Click to go to Dashboard Page</a>
        </div>
    )
}