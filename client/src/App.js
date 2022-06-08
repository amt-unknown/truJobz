import React from "react";
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
 
// We use Route in order to define the different routes of our application
import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
 
// We import all the components we need in our app
import Home from "./components/home"
import LogIn from "./components/login";
import Profile from "./components/profile"
import Signup from "./components/signup"
import Posting from "./components/posting"
// import posting from "../../server/models/posting";

const App = () => {
  const [user, setUser] = useState({
    name: "", 
    title: "", 
    company: "",
    info: "", 
    posting: ""
  });
  
  function renderList(items) {

    // async function checkUser(id){
    //   const response = await fetch(`http://localhost:3000/user/${id}`)
    //   if(!response.ok) {
    //     const message = `An error occurred: ${response.statusText}`
    //     window.alert(message)
    //     return;
    //   }

    //   const result = await response.json()
    //   console.log(result)
    //   return(result)
    // }

    return items.map(item => {

        // if(typeof(item.posting.owner)=="object"){
        //   let userCheck = checkUser(item.owner)
        //   if(userCheck.name){
        //     item.owner.name=userCheck.name
        //   } else {
        //     item.owner.name="Anonymous"
        //   }
        // }
        return (
          <Posting  posting={item} key={item._id}/>
        )
      }
    )
  }

  function LoggedIn(){
    if(user.name!==""){
      return(<div>
        <Nav activkey="/">
          <Nav.Item>
            <Nav.Link>
              <Link to="/home">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link >
              <Link to="/profile">Profile</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Container>
          
        </Container>
      </div>
      )
    } else {
      return(
        <Nav activkey="/">
          <Nav.Item>
            <Nav.Link>
              <Link to="/signup">Connect Now</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      )
    }
  }

 return (
   <div className="App">
      {LoggedIn()}
     <Routes>
       <Route exact path="/home" element={<Home renderList={renderList}/>} />
       <Route path="/profile" element={<Profile user={user} renderList={renderList}/>} />
       <Route path="/login" element={<LogIn setUser={setUser}/>} />
       <Route path="/signup" element={<Signup setUser={setUser}/>} />
     </Routes>
   </div>
 );
};
 
export default App;