import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    My Website
                </Link>

                <div className="navbar-nav">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
}