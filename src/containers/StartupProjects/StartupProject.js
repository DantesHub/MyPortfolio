import React from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance='20px'>
      <div className='main' id='projects2'>
        <div>
          <h1 className='skills-heading'>{bigProjects.title}</h1>
          <p className='subTitle project-subtitle'>{bigProjects.subtitle}</p>
          <div className='startup-projects-main'>
            {bigProjects.projects.map((project) => {
              return (
                <div>
                  <h2 class='title'>{project.title}</h2>
                  <div
                    className='item'
                    onClick={() => openProjectInNewWindow(project.link)}
                  >
                    <img alt='project-img' src={project.image}></img>
                  </div>
                  <p>{project.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
