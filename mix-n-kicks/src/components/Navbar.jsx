import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div id="left">
        <Link to="/">
          <h2>Mix'n Kicks</h2>
        </Link>
      </div>
      <div id="right">
        <Link to="/new">
          <h3>Create A Post</h3>
        </Link>
        <Link to="/about">
          <h3>About Me</h3>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
