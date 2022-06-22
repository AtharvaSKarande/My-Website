import { useEffect } from "react";
import AllProjects from "../../data/Project_data";
import ProjectCard from "../components/ProjectCard";
import "../css/Projects.css";

const Projects = () => {
  useEffect(() => {
    //document.body.background = Project_Bg;
  }, []);
  AllProjects.sort((a, b) => {
    if (a.id < b.id) return 1;
    return -1;
  });

  return (
    <>
      <div className="Project_Title">Projects</div>
      <div className="ProjectCard_deck">
        {AllProjects.map((item, index) => {
          return <ProjectCard Project={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Projects;
