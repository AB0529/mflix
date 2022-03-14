import { Button, Col, Container, Form, FormControl, FormGroup } from 'react-bootstrap';
import './AdminForm.css';

const AdminForm = (props: any) => {
    const deleteForm = (
        <Container>
                <Form onSubmit={props.cb}>
                    <FormGroup as={Col}>
                        <Form.Label className="addLabel">ID</Form.Label>
                        <FormControl
                            name="id"
                            type="text"
                            placeholder="l337"
                            aria-label="id"
                            required
                        />

                    </FormGroup>
                    <br />
                    <Button type="submit"  variant="success">Submit</Button>
                </Form>
        </Container>
    )

    const addForm = (
        <Container>
                <Form onSubmit={props.cb}>
                    <FormGroup as={Col}>
                        {props.type == 'modify' && (
                            <>
                                <Form.Label className="addLabel">ID</Form.Label>
                                <FormControl
                                    name="id"
                                    type="text"
                                    placeholder="l337"
                                    aria-label="id"
                                    required
                                />
                            </>
                        )}

                        <Form.Label className="addLabel">Title</Form.Label>
                        <FormControl
                            name="title"
                            type="text"
                            placeholder="Among Us"
                            aria-label="title"
                            required
                        />

                        <Form.Label className="addLabel">Description</Form.Label>
                        <FormControl
                            as="textarea"
                            name="description"
                            type="text"
                            placeholder="Sus"
                            aria-label="description"
                            required
                        />

                        <Form.Label className="addLabel">Image URL</Form.Label>
                        <FormControl
                            name="imageURL"
                            type="text"
                            placeholder="https://among.us/sus.jpg"
                            aria-label="imageURL"
                            required
                        />

                    </FormGroup>
                    <br />
                    <Button type="submit" variant="success">Submit</Button>
                </Form>
        </Container>
    )

    switch (props.type) {
        case 'modify':
        case 'add':
            return addForm;
        case 'delete':
            return deleteForm;
        default:
            return (<h1>No Form</h1>);

    }
};

export default AdminForm;