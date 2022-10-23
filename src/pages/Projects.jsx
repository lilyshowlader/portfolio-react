import ProjectsLists from "../components/ProjectsList";
import { projects } from "../data/projects";

function Projects () {

  return (
    <>
    <div className="projectcontainer">
      <ProjectsLists projects={projects} />
    </div>
    </>
  )
}

export default Projects;