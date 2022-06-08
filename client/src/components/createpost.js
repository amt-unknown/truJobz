import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'

function CreatePost(props){



    const [form, updateForm ] = useState({
        title: "", 
        company: "", 
        jobField: "", 
        salary: {
            salaryType: "",
            minSalary: "",
            maxSalary: ""
        },
        info: "", 
        owner: props.user._id
    })
    const navigate = useNavigate()

    console.log(form)

    let jobTypes = ["Engineering", "Software Development", "Culinary", "Retail", "Business", "Education", "Government"];

    async function handleSubmit(){
        console.log('test')
        
        console.log("Fetching")
        const response = await fetch(`http://localhost:3000/posting/`,{
        //  const response = await fetch(`/posting/`, {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        console.log("Fetched")
        
        navigate('/home')
    }

    return(
        <Container >
            <Form>
                <Form.Group className="mb-3" style={{width: '85%'}}>
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter the postion's title" onChange={(e) => updateForm({title: e.target.value})}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" placeholder="The comapany's name" onChange={(e) => updateForm({company: e.target.value})}/>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Job Type</Form.Label>
                    <Form.Select onChange={(e) => updateForm({jobField: e.target.value})}>
                        {jobTypes.map((entry) => {
                            return(<option value={entry}>{entry}</option>)
                        })}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Salary Details</Form.Label>
                    <Form.Select onChange={(e) => updateForm({salary: {salaryType: e.target.value}})}>
                        <option>Choose salary type</option>
                        <option value='Hourly'>Hourly</option>
                        <option value='Yearly'>Yearly</option>
                    </Form.Select>
                    <Form.Control type="text" placeholder="Minimum Salary" onChange={(e) => updateForm({salary: {minSalaray: e.target.value}})}/>
                    <Form.Control type="text" placeholder="Maximum Salary" onChange={(e) => updateForm({salary: {maxSalary: e.target.value}})}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Job Description</Form.Label>
                    <Form.Control type="text" placeholder="Brief job description" onChange={(e) => updateForm({info: e.target.value})}/>
                </Form.Group>

                <Button variant="primary" onClick={handleSubmit} >
                    Submit
                </Button> 

                
            </Form>
        </Container>
    )
}

export default CreatePost