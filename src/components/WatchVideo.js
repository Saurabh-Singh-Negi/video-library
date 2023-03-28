import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
const WatchVideo = ({info}) => {
    const [data, setData] = useState({info});
    console.log("data",data);
    const {id} = useParams();
    const VideoLink = "https://www.youtube.com/embed/" + id;
  return (
    <>    
    <iframe width="560" height="315" src={VideoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div>
        <h1>{info?.ele?.snippet?.title}</h1>
    </div>
    </>
    
  )
}

export default WatchVideo