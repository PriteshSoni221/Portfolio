import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavButton,
  Button,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            PriteshSoni
          </NavLogo>
          {/* <LogoImg /> */}
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                // exact="true"
                offset={-80}
              >
                Project
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="technology"
                smooth={true}
                duration={500}
                spy={true}
                // exact="true"
                offset={-80}
              >
                Technology
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                // exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
          </NavMenu>
          {/* <NavButton>
            <Button>Toggle Theme</Button>
          </NavButton> */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
