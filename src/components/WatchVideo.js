import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import RelatedVideos from './RelatedVideos';
const WatchVideo = () => {
    const [info, setInfo] = useState([]);
    const {id} = useParams();
    const API = "AIzaSyDrJKy-El2EFOqYaUUFV2tYF_gvIHgx3Is";
    // const API = "AIzaSyBr_akvV1EDoV17q995dgTcbFtXG-up4gE";
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
    <div className='flex'> 
        
        <div>
            <iframe width="560" height="315" src={VideoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h1>{info?.snippet?.title}</h1>
        </div>

        <div className='flex flex-wrap'>
            <RelatedVideos id={id}/>
            
        </div>
    </div>
    </>
    
  )
}

export default WatchVideo