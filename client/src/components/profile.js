import React from 'react'
import { Container } from 'react-bootstrap'
import { Avatar } from '@mui/material'

function Profile(props){
    let posts = props.user.postings
    // console.log(props.user.postings)


    return(
        <Container fluid style={{width: '85%'}}>

            <img src=" " alt="" />
            <Avatar />
            <h1>{props.user.name}</h1>
            <h2>{props.user.title + " at " + props.user.company}</h2>
            <br/>
            <div>
                <h3>Your Posts</h3>
                {props.renderList(posts)}
            </div>
        </ Container>
    )
}

export default Profile