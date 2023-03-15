import { Link } from "react-router-dom";

import "./Nav.css"

function Nav() {
  return (
    <nav className="Nav">
      <Link to="/">All</Link>
      <Link to="/topics/coding">Coding</Link>
      <Link to="/topics/cooking">Cooking</Link>
      <Link to="/topics/football">Football</Link>
    </nav>
  )
}

export default Nav;