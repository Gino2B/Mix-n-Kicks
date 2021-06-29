import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new">Create A Post</Link>
      {/* <Link to="/about">About me</Link> */}

      {/* placeholders  */}
      <Link to="/comment">Create A Comment</Link>
      <Link to="/posts/1">A post</Link>
    </nav>
  );
}

export default Navbar;
