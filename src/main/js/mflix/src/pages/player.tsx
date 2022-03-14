import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Bar from "../components/navbar/navbar";
import VideoPlayer from "../components/videoPlayer/videoPlayer";
import { Video } from "../interfaces";

import '../main.css'

const Player = () => {
    const query = useParams().query;
    
    return (
        <>
            <Bar />
            <VideoPlayer title={query}/>
        </>
    )
}

export default Player;