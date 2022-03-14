import React from "react";
import Bar from "../components/navbar/navbar";
import Video from "../components/video/video";

import '../main.css'

const Home = () => {
   return (
    <>
        <Bar />
        <Video videos={[]}/>
    </>
   )
}

export default Home;