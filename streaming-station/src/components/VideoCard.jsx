import React, { useState } from "react";
import VideoEmbed from "./VideoEmbed";

export default function Video({ data }) {
  const { id, original_title, overview } = data;
  const [showVideo, setShowVideo] = useState(false);

  function handleMovieButton() {
    // Toggle the visibility of the VideoEmbed component
    setShowVideo(!showVideo);
  }

  return (
    <div
      style={{
        border: "3px solid black",
        borderRadius: "5px",
        margin: "8px",
        padding: "8px",
      }}
    >
      <span>
        <h2
          style={{
            display: "inline-block",
            fontSize: "1rem",
            marginRight: "24px",
          }}
        >
          Video Id:
        </h2>
        <strong>{id}</strong>
      </span>{" "}
      {/* Single space */}
      <div>
        <h2 style={{ display: "inline-block", fontSize: "1.5rem" }}>
          Video Title: {original_title}
        </h2>
      </div>
      <div>
        <h3>Video Overview:</h3> {overview}{" "}
      </div>
      <button onClick={handleMovieButton}>Play Movie</button>

      {/* Conditional rendering of VideoEmbed based on the state */}
      {showVideo && <VideoEmbed id={id} />}
    </div>
  );
}
