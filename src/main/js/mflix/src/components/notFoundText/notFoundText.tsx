import { Col, Container, Row } from 'react-bootstrap'

import './notFoundText.css'

const NotFoundText = () => {
    return (
        <>
            <Container>
                <Col className="notFoundBox border d-flex align-items-center justify-content-center">
                    <Row>
                        <h1 className="notFoundText"> 404 NOT FOUND </h1>
                        <hr className="notFoundLine" />
                    </Row>
                </Col>
            </Container>
        </>
    )
}

export default NotFoundText;