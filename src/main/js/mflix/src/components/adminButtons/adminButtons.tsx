import { FormEvent } from "react";
import { Button, Col, Container, OverlayTrigger, Popover, Row } from "react-bootstrap";
import AdminForm from '../../components/AdminForm/AdminForm';

import './adminButtons.css'

const AdminButtons = (props: any) => {
    const addPopover = (
        <Popover>
            <Popover.Header as="h1" className="popoverTitle">
                Create a new Video
            </Popover.Header>

            <Popover.Body className="popOverBody">
                <div className='addForm d-flex align-items-center justify-content-center' style={{ color: 'white', }}>
                    <AdminForm type='add' cb={(e: any) => props.add(e) } />
                </div>
            </Popover.Body>
        </Popover >
    )

    const modifyPopover = (
        <Popover>
            <Popover.Header as="h1" className="popoverTitle">
                Enter Details
            </Popover.Header>

            <Popover.Body className="popOverBody">
                <div className='addForm d-flex align-items-center justify-content-center' style={{ color: 'white', }}>
                    <AdminForm type='modify' cb={(e: any) => props.modify(e)} />
                </div>
            </Popover.Body>
        </Popover >
    )


    const deletePopover = (
        <Popover>
            <Popover.Header as="h1" className="popoverTitle">
                Delete a Video
            </Popover.Header>

            <Popover.Body className="popOverBody">
                <div className='addForm d-flex align-items-center justify-content-center' style={{ color: 'white', }}>
                    <AdminForm type='delete' cb={(e: any) => props.delete(e)} />
                </div>
            </Popover.Body>
        </Popover >
    )

    return (
        <>
            <Container>
                <Row>
                    <div className="adminBox">
                        <Col className="d-flex align-items-center justify-content-center">
                            <OverlayTrigger trigger="click" placement="bottom" overlay={addPopover}>
                                <Button className="adminButtons" variant="success" size="lg"> Add </Button>
                            </OverlayTrigger>

                            <OverlayTrigger trigger="click" placement="bottom" overlay={modifyPopover}>
                                <Button className="adminButtons" variant="warning" size="lg"> Modify </Button>
                            </OverlayTrigger>

                            <OverlayTrigger trigger="click" placement="bottom" overlay={deletePopover}>
                                <Button className="adminButtons" variant="danger" size="lg"> Delete </Button>
                            </OverlayTrigger>
                        </Col>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default AdminButtons;