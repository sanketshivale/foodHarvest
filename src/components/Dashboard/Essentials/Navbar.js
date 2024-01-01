import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import BrandLogo from "../../../assets/images/logo12.png";
import Cookies from "js-cookie";
import firebase from '../../../firebase-config'

function Navb(props) {
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      Cookies.remove("userRole");
      props.setUserRole("");
      window.location.href = "/login";
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <Navbar variant="dark" expand="lg" className="header ">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={BrandLogo} alt="Food Harvest App Logo" className="logo-img" />
          Food Harvest App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >

            {Cookies.get("userRole") === "hotel" && (
              <Nav.Link as={Link} to="/dashboard">
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
            {Cookies.get("userRole") ? <Nav.Link as={Link} to="/login" onClick={handleLogout}>
              Logout
            </Nav.Link> : <> <Nav.Link as={Link} to="/login"> Login
            </Nav.Link> <Nav.Link as={Link} to="/signup"> SignUp
            </Nav.Link> </> }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
