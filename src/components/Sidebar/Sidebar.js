import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  LinkText,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    // is isOpen, then opacity and top position will be changed
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {/* these given "to" are for smooth-scroll */}
          <SidebarLink to="projects" offset={-80} onClick={toggle}>
            <LinkText>Projects</LinkText>
          </SidebarLink>

          <SidebarLink to="technology" onClick={toggle}>
            <LinkText>Technologies</LinkText>
          </SidebarLink>
          <SidebarLink to="about" offset={-80} onClick={toggle}>
            <LinkText>About</LinkText>
          </SidebarLink>
        </SidebarMenu>
        {/* <SideButtonWrap>
          <Button>Toggle Theme</Button>
        </SideButtonWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
