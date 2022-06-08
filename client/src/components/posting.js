import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Posting(props) {
    // console.log(props.posting.owner.name)
    // let name = props.posting.owner.name

    function earnings(){
        return `Earn up to $${props.posting.salary.maxSalary}${props.posting.salary.salaryType==="Hourly"?'/hr':'/yr'}!!`
    }

    
    
    return(
        <Card>
            <Card.Body>
                <Card.Title>
                    {props.posting.title + " at " + props.posting.company}
                </Card.Title>
                <Card.Subtitle>
                    {"Posted By: " + props.posting.owner.name}
                </Card.Subtitle>
                <Card.Text>
                    {props.posting.info}
                </Card.Text>
                <Card.Text>
                    {earnings()}
                </Card.Text>
                <Button variant="primary">Apply Now!</Button>
            </Card.Body>
        </Card>
    )

}

export default Posting