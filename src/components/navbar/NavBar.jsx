import { Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.scss";
const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary d-flex justify-content-center"
      style={{ height: "80px" }}
    >
      <Col className="col-11 d-flex justify-content-between">
        <Col className="col-2">
          {" "}
          <Navbar.Brand>Logo</Navbar.Brand>
        </Col>

        <Col className="col-10 d-flex flex-row justify-content-end">
          <Nav>
            {" "}
            <NavLink
              to="/"
              style={{ textDecoration: "none" }}
              // onClick={handleSignInClick}
              id="nav-links"
            >
              HOME
            </NavLink>
          </Nav>
          <Nav>
            {" "}
            <NavLink
              to="/signIn"
              style={{ textDecoration: "none" }}
              // onClick={handleSignInClick}
              id="nav-links"
            >
              SIGN IN
            </NavLink>
          </Nav>
        </Col>
      </Col>
    </Navbar>
  );
};

export default NavBar;
