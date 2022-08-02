import React from 'react'
import styled from 'styled-components'

import {Container, Row} from "react-bootstrap"

// const Container = styled.div`
//     padding: 0px;
// `;

const Hero = styled.div`
    width: 100%;
    h1 {
        margin: 0;
        padding-bottom: 0;
        width: 100%;
        font-size: 50px;
        color: #0E87EA;
        font-weight: 200;
        line-height: 80px;
        @media-query (max-width: 768px) {
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }    
    
    img {
        width: 1000px;
        height: 800px;
        border-radius: 500px;
        right: -1px;
        position: absolute;
        bottom: -120px;
        align-items: center;
        @media-query (max-width: 768px) {
            top: 230px;
            width: initial;
            position: initial;
            height: initial;
        }
    }
`;

function Landing(props: any){
    return(
        <Container style={{width: '85%'}}>
            <Row>
                    <h1> Where finding you a job is our priority!</h1>
                    <img src="/images/background.jpg" alt="friendly woman with magnifying glass" />
            </Row>
        </Container>
    )
}

// CSS STYLING

//Using styled components to not do inline editing ( use styled components extension to ot see the styling as a string)




export default Landing