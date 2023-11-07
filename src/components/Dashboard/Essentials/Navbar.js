import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import BrandLogo from "../../../assets/images/logo12.png"

function Navb() {
    return (
        <>
            <Navbar bg="dark" variant="dark" className="header">
                <Container className="d-flex justify-content-evenly">
                    <div className="navbar-brand">
                        <img src={BrandLogo} alt="Food Harvest App Logo" className="logo-img" />
                        Food Harvest App
                    </div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ngo" className="nav-link">NGO</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/composter" className="nav-link">Composter</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/farmer" className="nav-link">Farmer</Link>
                        </li>
                    </ul>
                </Container>
            </Navbar>
        </>
    );
}

export default Navb;
