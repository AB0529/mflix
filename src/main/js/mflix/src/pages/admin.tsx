import Bar from "../components/navbar/navbar";

import AdminButtons from '../components/adminButtons/adminButtons'
import { useState } from "react";
import { Container } from "react-bootstrap";

const Admin = () => {
    const [ response, setResponse ] = useState({
        status: '',
        message: '',
        result: null,
    });

    const formReset = (target: any) => {
        const formData = new FormData(target);
        const formDataObj = Object.fromEntries(formData.entries());

        target.reset();
        return formDataObj;
    }
    
    const add = async (e: any) => {
        e.preventDefault();
        const data: any = formReset(e.target);
        const resp = await fetch('http://localhost:8080/api/videos/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        setResponse(await resp.json());
    }

    const modify = async (e: any) => {
        e.preventDefault();
        const data = formReset(e.target);
        const id = data.id;

        delete data.id;

        const resp = await fetch(`http://localhost:8080/api/videos/update/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        setResponse(await resp.json());
    }

    const del = async (e: any) => {
        e.preventDefault();
        const data = formReset(e.target);
        const resp = await fetch(`http://localhost:8080/api/videos/delete/${data.id}`, {
            method: 'DELETE'
        });

        setResponse(await resp.json());
    }

    return (
        <>
            <Bar />
            {(response.status === 'FOUND' || response.status === 'OK' || response.status === 'CREATED') && (
                <Container className="adminResponse d-flex align-items-center justify-content-center"
                    style={{
                        color: 'white',
                    }}
                >
                    <h1>{response.status} | {response.message}</h1>
                </Container>
            )}
            <AdminButtons add={add} delete={del} modify={modify} />
        </>
    )
}

export default Admin;