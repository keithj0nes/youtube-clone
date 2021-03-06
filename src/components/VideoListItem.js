import React from 'react';

const VideoListItem = ({details, onVideoSelect}) => {

  const imgUrl = details.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item" onClick={()=>{onVideoSelect(details)}}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imgUrl} alt={details.snippet.title}/>

        </div>
        <div className="media-body">
          <div className="media-heading">
            {details.snippet.title}
          </div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
