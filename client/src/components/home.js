import React from "react";
import { useState, useEffect} from "react"
import { Container } from "react-bootstrap/lib/tab";
import styled from 'style-components'
import Leftside from './leftside.js'
import Main from './main.js'
import Posting from "./posting";

function Home(props){

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
        <>
            <div className="jobPostings">
                {props.renderList(postings)}
            </div>
            <Container>
                <Layout>
                    <Leftside/>
                    <Main/>
                </Layout>
            </Container></>
    )
}

/* Using grid template to create user box and feed as columns */ 
const Layout = styled.div`
  display: grid;
  grid-template-areas: 'leftside main';
  grid-template-columns: minmax(0, 5fr) minmax(0,15fr);
  column-gap: 30px;
  row-gap: 25px;
  grid-template-rows: auto;
  margin: 30px 0;
  @media (max-width: 768px) {
     display: flex;
     flex-direction: column;
     padding: 0 5px;
  }
`;


export default Home