import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new">Create A Post</Link>
      {/* <Link to="/about">About me</Link> */}
    </nav>
  );
}

export default Navbar;
