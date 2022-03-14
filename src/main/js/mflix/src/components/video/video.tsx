import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Video } from "../../interfaces";

import './video.css'

const _Video = (props: any) => {
    const [videos, setVideos] = useState<Array<Video>>([]);

    useEffect(() => {
        if (props.videos.length <= 0) {

        fetch("http://localhost:8080/api/videos/all")
            .then(res => {
                res.json().then(res => {
                    setVideos(res.result)
                });
            });
        } else {
            setVideos(props.videos);
        }
    }, []);

    return (<>
        {videos.length > 0 && (
            <Container>
                <Row className='videoCol g-2'>
                    {videos.map((v: Video) => {
                        return (
                            <Col sm={4} id={v.id} key={v.id}>
                                <div onClick={(e: any) => {
                                    window.location.href = `/player/${v.title}`;
                                }}>
                                    <Card className="card-01 height-fix">
                                        <Card.Img className="cardImg" variant="top" src={v.imageURL} alt="Card image cap" />
                                        <Card.ImgOverlay>
                                            <h4 className="card-title"><strong>{v.title}</strong></h4>
                                            <p className="card-text">{v.description}</p>
                                            <p className="card-text"><a className="fa fa-bookmark-o"></a><a className="fa fa-heart-o"></a></p>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )}
    </>)
}

export default _Video;