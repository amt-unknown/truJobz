import React from "react";
import Nav from "react-bootstrap/Nav"
 
// We use Route in order to define the different routes of our application
import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
 
// We import all the components we need in our app
import PostingList from "./components/posting_components/postingsList"
import LogIn from "./components/login";
import Profile from "./components/profile"
import Signup from "./components/signup"

const App = () => {
  const [user, setUser] = useState({
    name: "", 
    title: "", 
    company: "",
    info: "", 
    posting: ""
  });

  console.log(user.name)

 return (
   <div className="App">
      <Nav activeKey="/">
            <Nav.Item>
                <Nav.Link ><Link to="/">Postings</Link></Nav.Link>
            </Nav.Item>
            {user.name!==""? <Nav.Item>
                <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>
            </Nav.Item>: 
            <Nav.Item>
                <Nav.Link><Link to="/login">Login</Link></Nav.Link>
            </Nav.Item>}
        </Nav>
     <Routes>
       <Route exact path="/" element={<PostingList />} />
       <Route path="/profile" element={<Profile user={user}/>} />
       <Route path="/login" element={<LogIn setUser={setUser}/>} />
       <Route path="/signup" element={<Signup setUser={setUser}/>} />
     </Routes>
   </div>
 );
};
 
export default App;