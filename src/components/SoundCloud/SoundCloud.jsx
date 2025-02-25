import React from 'react'

const SoundCloudEmbed = ({ trackId }) => {
    const embedUrl = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
  
    return (
      <div style={{ width: "100%", textAlign: "center" }}>
        <iframe
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={embedUrl}
        ></iframe>
        <div
          style={{
            fontSize: "10px",
            color: "#cccccc",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            fontFamily:
              "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
            fontWeight: "100",
          }}
        >
          <a
            href="https://soundcloud.com/soundavenue"
            title="Sound Avenue"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            Sound Avenue
          </a>{" "}
          ·{" "}
          <a
            href="https://soundcloud.com/soundavenue/j-p-velardi-internal-depth"
            title="J.P. Velardi - Internal Depth  [Sound Avenue]"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            J.P. Velardi - Internal Depth [Sound Avenue]
          </a>
        </div>
      </div>
    );
  };
  
  export default SoundCloudEmbed;
