import React from "react";
import { FaBeer } from "react-icons/fa";
import { FaContao } from "react-icons/fa";
import { FaDashcube } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <p className="posts">OLDER POSTS</p>
      <hr></hr>
      <div className="icons">
        <span className="iconed">
          <FaDashcube />
        </span>
        <span className="iconed">
          <FaContao />
        </span>
        <span className="iconed">
          <FaBeer />
        </span>
        <p>Copyright © Your Website 2019</p>
      </div>
    </div>
  );
}
export default Footer;