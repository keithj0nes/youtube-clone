import React from 'react';
import VideoListItem from './VideoListItem';


const VideoList = (props) => {

  console.log(props, 'props');
  return (
    <ul className="col-md-4 list-group">
      {
        props.videos.map((v, i) => {
          return <VideoListItem key={i} details={v}/>
        })
      }
    </ul>
  )
}

export default VideoList;
