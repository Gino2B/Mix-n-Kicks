import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  // whether or not the menu should be visible PERIOD
  // this will always be true when using desktop breakpoints
  const [visible, setVisible] = useState(true);
  // is the hamburger menu open?
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // if we're at desktop size
      if (window.innerWidth > 768) {
        // make the nav visible
        setVisible(true);
        // untoggle the hamburger menu
        setHamburger(false);
      } else {
        // otherwise...
        // make the nav invisible
        setVisible(false);
      }
    };
    // add an event listener to the resize event on the window
    window.addEventListener("resize", handleResize);
    // unmounts we'll remove that event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header>
      <FontAwesomeIcon
        icon={faHamburger}
        onClick={() => setHamburger(!hamburger)}
      />
      <nav style={{ display: visible || hamburger ? "flex" : "none" }}>
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
    </header>
  );
}

export default Navbar;
