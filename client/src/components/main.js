import React from 'react'
import styled from 'styled-components'

const Main= (props) => {
    return (
    <Container>
        <Article>
            <SharedActor>
            <a>
                <img src="/images/hiring.jpg" alt="" />
                <div>
                    <span>Google Full Stack Developer</span>
                    <span></span>
                    <span></span>
                </div>
            </a>
            </SharedActor>
        </Article>
    </Container>
    )
};



const Container = styled.div`
    grid-area: main;
`;

const CommonCard = styled.div`
 text-align: center;
 overflow: hidden;
 margin-bottom: 10px;
 background-color: #E2F4FC;
 border-radius: 10px;
 position: relative;
 border: none;
 box-shadow: -8px 7px 5px -7px rgba(0,0,0,0.75);
`;

const Article = styled(CommonCard)`
    padding: 0;
    margin: 0 0 10px;
    overflow: visible;

`
const SharedActor = styled.div`
    padding-right: 50px;
    flex-wrap: nowrap;
    padding: 10px 15px 0;
    margin-bottom: 10px;
    align-items: center;
    display: flex;

    img {
        width: 600px;
        height: 200px;
        border-radius: 10px;
        ;
    }
    & > div {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        flex-basis: 0;
        margin-left: 10px;
        overflow: hidden
        span{
            text-align: left;
        }
    }
`;

export default Main;