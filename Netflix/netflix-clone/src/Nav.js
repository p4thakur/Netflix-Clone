import React, { useEffect, useState } from "react";
import "./nav.css";

// upper part ,navigation logic
function Nav() {
  const [show, handleShow] = useState([]);
  //this pice of cide take care of when my nva baar will
  //popup black background
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    //remove listener to free resource  before returning
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    //keep nav class always and add nav_back when show =true
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
