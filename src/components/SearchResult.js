import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoList from './VideoList';
import { useNavigate } from 'react-router-dom'
import SideBar from './SideBar';
const SearchResult = () => {
    const [data,setData] = useState([]);
    const { title } = useParams();
    // const key = "AIzaSyBr_akvV1EDoV17q995dgTcbFtXG-up4gE";
    const key = "AIzaSyDrJKy-El2EFOqYaUUFV2tYF_gvIHgx3Is";
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
    },[BASE]);
    const navigate = useNavigate();
    const handleClick = (video) => {
        // console.log("event", video);
        navigate(`/videos/${video}`)
    }

    const handleSearchChange = (newValue) => {
        
        console.log("from searchresult", newValue);
        
        navigate(`/searchresults/${newValue}`);
    }

  return (
    <>
    <div className="flex flex-row">
            <div className="flex flex-col h-screen border-2 border-red-500 justify-between w-200 pl-10">
                <SideBar handleSearchChange = {handleSearchChange}/>
            </div>
        <div className='flex gap-1 flex-wrap justify-center'>
        {
            data.map(video => (
                <div onClick={() => handleClick(video.id.videoId)}>
                    <VideoList key={video.id} data={video} />
                </div>
                
            ))

        }
        </div>
    </div>
    </>
  )
}

export default SearchResult