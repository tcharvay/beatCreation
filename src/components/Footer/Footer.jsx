import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram, faSpotify, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons"; // Importa el icono de audífonos

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.youtube.com/@beatcreation" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="icon youtube" />
        </a>
        <a href="https://www.instagram.com/beatcstudio?igsh=MWNqbGlvYXcwNTUyNA==" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
        </a>
        <a href="https://open.spotify.com/intl-es/artist/2hWGvUMh3CyIxKvJp7mlFp" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSpotify} className="icon spotify" />
        </a>
        <a href="https://soundcloud.com/beatcstudio" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSoundcloud} className="icon soundcloud" />
        </a>
        <a href="https://www.beatport.com/artist/jp-velardi/763417?srsltid=AfmBOor7FgdkHjGmEo0-hU4NJ2DALM8s-qkuCemQHqe514nj6miY75GT" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faHeadphones} className="icon beatport" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;