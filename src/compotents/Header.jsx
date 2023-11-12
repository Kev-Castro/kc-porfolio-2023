import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="d-flex justify-content-between pt-1 ps-3 pe-3 pb-1 bg-black">
            <a href="/">
                <img className="logo" src="images\logo.png" alt="signature" />
            </a>
            <nav className="navbar navbar-expand-md navbar-dark bg-black">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                                About Me
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/portfolio" className="nav-link">
                                Portfolio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/resume" className="nav-link">
                                Resume
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header