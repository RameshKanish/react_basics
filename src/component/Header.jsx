// src/components/Header.js
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            
            <Navbar.Brand href="#">
                <span style={{ color: '#ba0202' , fontWeight: 'bold' ,}}> Book </span>
                <span style={{ color: '#ffffff' }}>MyShow</span>
            </Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                    </Nav.Item>
                    {/* Add other links as necessary */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default Header;