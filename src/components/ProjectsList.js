import ProjectPreview from "./ProjectPreview";

const ProjectsLists = (props) => {
  return (
    <div className="project-container">
    <p className="projectmainfont"><span className="s">m</span><span className="h">y</span> <span className="a">p</span><span className="s">r</span><span className="h">o</span><span className="a">j</span><span className="s">e</span><span className="h">c</span><span className="a">t</span><span className="s">s</span></p>
        {props.projects.map((project, idx) =>
        <ProjectPreview  key={idx} title={project.title} image={project.image}/>
        )}
    </div>
  );
}

export default ProjectsLists;