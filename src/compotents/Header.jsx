import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';

import logo from '../../images/logo.png'

function Header() {
    const [expanded, setExpanded] = useState(false);

    const handleNavCollapse = () => {
        setExpanded(false);
    };

    return (
        <header className=" justify-content-between bg-black">
            <Navbar expand="lg" expanded={expanded}>
                <Container>
                    <a href="/">
                        <img className="logo" src={logo} alt="signature" />
                    </a>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        onClick={() => setExpanded(!expanded)}

                    />
                    <Navbar.Collapse className="navText" id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="navlinks" to="/" onClick={handleNavCollapse}>
                                About Me
                            </NavLink>
                            <br />
                            <NavLink className="navlinks" to="/portfolio" onClick={handleNavCollapse}>
                                Portfolio
                            </NavLink>
                            <br />
                            <NavLink className="navlinks" to="/contact" onClick={handleNavCollapse}>
                                Contact
                            </NavLink>
                            <br />
                            <NavLink className="navlinks" to="/resume" onClick={handleNavCollapse}>
                                Resume
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
