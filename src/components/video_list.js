import React from 'react';
import VideoList_item from './video_list_item';


const VideoList = (props) => {

const video_items= props.videos.map((video) => {
   return <VideoList_item
     key={video.etag}
     video={video}
    onVideoClick= {props.onVideoSelect}/>
});

  return (
    <ul className="col-md-4 list-group">
    {video_items}
    </ul>
  )
}
export default VideoList;
