import React from 'react'
import { Form, Button, Container } from "react-bootstrap"

import { useState} from "react"
import { useNavigate } from "react-router-dom"

function Signup(props){


    const [form, updateForm ] = useState({
        name: "", 
        title: "", 
        company: "", 
        info: ""
    })
    const navigate = useNavigate()

    console.log(form)
   
    async function handleSubmit(){
        if(form.name){
            console.log("Fetching")
            const response = await fetch(`http://localhost:3000/user/`,{
            //  const response = await fetch(`/user/`, {
                method: 'POST', 
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(form)
            })
            console.log("Fetched")
        }
        navigate('/home')
    }

    return(
        <Container >

            <Form>
                <Form.Group className="mb-3" style={{width: '85%'}}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" onChange={(e) => updateForm({name: e.target.value})}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Your Title" onChange={(e) => updateForm({title: e.target.value})}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" placeholder="Your Company" onChange={(e) => updateForm({company: e.target.value})}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Personal Bio</Form.Label>
                    <Form.Control type="text" placeholder="Tells about yourself" onChange={(e) => updateForm({info: e.target.value})}/>
                </Form.Group>


                <Button variant="primary" onClick={handleSubmit} >
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Signup