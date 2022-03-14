import { Button, FormControl, FormGroup, Nav, Navbar, Form } from "react-bootstrap";

import './navbar.css'
import '../../main.css'

const Bar = () => {
    const searchVideo = (e: any) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const data: any = Object.fromEntries(fd.entries());

        window.location.href = `/search/${data.searchBar}`;
    }

    return (<>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand className="navBrand" color="red" href="/">MFlix</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/admin">Admin</Nav.Link>
            </Nav>

            <Form onSubmit={searchVideo}>
            <FormGroup role="form" className="d-flex">
                <FormControl
                    id="formSearch"
                    name="searchBar"
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="danger" type="submit">Search</Button>
            </FormGroup>
            </Form>

        </Navbar>
    </>)
}

export default Bar;