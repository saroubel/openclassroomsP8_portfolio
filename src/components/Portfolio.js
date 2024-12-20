import FsLightbox from "fslightbox-react";
import React, { useState } from "react";
import * as Icon from "react-feather";
import { Image } from "./common/Image";

function Portfolio(props) {
  const [toggler, setToggler] = useState(false);
  const { title, subtitle, imageUrl, largeImageUrl, url } = props.content;

  const handleToggler = (value) => {
    setToggler(value);
  };

  return (
    <div className="mi-portfolio mi-portfolio-visible">

      {/* box du projet cliquable */}
      <div className="mi-portfolio-image">
        <Image
          src={imageUrl}
          alt={title}
        />

        <ul>
          {!largeImageUrl ? null : (
            <li>
              <button onClick={() => handleToggler(!toggler)}>
                <Icon.ZoomIn />
              </button>
            </li>
          )}
          {url ? (
            <li>
              <a rel="noopener noreferrer" target="_blank" href={url}>
                <Icon.Link />
              </a>
            </li>
          ) : null}
        </ul>
      </div>

      {/* Nom du projet cliquable nous guider vers Github */}
      {!url ? (
        <h5>{title}</h5>
      ) : (
        <h5>
          <a rel="noopener noreferrer" target="_blank" href={url}> {title} </a>
        </h5>
      )}

      {/* Description du projet */}
      {subtitle ? <h6>{subtitle}</h6> : null}

      {/* photos détaillées du projet */}
      {!largeImageUrl ? null : (
        <FsLightbox toggler={toggler} sources={largeImageUrl} />
      )}

    </div>
  );
}

export default Portfolio;
