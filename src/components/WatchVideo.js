import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
const WatchVideo = () => {
    const [info, setInfo] = useState([]);
    const {id} = useParams();
    const API = "AIzaSyDrJKy-El2EFOqYaUUFV2tYF_gvIHgx3Is";
    const Base = `https://www.googleapis.com/youtube/v3/videos?&part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=`
    
    const VideoLink = "https://www.youtube.com/embed/" + id;
    useEffect(() => {
        axios.get(`${Base}${API}`)
        .then(res => {
            console.log(res.data.items);
            setInfo(...res.data.items);
        })
        .catch(err => {
            console.log(err.message);
        })
    },[])
  return (
    <>    
    <iframe width="560" height="315" src={VideoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div>
        <h1>{info?.snippet?.title}</h1>
    </div>
    </>
    
  )
}

export default WatchVideo