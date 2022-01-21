import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

function Sidebar() {
  return (
    <SidebarStyle>
      <Nav />
    </SidebarStyle>
  );
}

const SidebarStyle = styled.div`
  position: fixed;
  width: 16.3rem;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
  z-index: 1;
`;

export default Sidebar;
