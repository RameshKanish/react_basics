import axios from "axios";
import { useState } from "react";
import { API_BASE_URL } from "./../../../config";
import { useNavigate } from "react-router-dom";
import { Button, Form, Alert, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (event) => {
    event.preventDefault();
    setLoading(true);

    const data = { name, email, password };

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signUp`, data);

      if (response.status === 200 && response.data.responseStatus === "SUCCESS") {
        // toast.success("✅ Check your email!", {
        //   position: "top-right",
        //   autoClose: 3000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        // });
        alert("✅ Check your email!");
        navigate("/sign-in");
      } else {
        setError(response.data.message || "Sign-up failed. Please try again.");
      }
    } catch (error) {
      setError("Something went wrong while signing up. Please try again.");
      console.error("Sign-up error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-5">
      <ToastContainer />
      <h3>Sign Up</h3>
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSignUp}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3" disabled={loading}>
          {loading ? (
            <>
              <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
              {" "} Signing Up...
            </>
          ) : (
            "Sign Up"
          )}
        </Button>
      </Form>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeOnClick />
    </div>
  );
};

export default SignUp;