import React from 'react'

const VideoList = ({data}) => {
    
  return (
    <>
        {/* <iframe width="560" height="315"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        <img className='cursor-pointer'  src={data?.snippet?.thumbnails?.high?.url} alt="" />
    </>
  )
}

export default VideoList