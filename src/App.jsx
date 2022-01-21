import React from "react";
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContentStyled>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/resume" exact element={<ResumePage />} />
          <Route path="/projects" exact element={<ProjectsPage />} />
          <Route path="/contact" exact element={<ContactPage />} />
        </Routes>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
`;

export default App;
