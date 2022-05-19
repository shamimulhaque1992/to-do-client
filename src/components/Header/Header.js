import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { LinkContainer } from "react-router-bootstrap";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="header">
      <Navbar bg="light" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <div className="log-container">
                <div>
                  <img
                    className="lgo"
                    src="https://raw.githubusercontent.com/taviskaron/2-3-4-column-footers/main/img/logo.png"
                    alt=""
                  />
                </div>
                <div className="">Click-Life</div>
              </div>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/todo/addnotes">
                <Nav.Link>Todo</Nav.Link>
              </LinkContainer>
              {user ? (
                <div className="d-flex align-items-center justify-content-center">
                  <p className="mb-0 p-2">👨‍💼{user.email}</p>
                  <button
                    className="rounded btn btn-primary d-flex justify-content-center align-items-center"
                    onClick={handleSignOut}
                  >
                    <i
                      className="fa-solid fa-right-from-bracket"
                      style={{ transform: "rotateY(180deg)" }}
                    ></i>
                    <span className="mx-1">Sign out</span>
                  </button>
                </div>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
