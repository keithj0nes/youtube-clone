import React from 'react';
import VideoListItem from './VideoListItem';


const VideoList = (props) => {

  return (
    <ul className="col-md-4 list-group">
      {
        props.videos.map((v, i) => {
          return <VideoListItem key={i} details={v} onVideoSelect={props.onVideoSelect}/>
        })
      }
    </ul>
  )
}

export default VideoList;
