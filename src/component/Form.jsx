import { useState } from "react";
import "../assets/styles/SimpleForm.css";  // Assuming your CSS is correctly linked
import { useNavigate } from "react-router-dom";


const SimpleForm = () => {
    // const navigate = useNavigate();  // Initialize navigate function

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        const data = { name, email, password };

        event.preventDefault();
        console.log("Data", data);

        // fetch('http://localhost:8080/auth/signUp', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log("Response Data:", data);
        //     if (data.id) {
        //         console.log("User ID:", data.id);
        //         window.location.href = 'https://www.zoho.com/';
        //         // navigate('https://www.zoho.com/');  // Redirect using navigate
        //     } else {
        //         alert('Sign-up failed!');
        //     }
        // })
        // .catch(error => {
        //     console.error("Error:", error);
        //     alert('An error occurred during sign-up');
        // });
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