import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material';

const Leftside = (props) => {
    return (
        <Container> 
            <ArtCard >
                <UserInfo>
                    <Avatar/>
                    <a>
                        User Name
                        user.email@trujobz.com
                        Position: Software Engineer
                        Company: Cool Devz
                    </a>
                </UserInfo>
            </ArtCard>

        </Container>
    );
};



const Container = styled.div`
    grid-area: leftside;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #E2F4FC;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: -8px 7px 5px -7px rgba(0,0,0,0.75);
`;

const UserInfo = styled.div`
    font-weight: 600;
`;


export default Leftside;