import React from "react";
import { Link, Route } from "react-router-dom";
function Navigation(props) {
  return (
    <div className="Navigation">
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/clock">Clock</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/welcome">Welcome</Link>
        </li>
        <li>
          <Link to="Jeopardy">Jeopardy</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navigation;
