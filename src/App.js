import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from "./components/auth/Login"
import Dashboard from './components/Dashboard';
import "./App.css"
// import Contact from './components/Contact'; // Your Contact component

// A simple component to protect routes
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/auth/login" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// import Header from "./components/Header";
// import "./App.css"

// function App() {
//   return (
//     <div className="App">
//       <Header />

//       <h2>Hi there, Welcome to the Youdemi App's frontend</h2>
//       <br />
//       <br />
//       <p>Click to go to login page</p>
//       <a href="/src/auth/login" >Login</a>
//       {/* <link to="/src/auth/login.jsx" >Login</link> */}

//     </div>
//   );
// }

// export default App;