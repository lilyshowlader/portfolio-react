const ProjectPreview = (props) => {
  return ( 
    <div className="project-container">
      {/* <h3>{props.title}</h3> */}
    <img 
        src={props.image} 
        alt={props.title}
        className="projectphoto"></img>
					<button>
              click me :)
          </button>
    </div>

   );
}
 
export default ProjectPreview;