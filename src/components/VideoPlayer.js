import React from 'react';

const VideoPlayer = ({ videoUrl, title }) => {
  return (
    <div className="video-player" >
      <video controls width="350" height="440">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h5 className="video-title">{title}</h5>
    </div>
  );
};

export default VideoPlayer;
