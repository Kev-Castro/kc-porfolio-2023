import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="d-flex justify-content-between pt-4 ps-3 pe-3 pb-4 bg-dark">
            <h2 className="text-light">Kevin's Portfolio</h2>

            <nav>
                <NavLink to="/">About Me</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>
    )
}

export default Header