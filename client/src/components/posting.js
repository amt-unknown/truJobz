import React from 'react'
import { Card, Button } from 'react-bootstrap'

function Posting(props) {
    // console.log(props.posting.owner.name)
    // let name = props.posting.owner.name

    function earnings(){
        return `Earn up to $${props.posting.salary.maxSalary}${props.posting.salary.salaryType==="Hourly"?'/hr':'/yr'}!!`
    }

    
    
    return(
        <Card style={{width:'18rem'}}>
            <Card.Body>
                <Card.Title>
                    {props.posting.title + " at " + props.posting.company}
                </Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">
                    {"Posted By: " + props.posting.owner.name}
                </Card.Subtitle> */}
                <Card.Text>
                    {props.posting.info}
                </Card.Text>
                <Card.Text>
                    {earnings()}
                </Card.Text>
                {/* <Button variant="primary">Apply Now!</Button> */}
            </Card.Body>
        </Card>
    )

}

export default Posting