import { Link } from "react-router-dom";

const ProjectPreview = (props) => {
  return ( 
    <div className="project-container">
      {/* <h3>{props.title}</h3> */}
    <img 
        src={props.image} 
        alt={props.title}
        className="projectphoto"></img>
					<button>
          <Link className="buttonlink" to="/projectDetails">click me :)</Link>
          </button>
    </div>

   );
}
 
export default ProjectPreview;