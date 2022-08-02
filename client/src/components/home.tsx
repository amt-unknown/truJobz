import React from "react";
import { useState, useEffect} from "react"
import { Container, Button} from "react-bootstrap";
import { Avatar } from '@mui/material'
import { Link } from "react-router-dom"

import Posting from "./posting";

function Home(props: any){
    const [postings, setPostings] = useState([])
    
 // This method fetches the records from the database.
    useEffect(() => {
        async function getPostings() {
            const response = await fetch(`http://localhost:3000/posting`)
            //  const response = await fetch(`/posting/`)

        
            if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
            }
        
            const postings = await response.json();
            setPostings(postings);
        }

        getPostings();
        return;
    }
    )

    return(
            <Container style={{width: '85%'}}>
                <div className="sidebar">
                    <img src=" " alt="" />
                    <Avatar />
                    <h2> {props.user.name}</h2>
                    <h3>{props.user.title}</h3>
                    <Link to="/createpost"><Button>Create a Post</Button></Link>
                </div>
                <hr/>
                <h3>New Posts</h3>
                <div className="jobPostings" style={{display: "flex"}}>
                    {props.renderList(postings)}
                </div>
                <br/>
            </Container>
    )
}

export default Home