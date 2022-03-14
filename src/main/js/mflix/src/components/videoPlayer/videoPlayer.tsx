import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

import './videoPlayer.css'

const videoPlayer = (props: any) => {
    console.log(`http://localhost:3000/videos/${props.title}.mp4`)

    return (
        <Container className="player d-flex border border-5 border-secondary align-items-center justify-content-center">
            <ReactPlayer volume={0.1} controls url={`/videos/${props.title}.mp4`} />
        </Container>
    )
}

export default videoPlayer;