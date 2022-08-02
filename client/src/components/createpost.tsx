import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'

interface CreatePosts {

}

function CreatePost(props: any){


    const [title, updateTitle] = useState('')
    const [company, updateCompany] = useState('')
    const [jobField, updateJobField] = useState('')
    const [salaryType, updateSalaryType] = useState('')
    const [minSalary, updateMinSalary] = useState('')
    const [maxSalary, updateMaxSalary] = useState('')
    const [info, updateInfo] = useState('')
    const [owner, updateOwner] = useState(props.user_id)

    // const [form, updateForm ] = useState({
    //     title: "", 
    //     company: "", 
    //     jobField: "", 
    //     salary: {
    //         salaryType: "",
    //         minSalary: "",
    //         maxSalary: ""
    //     },
    //     info: "", 
    //     owner: props.user._id
    // })
    const navigate = useNavigate()

    // console.log(form)

    let jobTypes = ["Engineering", "Software Development", "Culinary", "Retail", "Business", "Education", "Government"];

    async function handleSubmit(){
        console.log('test')

        let form = {
            title: title, 
            company: company, 
            jobField: jobField,
            salary: {
                salaryType: salaryType, 
                minSalary: minSalary, 
                maxSalary: maxSalary
            }, 
            info: info,
            owner: owner,
        }
        
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
                    <Form.Control type="text" placeholder="Enter the postion's title" onChange={(e) => updateTitle(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" placeholder="The comapany's name" onChange={(e) => updateCompany(e.target.value)}/>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Job Type</Form.Label>
                    <Form.Select onChange={(e) => updateJobField(e.target.value)}>
                        {jobTypes.map((entry) => {
                            return(<option value={entry}>{entry}</option>)
                        })}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Salary Details</Form.Label>
                    <Form.Select onChange={(e) => updateSalaryType(e.target.value)}>
                        <option>Choose salary type</option>
                        <option value='Hourly'>Hourly</option>
                        <option value='Yearly'>Yearly</option>
                    </Form.Select>
                    <Form.Control type="text" placeholder="Minimum Salary" onChange={(e) => updateMinSalary(e.target.value)}/>
                    <Form.Control type="text" placeholder="Maximum Salary" onChange={(e) => updateMaxSalary(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Job Description</Form.Label>
                    <Form.Control type="text" placeholder="Brief job description" onChange={(e) => updateInfo(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" onClick={handleSubmit} >
                    Submit
                </Button> 

                
            </Form>
        </Container>
    )
}

export default CreatePost