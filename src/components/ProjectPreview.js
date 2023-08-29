import { projects } from "../data/projects";


const ProjectPreview = (props) => {
  return ( 

    
    <div className="project-container">
    
    
    <p className="projectfont"> {projects[8].title}</p>
    <p>{projects[8].description}</p>
    <img src={projects[8].image} alt={props.title}className="projectphotoeight"></img>
    <p>{projects[8].tech}</p>
    <a href="https://github.com/VitalaGlobal" className="buttonlink3"> download on app store </a>
   
   
    <p className="projectfont"> {projects[7].title}</p>
    <p>{projects[7].description}</p>
    <img src={projects[7].image} alt={props.title}className="projectphotothree"></img>
    <p>{projects[7].tech}</p>
    <a href="https://github.com/lilyshowlader/mifemiso" className="buttonlink2"> github </a>
    <a href="https://mifemiso.netlify.app/" className="buttonlink3"> deployed app </a>

    <p className="projectfont"> {projects[6].title}</p>
    <p>{projects[6].description}</p>
    <img src={projects[6].image} alt={props.title}className="projectphototwo"></img>
    <p>{projects[6].tech}</p>
    <a href="https://github.com/lilyshowlader/the-daily-sunshine" className="buttonlink2"> github </a>
    <a href="https://thedailysunshine.netlify.app/" className="buttonlink3"> deployed app </a>


    <p className="projectfont"> {projects[9].title}</p>
    <p>{projects[9].description}</p>
    <img src={projects[9].image} alt={props.title}className="projectphotothree"></img>
    <p>{projects[9].tech}</p>
    <a href=" https://github.com/ChildhoodCancerSociety/ANNIverse" className="buttonlink3"> github </a> 
   
    {/* <p className="projectfont"> {projects[5].title}</p>
    <p>{projects[5].description}</p>
    <img src={projects[5].image} alt={props.title}className="projectphototwo"></img>
    <p>{projects[5].tech}</p>
    <a href="https://github.com/lilyshowlader/react-practice-api-calls" className="buttonlink2"> github </a>
    <a href="https://happypics.netlify.app/" className="buttonlink3"> deployed app </a> */}

    <p className="projectfont"> {projects[0].title}</p>
    <p>{projects[0].description}</p>
    <img src={projects[0].image} alt={props.title}className="projectphoto"></img>
    <p>{projects[0].tech}</p>
    <a href="https://github.com/lilyshowlader/grateful" className="buttonlink2" style={{marginBottom: '70px'}}> github </a>
    {/* <a href="https://grateful.fly.dev/" className="buttonlink3"> deployed app </a> */}
  


    <p className="projectfont">{projects[1].title}</p>
    <p>{projects[1].description}</p>
    <img src={projects[1].image} alt={props.title}className="projectphoto"></img>
    <p>{projects[1].tech}</p>
    <a href="https://github.com/lilyshowlader/connectfour" className="buttonlink2"> github </a>
    <a href="https://lilyshowladerconnectfour.netlify.app/" className="buttonlink3"> deployed app </a>

    <p className="projectfont">{projects[2].title}</p>
    <p>{projects[2].description}</p>
    <img src={projects[2].image} alt={props.title} className="projectphoto"></img>
    <p>{projects[2].tech}</p>
    <a href="https://github.com/shakestuffup73/lamdb-frontend" className="buttonlink2"> github </a>
    <a href="https://lamdb.netlify.app/" className="buttonlink3"> deployed app </a>
  
    {/* <p className="projectfont">{projects[3].title}</p>
    <p>{projects[3].description}</p>
    <img src={projects[3].image} alt={props.title}className="projectphoto" width='650px'></img>
    <p>{projects[3].tech}</p>
    <a href="https://github.com/lilyshowlader/finch-collector" className="buttonlink2"> github </a> */}
    </div>
  );
}

export default ProjectPreview;