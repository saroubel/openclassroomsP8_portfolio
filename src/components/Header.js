import axios from "axios";
import React, { useEffect, useState } from "react";
import LineIcon from "react-lineicons";
import { Link, NavLink } from "react-router-dom";
import { Image } from "./common/Image";

function Header() {
  const [information, setInformation] = useState("");
  const [navigationToggler, setNavigationToggler] = useState(false);

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  };

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
  }, []);

  return (
    <nav className={navigationToggler ? "mi-header is-visible" : "mi-header"}>

      <button onClick={handleNavigationToggler} className="mi-header-toggler">
        {!navigationToggler ? (
          <LineIcon name="menu" />
        ) : (
          <LineIcon name="close" />
        )}
      </button>

      <div className="mi-header-inner">
        <div className="mi-header-image">
          <Link to="/">
            <Image
              src={information.brandImage}
              placeholder="/images/about-image-placeholder.png"
              alt="brandimage"
            />
          </Link>
        </div>

        <ul className="mi-header-menu">
          <li>
            <NavLink to="/" end>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <span>A propos</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume">
              <span>Mon CV</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolios">
              <span>Mes projets</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
        
        <p className="mi-header-copyright">
          &copy; {new Date().getFullYear()}{" "}
          <b>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/saroubel"
            >
              BELLAF
            </a>
          </b>
        </p>
      </div>
    </nav>
  );
}

export default Header;
