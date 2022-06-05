import React from "react";
import { useState, useEffect} from "react"

import Posting from "./posting";

const PORT = process.env.PORT || 3000

function PostingList(){
    const [postings, setPostings] = useState([])
    
 // This method fetches the records from the database.
    useEffect(() => {
        async function getPostings() {
            // const response = await fetch(`http://localhost:3000/posting`)
             const response = await fetch(`/user`);

        
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


    // This method will map out the records on the table
 function postingList() {
   return postings.map((posting) => {
     return (
       <Posting
         posting={posting}
         key={posting._id}
       />
     );
   });
 }
    return(
        <div className="jobPostings">
            {postingList()}
        </div>
    )
}

export default PostingList