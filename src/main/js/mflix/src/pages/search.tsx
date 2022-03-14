import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Bar from "../components/navbar/navbar";
import Video from "../components/video/video";

import '../main.css'

const NotFound = () => {
    const query = useParams().query;
    const [videos, setVideos] = useState<any>([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/videos/search/${query}`)
        .then(res => {
            res.json().then(res => {
                setVideos(res.result)
            });
        });
    }, []);


   return (
    <>
        <Bar />
        <Video videos={videos}/>
    </>
   )
}

export default NotFound;