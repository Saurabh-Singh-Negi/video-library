import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SuggestedVideos = ({getInfo}) => {
    const navigate = useNavigate();
    // const API = "AIzaSyDrJKy-El2EFOqYaUUFV2tYF_gvIHgx3Is";
    const API = "AIzaSyBr_akvV1EDoV17q995dgTcbFtXG-up4gE";
    const Base = "https://www.googleapis.com/youtube/v3/videos?&part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=";

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${Base}${API}&maxResults=20`)    
        .then(res => {
            const result = res.data.items.map(item => ({
                ...item,
                VideoLink: "https://www.youtube.com/embed/" + item.id
            }));
            setData(result);
        })
        .catch(err => {
            console.log(err.message);
        })
    }, [])
    return (
        <>
            
            <div className="flex flex-wrap gap-2 justify-center">
                {
                    data.map(ele => (
                        <div onClick={() => {
                            navigate(`/videos/${ele.id}`)
                            }}
                            key={ele.id}>
                            <img className="h-[350px] cursor-pointer" src={ele?.snippet?.thumbnails?.high?.url} alt="" />
                            <p>{ele?.snippet?.title}</p>
                        </div>
                    ))
                }
            </div>
            
        </>
    )
}

export default SuggestedVideos;