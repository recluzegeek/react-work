import React, { useState } from 'react';

const VideoEmbed = ({id}) => {
  const videoUrl = `https://vidsrc.to/embed/movie/${id}`;

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        title="Embedded Video"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
