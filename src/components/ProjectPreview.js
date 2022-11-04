import { projects } from "../data/projects";


const ProjectPreview = (props) => {
  return ( 
    <div className="project-container">
    <p className="projectfont"> {projects[0].title}</p>
    <p>{projects[0].description}</p>
    <img src={projects[0].image} alt={props.title}className="projectphoto"></img>
    <a href="https://github.com/lilyshowlader/grateful" className="buttonlink2"> github </a>
    <a href="https://grateful.fly.dev/" className="buttonlink3"> deployed app </a>
				

    <p className="projectfont">{projects[1].title}</p>
    <p>{projects[1].description}</p>
    <img src={projects[1].image} alt={props.title}className="projectphoto"></img>
    <a href="https://github.com/lilyshowlader/connectfour" className="buttonlink2"> github </a>
    <a href="https://lilyshowladerconnectfour.netlify.app/" className="buttonlink3"> deployed app </a>

    <p className="projectfont">{projects[2].title}</p>
    <p>{projects[2].description}</p>
    <img src={projects[2].image} alt={props.title}className="projectphoto"></img>
    <a href="https://github.com/lilyshowlader/ttt-weekend" className="buttonlink2"> github </a>
    <a href="https://lilyshowladertictactoe.netlify.app/" className="buttonlink3"> deployed app </a>
    

    {/* <p className="projectfont">{projects[3].title}</p>
    <p>{projects[3].description}</p>
    <img src={projects[3].image} alt={props.title}className="projectphoto"></img>
    <div className='button-container'>
    <a href="https://github.com/shakestuffup73/lamdb-frontend" className="buttonlink2"> github </a>
    <a href="https://lamdb.netlify.app/" className="buttonlink3"> deployed app </a>
    </div> */}
    </div>
  );
}

export default ProjectPreview;