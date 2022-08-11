import React from "react";
import "./navbarStyles.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Stack from "react-bootstrap/Stack";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbars() {
  return (
    <Navbar
      className="NavBarStyles"
      variant="dark"
      collapseOnSelect
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/">Me</Navbar.Brand>
        <Stack gap={3}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link className="nav_linkss" href="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link className="nav_linkss" eventKey={2} href="/insta_posts">
                Insta Posts
              </Nav.Link>
              <Nav.Link className="nav_linkss" eventKey={3} href="#Apps">
                My Apps
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Stack>
      </Container>
    </Navbar>
    // <div className="NavBarStyles">
    //   <a class="nav_brand_link" href="/">
    //     Home
    //   </a>
    //   <div className="nav_bar_link">
    //     <a class="nav_link" href="/blogs">
    //       Blogs
    //     </a>
    //     <a class="nav_link" href="/Projects">
    //       Projects
    //     </a>
    //   </div>
    // </div>
  );
}

export default Navbars;
