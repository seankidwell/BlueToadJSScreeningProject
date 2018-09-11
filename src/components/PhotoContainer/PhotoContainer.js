import React from 'react';

export default function PhotoContainer(props) {
  return (
    <div>
      <img alt='flickrPic' src={`https://farm${props.farmId}.staticflickr.com/${props.serverId}/${props.photoId}_${props.secret}_b.jpg`}/><br/>
    </div>
  )
}