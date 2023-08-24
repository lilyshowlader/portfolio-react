import ProjectPreview from "./ProjectPreview";
import { projects } from "../data/projects";

const ProjectsLists = (props) => {
  return (
    <div className="project-container">
    <p className="projectmainfont">
      <span className="a">p</span><span className="s">r</span><span className="h">o</span><span className="a">j</span><span className="s">e</span><span className="h">c</span><span className="a">t</span><span className="s">s</span> <span className='h'>a</span><span className='a'>n</span><span className='s'>d</span><br></br><span className='h'>c</span><span className='a'>o</span><span className='s'>n</span><span className='h'>t</span><span className='a'>r</span><span className='s'>i</span><span className='h'>b</span><span className='a'>u</span><span className='s'>t</span><span className='h'>i</span><span className='a'>o</span><span className='s'>n</span><span className='h'>s</span>
    </p>
    <ProjectPreview projects={projects}/>
    </div>
  );
}

export default ProjectsLists;