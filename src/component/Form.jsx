import { useState } from "react";
import "../assets/styles/SimpleForm.css";  // Assuming your CSS is correctly linked
import { useNavigate } from "react-router-dom";  // Import useNavigate hook

const SimpleForm = () => {
    const navigate = useNavigate();  // Initialize navigate function

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { name, email, password };

        console.log("Data", data);  // Log data to verify it's correct

        fetch('https://cinemate-pmv2.onrender.com/auth/signUp', {
        method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Allow all origins (can be restricted to specific domains)
    },
    body: JSON.stringify(data),
    mode: 'cors', // This explicitly enables CORS
    credentials: 'same-origin' // If needed, include credentials like cookies (optional)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Response Data:", data);
            if (data.id) {
                // Redirect after successful sign-up
                console.log("User ID:", data.id);
                navigate('/dashboard');  // Redirect to a different page on success
            } else {
                alert('Sign-up failed!');
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert('An error occurred during sign-up');
        });
    };

    return (
        <div className="form-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="form-control"
                        placeholder="Enter your name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="form-control"
                        placeholder="Enter your email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="form-control"
                        placeholder="Enter your password"
                    />
                </div>

                <button type="submit" className="submit-btn">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default SimpleForm;
