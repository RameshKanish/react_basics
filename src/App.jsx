import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

// Import Components
import MovieList from "./component/movies/MovieList";
import AddCity from "./component/city/AddCity";
import AddMovie from "./component/movies/AddMovie";
import CityList from "./component/city/CityList";
import Header from "./component/Header";
import SeatSelection from "./component/theatre/SeatSelection";
import SignIn from "./component/user/SignIn";
import SignUp from "./component/user/SignUp";
import Dashboard from "./component/dashboard/Dashboard"; 

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem("isAuthenticated") === "true"
    );

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("isAuthenticated", isAuthenticated);
    }, [isAuthenticated]);

    // Function to handle logout
    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("isAuthenticated");
        navigate("/sign-in");
    };

    return (
        <>
            <Header />

            <Container fluid>
                <h1>Movie Booking System</h1>
                <Navbar bg="dark" data-bs-theme="dark" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {isAuthenticated ? (
                                <>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/add-screen">Add Screen</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/add-city">Add City</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/add-theatre">Add Theatre</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/seat-display">Display Seat</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/add-movie">Add Movie</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/city">City List</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                                    </Nav.Item>
                                </>
                            ) : (
                                <>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/sign-in">Sign In</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/sign-up">Sign Up</Nav.Link>
                                    </Nav.Item>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Row>
                    <Col sm={12} md={6} lg={8}>
                        <Routes>
                            {/* Auth Routes */}
                            <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/sign-in"} />} />
                            <Route path="/sign-in" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
                            <Route path="/sign-up" element={<SignUp />} />

                            {/* Protected Routes */}
                            <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/sign-in" />} />
                            <Route path="/add-movie" element={isAuthenticated ? <AddMovie /> : <Navigate to="/sign-in" />} />
                            <Route path="/movies" element={isAuthenticated ? <MovieList /> : <Navigate to="/sign-in" />} />
                            <Route path="/add-city" element={isAuthenticated ? <AddCity /> : <Navigate to="/sign-in" />} />
                            <Route path="/city" element={isAuthenticated ? <CityList /> : <Navigate to="/sign-in" />} />
                            <Route path="/seat-display" element={isAuthenticated ? <SeatSelection /> : <Navigate to="/sign-in" />} />

                            {/* Default Routes */}
                            <Route path="/welcome" element={<h2>Welcome to BookMyShow Admin Panel</h2>} />
                            <Route path="*" element={<h3>Page not found!</h3>} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;