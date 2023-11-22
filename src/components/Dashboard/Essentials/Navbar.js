import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import BrandLogo from "../../../assets/images/logo12.png";
import Cookies from "js-cookie";

function Navb(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="header">
      <Container>
        <Navbar.Brand>
          <img src={BrandLogo} alt="Food Harvest App Logo" className="logo-img" />
          Food Harvest App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {Cookies.get("userRole") === "hotel" && (
              <Nav.Link as={Link} to="/">
                Dashboard
              </Nav.Link>
            )}
            {Cookies.get("userRole") === "ngo" && (
              <Nav.Link as={Link} to="/ngo">
                Ngo
              </Nav.Link>
            )}
            {Cookies.get("userRole") === "composter" && (
              <Nav.Link as={Link} to="/composter">
                Composter
              </Nav.Link>
            )}
            {Cookies.get("userRole") === "farmer" && (
              <Nav.Link as={Link} to="/farmer">
                Farmer
              </Nav.Link>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
