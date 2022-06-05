import React from 'react'

function Profile(props){
    console.log(props.user.name)

    return(
        <div>
            Test {props.user.title}
        </div>
    )
}

export default Profile