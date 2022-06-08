import React from 'react'

function Profile(props){
    let posts = props.user.postings
    // console.log(props.user.postings)


    return(
        <div>

            <h1>{props.user.name}</h1>
            <h2>{props.user.title + " at " + props.user.company}</h2>
            <br/>
            <div>
                <h3>Your Posts</h3>
                {props.renderList(posts)}
            </div>
        </div>
    )
}

export default Profile