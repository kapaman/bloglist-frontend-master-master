import React from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import {
  createloginformAction,
  login,
} from "../reducers/loginFormReducer";
import Button from 'react-bootstrap/Button'


const Form =(props) => {
let dispatch = useDispatch();
const state = useSelector(state=>state);
const onChange = ({ target }) => {
  target.name === "Password"
    ? dispatch(
        createloginformAction({ info: target.value, type: "SET_PASSWORD" })
      )
    : dispatch(
        createloginformAction({ info: target.value, type: "SET_USERNAME" })
      );
};


  const handleLogin = async (event) => {
    event.preventDefault();
    if (state.loginForm.username && state.loginForm.password) {
      dispatch(login(state.loginForm));
    }
  };

  return (
    <>
    {/* <div className="loginForm">

    <form onSubmit ={handleLogin}>
      <h1>
          Enter your details
      </h1>
      <div>
        
      <div>
          username
        <input type="text" name="Username" onChange ={onChange} id="username"></input>
      </div>
      <div>
        password
        <input type="password" name="Password" onChange ={onChange} id="password"></input>
      </div>
      <div>
        <Button type="submit" id="submit">Login</Button>
      </div>
      </div>
    </form> */}



    {/* </div> */}
        <div className="flex-container" >
        <div style={{borderRadius:'10px'}}>
           <p>Enter your details</p>
           <form onSubmit={handleLogin}>
             
              <input type='text' placeholder='username' name="Username" onChange={onChange}></input>
              <input type='password' placeholder='password' name="Password" onChange={onChange}></input>
              <div className='twice'>
                 <input value='login' type='submit'></input>
                 <input value='cancel' type='button'></input>
                 <div>
                 </div>
              </div>
           
           </form>
        </div>
     </div>
     </>
  )

}

{/* <div class="loginForm"><form><h1 style="
    text-align: center;
    color: #bdc3c7;
    border-bottom: 2px solid #bdc3c7;
    padding-bottom: 10px;
">Enter your details</h1><div style="
    padding: 80px 00px;
    display: flex;
    flex-direction: column;
"><div style="
"><input type="text" name="Username" id="username" placeholder="Enter username" style="
    width: 100%;
    background-color: #c8d6e5;
    border-radius: 10px;
"></div><div style="
    padding: 20px 0px;
"><input type="password" name="Password" id="password" placeholder="Enter password" style="
    width: 100%;
    background-color: #c8d6e5;
    border-radius: 10px;
"></div><div><button id="submit" type="submit" class="btn btn-primary">Login</button></div></div></form></div> */}


export default Form