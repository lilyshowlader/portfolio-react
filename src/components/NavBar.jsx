import { Link } from "react-router-dom";

function NavBar() {
  return (
      <header className="App-header">
          <Link to='/'> home </Link>
          <Link to='/Projects'> projects </Link>
          <Link to='/Resume'> resume </Link>
          <Link to='/Contact'> contact </Link> 
          <Link to='/AboutMe'> about me </Link> 
      </header>
  )
}

export default NavBar;
