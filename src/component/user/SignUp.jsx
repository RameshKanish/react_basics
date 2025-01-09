import axios from "axios";
import { useState } from "react";
import { API_BASE_URL } from "./../../../config";
import { useNavigate } from "react-router-dom";
import { Button, Form, Alert } from "react-bootstrap";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State to handle error messages

  const handleSignIn = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const data = {
      name: name,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signUp`, data);

      if (response.status === 200 && response.data.responseStatus === "SUCCESS") {
        // Navigate to sign-in upon successful signup
        navigate("/sign-in");
      } else {
        setError(response.data.message || "Sign-up failed. Please try again.");
      }
    } catch (error) {
      setError("Something went wrong while signing up. Please try again.");
      console.error("Sign-up error:", error); // Log the error for debugging purposes
    }
  };

  return (
    <div className="mt-5">
      <h3>Sign Up</h3>

      {error && <Alert variant="danger">{error}</Alert>} {/* Display errors */}

      <Form onSubmit={handleSignIn}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text" // Use a valid input type
            placeholder="Enter the name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;