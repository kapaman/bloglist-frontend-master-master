import React from "react";
import { useSelector} from "react-redux";

import Button from 'react-bootstrap/Button'
const IndividualBlog = ({blog,handleRemove,handleLike}) => {

// const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const remButton=(blog1) => {
    // console.log(blog1.user[0].username);
    // console.log(state.loginForm);
    if(blog1.user[0].username===state.loginForm.user.username){
      return <Button variant="danger" id={blog1.id} onClick={handleRemove}> <i class="fa fa-trash-o" aria-hidden="true"></i> remove</Button>
    }

    return null
  }
 
  // const users = ()=>{
  //     return <li></li>
  // }
return (
  <div className="container-fluid" style={{backgrounColor:'#f1f1f1'}}>

    <div style={{border:'1px solid rgb(151 190 232)',padding:'20px',backgroundColor:'white',marginTop:'90px'}}>
        <h1 id="blog-heading" style={{fontWeight:'100'}}>{blog.title}</h1>
        <p style={{fontWeight:'100'}}>Author: {blog.author}</p>
        <p style={{marginTop:'1rem',overflow:'hidden'}}> <a href={blog.url} >{blog.url}</a></p>
        <p ><b className="likeCounter">{blog.likes}</b> likes <Button style={{margin:'5px'}} id={blog.id} size='sm' variant="success" onClick={handleLike} className="like"><i className="fa fa-thumbs-up" aria-hidden="true"></i> like</Button></p>
        <p>added by {blog.user[0].name}</p>
        {remButton(blog)}
  
    </div>
  </div>
  );
};
export default IndividualBlog;
