import { useEffect, useState } from "react";
import axios from 'axios';

const SuggestedVideos = () => {
    const API = "AIzaSyDrJKy-El2EFOqYaUUFV2tYF_gvIHgx3Is";
    const Base = "https://www.googleapis.com/youtube/v3/videos?&part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=";

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${Base}${API}&maxResults=10`)    
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
                        <div  key={ele.id}>
                            <iframe width="560" height="315" src={ele.VideoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    ))
                }
            </div>
            
        </>
    )
}

export default SuggestedVideos;