import React, { useState } from "react";
import { InnerLayout } from "../styles/Layout";
import Title from "../Components/Title";
import projects from "../data/Projects";
import Menu from "../Components/Menu";
import Button from "../Components/Button";

const allButtons = ["All", ...new Set(projects.map((item) => item.category))];

function ProjectsPage() {
  const [menuItem, setMenuItems] = useState(projects);
  const [button, setButtons] = useState(allButtons);

  const filter = (button) => {
    if (button === "All") {
      setMenuItems(projects);
      return;
    }

    const filteredData = projects.filter((item) => item.category === button);
    setMenuItems(filteredData);
  };
  return (
    <>
      <Title title={"projects"} span={"projects"} />
      <InnerLayout>
        <Button filter={filter} button={button} />
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </>
  );
}

export default ProjectsPage;
