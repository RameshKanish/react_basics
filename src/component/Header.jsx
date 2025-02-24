// src/components/Header.js
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                {/* Brand Logo */}
                <Navbar.Brand as={Link} to="/" className="fw-bold">
                    <span style={{ color: '#ba0202', fontWeight: 'bold', fontSize: '22px', letterSpacing: '1px' }}>Book</span>
                    <span style={{ color: '#ffffff', fontSize: '22px', letterSpacing: '1px' }}>MyShow</span>
                </Navbar.Brand>

                {/* Toggle Button for Mobile */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Navbar Items */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" className="fw-semibold">
                                Home
                            </Nav.Link>
                        </Nav.Item>
                        {/* Add more links here */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;