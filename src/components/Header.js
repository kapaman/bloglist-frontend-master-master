import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createloginformAction,
  setUserInfo,
} from "../reducers/loginFormReducer";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import onSelect from 'react-bootstrap/Navbar'
import expanded from 'react-bootstrap/Navbar'
import expand from 'react-bootstrap/Navbar'

let manualChangeNav=()=>{
  let navtog=document.querySelector('.navbar-toggler')
  let divtog=document.querySelector('.navbar-collapse')
  let links=document.querySelectorAll('div.nav-item')
  console.log(divtog);
  links.forEach(el=>el.addEventListener('click',()=>{
    // navtog.className="navbar-toggler collapsed";
    divtog.className='navbar-collapse collapse';
  }))
}

const Header = ({loggedin}) => {
  // manualChangeNav();
  const [expanded, setExpanded] = useState(false);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  if(loggedin===false){
    return(
      <Navbar
        fixed="top"
        
        expand="lg"
        style={{ backgroundColor: "#c8d6e5"}}
      >
        <Navbar.Brand className="mr-auto" href="/">
          <img
            src="https://cdn.discordapp.com/attachments/690654883031941251/735125025551810590/logo.png"
            width="200"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Navbar>
    )
  }
else{



  return (
    <div>
      {/*  
         <Navbar fixed="top" style={{backgroundColor:'#c8d6e5',border:'2px solid #007bff'}}>
        <Navbar.Brand className="mr-auto" href="/">
      <img
        src="https://cdn.discordapp.com/attachments/690654883031941251/735125025551810590/logo.png"
        width="200"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
          <Nav style={{marginLeft:'20px'}} >
              <Nav.Item  style={{fontSize:'25px',marginRight:'15px'}} >
             
                 <Link to={`/users`}>users</Link>
                
                 </Nav.Item>
              <Nav.Item  style={{fontSize:'25px'}} >
                

                <Link to={`/blogs`}>blogs</Link>
                
              </Nav.Item>
            </Nav>
            <Nav inline>

              

      <h4 className="mr-sm-2" style={{margin:'10px 0',color:'white'}}> logged in as <b>{state.loginForm.user.username} </b></h4><Button 
      onClick={() => {
        window.localStorage.clear()
        dispatch(setUserInfo(null));
        dispatch(createloginformAction(({info:'',type:"SET_PASSWORD"})));
        dispatch(createloginformAction(({info:'',type:"SET_USERNAME"})))
      }} size="sm">logout</Button>


    </Nav>
        </Navbar> */}

      <Navbar
      expanded={expanded}
        
        fixed="top"
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#c8d6e5" }}
      >
        <Navbar.Brand className="mr-auto" href="/">
          <img
            src="https://cdn.discordapp.com/attachments/690654883031941251/735125025551810590/logo.png"
            width="200"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ justifyContent: "flex-end",color:'white' }}
        >
          <Nav >
            <Nav.Item  style={{ fontSize: "25px", marginRight: "15px" }} >
              <Link onClick={() => setExpanded(false)} style={{':hover':{textStyle:'none'}}} to={`/users`} >users</Link>
            </Nav.Item>
            <Nav.Item eventkey="2" style={{ fontSize: "25px", marginRight: "15px" }}>
              <Link onClick={() => setExpanded(false)} to={`/blogs`} style={{}} >
                blogs
              </Link>
            </Nav.Item>
          </Nav>
          <Nav inline>
            <h4
              className="mr-sm-2"
              style={{ margin: "10px 0", color: "#007bff" }}
            >
              {" "}
              logged in as <b>{state.loginForm.user.username} </b>
            </h4>
            <Button
              onClick={() => {
                window.localStorage.clear();
                dispatch(setUserInfo(null));
                dispatch(
                  createloginformAction({ info: "", type: "SET_PASSWORD" })
                );
                dispatch(
                  createloginformAction({ info: "", type: "SET_USERNAME" })
                );
              }}
              size="sm"
            >
              logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );}
};
export default Header;
