import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoList from './VideoList';
import { useNavigate } from 'react-router-dom'
const SearchResult = () => {
    const [data,setData] = useState([]);
    const { title } = useParams();
    const key = "AIzaSyBr_akvV1EDoV17q995dgTcbFtXG-up4gE";
    const BASE = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${title}&key=`
    useEffect(() => {
        axios.get(`${BASE}${key}`)
            .then(res=> {
                console.log(res.data.items);
                const result = res.data.items.map(item => (
                    {
                    ...item,
                    videoLink: "https://www.youtube.com/embed/" + item.videoId
                    }

                ))
                setData(result);
            })
            .catch(err => {
                console.log(err.message);
            })
    },[]);
    const navigate = useNavigate();
    const handleClick = (video) => {
        // console.log("event", video);
        navigate(`/videos/${video}`)
    }
  return (
    <>
    <div className='flex gap-1 flex-wrap justify-center'>
        {
            data.map(video => (
                <div onClick={() => handleClick(video.id.videoId)}>
                    <VideoList key={video.id} data={video} />
                </div>
                
            ))

        }
        </div>
    </>
  )
}

export default SearchResult