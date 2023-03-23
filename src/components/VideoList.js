import axios from 'axios';
import { useEffect,useState } from 'react';
const VideoList = () => {
    const [data,setData] = useState([]);
    // const API_KEY = process.env.REACT_APP_YT_API_KEY;
    // var res;
    // const getVideos = async() => {
    //     const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + API_KEY);
    //     const res = await data.json();
    //     console.log(res);
    // }

    // useEffect(() => {
    //     getVideos();
    // },[])
    useEffect(() => {
        axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyDrJKy-El2EFOqYaUUFV2tYF_gvIHgx3Is")
        .then(res => {
            console.log(res.data.items);
            setData(res.data.items);
            console.log("dataset", data);
        })
        .catch(error => {
            console.log(error.message)
        })
    },[])
    return (
        <>

            <div className='flex flex-wrap items-center justify-center gap-1'> 
            {
                data.map(item => (
                    <div className='w-[25%]'>
                        <img src={item?.snippet?.thumbnails?.high?.url} alt="" />
                    </div>
                ))
            }
            </div>

            
            <p>new item: {data[0]?.id}</p>
            <a href="https://www.youtube.com/watch?v=M412brAv-do">open youtube</a>
            

        </>
    )
}

export default VideoList;