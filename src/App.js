import React, { useEffect } from "react";



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,useLocation,useHistory 
} from "react-router-dom";

import Togglable from "./components/Togglable";
import Notification from "./components/Notification";
import Form from "./components/Form";
import BlogsForm from "./components/BlogsForm";
import Header from './components/Header';
import IndividualBlogs from './components/IndividualBlog';

import { useDispatch, useSelector } from "react-redux";
import { usersAction } from "./reducers/usersReducer";
// import blogService from "./services/blogs";
 import usersService from "./services/users";

import { initBlogs,incVoteAction,removeBlog } from "./reducers/blogreducer";

import { setUserInfo } from "./reducers/loginFormReducer";
// import {userInfoAction} from './reducers/userInfoReducer';
import "./App.css";
import UsersView from "./components/UsersView";
import Comments from './components/Comments';
import IndividualUsers from "./components/IndividualUser";

const App = () => {

  const matchUser = useRouteMatch("/users/:id");
  const matchBlog = useRouteMatch("/blogs/:id");

  const state = useSelector((state) => state);

  // blog reducer
  // const [blogs, setBlogs] = useState([])
  //form reducer
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  //user reducer
  // const [user, setUser] = useState(null)
  //notification reducer
  // const [err, setError] = useState('')

  let dispatch = useDispatch();
  //initialising blog state with all the blogs
  useEffect(() => {
    dispatch(initBlogs());
  }, [dispatch]);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");
    if (loggedUserJSON) {
      let user = JSON.parse(loggedUserJSON);
      dispatch(setUserInfo(user));
    } else {
      dispatch(setUserInfo(null));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const users = await usersService.getAllUsers();
      dispatch(usersAction(users));
    };
    fetchData();
  }, []);

  const handleLike = async (event) => {
    const id = event.target.id.toString();
    let oldblog = state.blogs.find((el) => el.id === id);
    let newBlog = {
      ...oldblog,
      likes: oldblog.likes + 1,
    };

    try {
      //inc vote with redux
      dispatch(incVoteAction(newBlog));
    } catch (err) {
      console.log(err.message);
    }
  };


  const Forms = () => {
    return (
        <>
          <Form />
          <Header loggedin={false}/>
</>
    );
  };
  const handleRemove = async (event) => {
    const id = event.target.id.toString();
    let oldblog = state.blogs.find((el) => el.id === id);
    let check = window.confirm(
      "Are you sure you want to delete " + oldblog.title
    );
    if (check) {
      dispatch(removeBlog(oldblog));
    }
  };
  const individual =()=>{
    if(matchUser && state.users.length>0)
      return <IndividualUsers id={(matchUser.params.id)}/>
    }
  const individualBlogs =()=>{
      if(matchBlog && state.blogs.length>0){
        let blog=state.blogs.find(el=>el.id===matchBlog.params.id);
        if(blog){
          return  <div style={{backgroundColor:'#f1f1f1'}}> <IndividualBlogs handleRemove={handleRemove} handleLike={handleLike} blog={blog}/>
          <Comments blog={blog}/></div>}
        else{
          return <Redirect to="/blogs"/>  }
    }}
  const Notifications = () => {

    return (
    <div className="container-fluid" style={{backgroundColor:'#f1f1f1'}}>
      <Notification />
    </div>)
  };
  const Blogs = () => {
    return <BlogsForm />;
  };

  const UsersV = ()=>{
    return <UsersView />
  }
  const renderRouter = () => {
    if(!checkForUser()){
    return <Switch>
    <Route path ="/users/:id">{individual("/users/:id")}</Route>
    <Route path ="/blogs/:id">{individualBlogs("/blogs/:id")}</Route>
    <Route path="/users">{checkForUser()?<Redirect to="/login"/>:UsersV()}</Route>
    <Route path="/blogs">{checkForUser()?<Redirect to="/"/>:Blogs()}</Route>

    <Route path="/login">{checkForUser()?Forms():<Redirect to="/"/>}</Route>
    <Route path = "/">{checkForUser()?<Redirect to="/login"/>:<Redirect to="/blogs"/>}</Route>
    </Switch>
    }
    else{
    return <Switch>
      {/* TODO CHANGE any UNUSUAL URL TO /LOGIN*/}
    <Route path ="/">{Forms()}</Route>
    <Route><Redirect to="/"/></Route>
    </Switch>
  }}

  const checkForUser = (path) => {
    return !state.loginForm.user;
  };
 let margin=!checkForUser()?'90px':'10px';
  return (
    // <div className="container-fluid" style={{marginTop:margin,paddingLeft:'40px',paddingRight:'40px',backgroundColor:'#f1f1f1'}}>
     <div> 
      {Notifications()}
      {state.loginForm.user && state.users.length>0?<Header/>:null}
      {renderRouter()}
      {/* {!state.loginForm.user ? Forms() : Blogs()} */}
      {/* <UsersView/> */}
     </div>
  );
};

export default App;
