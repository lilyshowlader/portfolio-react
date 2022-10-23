import { projects } from "../data/projects";

const ProjectDetails = () => {
  return (
    <>
    <p> {projects[0].title}</p>
    <p>{projects[0].description}</p>
    <p>{projects[0].image}</p>
    <button>github </button>
    <button>deployed</button>

    <p>{projects[1].title}</p>
    <p>{projects[1].description}</p>
    <p>{projects[1].image}</p>
    <button>github</button>
    <button>deployed</button>
    </>
    );
}
 
export default ProjectDetails;