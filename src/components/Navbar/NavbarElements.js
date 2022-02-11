import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#0c111c" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  margin-bottom: 2rem;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    margin-bottom: 6rem;
    height: 60px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled.h1`
  /* gradient text using webkit */
  background: -webkit-linear-gradient(#cf2323, #eb8686);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.7;

  justify-self: flex-start;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  /* to disable selection */
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    color: white;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 80%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: ${({ theme }) => theme.lightTheme.mainColor};
  opacity: 0.7;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 2rem;

  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.lightTheme.mainColor};
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 1;
  }
`;

export const NavButton = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Button = styled.button`
  border-radius: 50px;

  background: ${({ theme }) => theme.lightTheme.mainColor};
  opacity: 0.7;
  white-space: nowrap;
  padding: 8px 12px;
  color: #000;
  font-size: 1.3rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: "#ffffff";
    opacity: 1;
  }
`;
