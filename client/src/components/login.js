import React from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import { useState} from "react"
import { useNavigate } from "react-router-dom"


function LogIn(props){

    const [form, updateForm ] = useState({
        name: "", 
        title: "", 
        company: "", 
        info: ""
    })
    const navigate = useNavigate()


   
    async function handleSubmit(){
        if(form.name){
            console.log("Fetching")
            // const response = await fetch(`http://localhost:3000/user/name/${form.name}`)
             const response = await fetch(`/user/name/${form.name}`);
            console.log("Fetched")
            let user = await response.json()
            console.log(user)
            if(user!==null){
                props.setUser(user)
                navigate("/")
            } else {
                navigate('/signup')
            }
        }
    }



    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" onChange={(e) => updateForm({name: e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit} >
                Submit
            </Button>
        </Form>
    )
}

export default LogIn