import React from 'react';

const VideoDetails = ({video}) => {
  console.log(video);

  if(!video){
    return "Loading...";
  }
  const videoId = video.id.videoId;
  const videoUrl = `http://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-details col-md-8">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={videoUrl}></iframe>
    </div>
      <div className="video-title"> {video.snippet.title}</div>
    </div>
  )
}

export default VideoDetails;
