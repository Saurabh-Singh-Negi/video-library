import React, { useEffect, useState } from 'react'
import axios from 'axios';
import VideoList from './VideoList';
import { useNavigate } from 'react-router-dom';
const RelatedVideos = (props) => {
    const Navigate = useNavigate();
    const API = "AIzaSyDrJKy-El2EFOqYaUUFV2tYF_gvIHgx3Is";
    // const API = "AIzaSyBr_akvV1EDoV17q995dgTcbFtXG-up4gE";
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${props.id}&type=video&key=${API}&maxResults=5`)
        .then(res => {
            // console.log("result related",res.data.items);
            setData(res.data.items);
        })
        .catch(err => {
            console.log(err.message);
        })
    },[data]);

    const handleClick = (video) => {
        // console.log(video.id.videoId)
        Navigate(`/videos/${video.id.videoId}`);
    }
  return (
    <>
    {
        data.map((video) => (
            <div onClick={() => handleClick(video)}>
                <VideoList  key={video?.id?.videoId} data={video} />
            </div>
        ))
    }
    
    
    </>

  )
}

export default RelatedVideos