import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom'; // No need for Router here
import './App.css';

// Import your components
import AddMovieList from './component/movies/AddMovieList';
import AddList from './component/movies/AddMovie';
import AddCity from './component/city/AddCity';
import CityList from './component/city/CityList';
import city from './component/city/AddCity';
import Header from './component/Header';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <>
            <Header /> {/* Header with navigation */}

            <Container fluid>
                <h1>Movie Booking System</h1>
                <Navbar bg="dark" data-bs-theme="dark" expand = "lg">
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
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
                                <Nav.Link as={Link} to="/seat-display">Display Theatre</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Row>
                    <Col sm={12} md={6} lg={8}>
                        <Routes>
                            <Route path="/" element={<AddMovieList />} />
                            <Route path="/add-movie" element={<AddList />} />

                            <Route path="/add-city" element={<AddCity />} />
                            <Route path="/city" element={<CityList />} />

                            <Route path="/" element={<h2>Welcome to BookMyShow Admin Panel</h2>} />
                            <Route path="*" element={<h3>Page not found!</h3>} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;