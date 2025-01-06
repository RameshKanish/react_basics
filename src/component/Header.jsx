// src/components/Header.js
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">BookMyShow</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/seat-display">Display Theatre</Nav.Link>
                    </Nav.Item>
                    {/* Add other links as necessary */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
