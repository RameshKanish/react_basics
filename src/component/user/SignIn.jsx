import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Spinner } from "react-bootstrap";
import { API_BASE_URL } from './../../../config';

// eslint-disable-next-line react/prop-types
const SignIn = ({setIsAuthenticated}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (event) => {
    event.preventDefault(); 

    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signIn`, data);

      if (response.data.responseStatus === "SUCCESS") {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", true);
        navigate('/dashboard'); // Navigate to the desired route upon successful login

      } else {
        
        alert('Invalid Credentials');
      }
    } catch (error) {
      alert('Something went wrong while signing in. Please try again.');
      console.error("Sign-in error:", error); // Log the error for debugging purposes
    }
  };

  return (
    <div className="mt-5">
      <h3>Sign In</h3>
      <Form onSubmit={handleSignIn}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)} // Fixed variable usage
            required // Ensures the field is not left empty
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)} // Fixed variable usage
            required // Ensures the field is not left empty
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3" disabled={loading}>
          {loading ? (
            <>
              <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
              {" "} Sign In...
            </>
          ) : (
            "Sign Up"
          )}
        </Button>

      </Form>
    </div>
  );
};

export default SignIn;