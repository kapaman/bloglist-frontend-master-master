import React from 'react'
import {useSelector} from 'react-redux';

import ListGroup from 'react-bootstrap/ListGroup'
import {
  Link
} from "react-router-dom";
const Blog = ({ blog,handleLike,handleRemove }) => {
  const state = useSelector(state=>state);
  const username = state.loginForm.user.username;

  return (
    // <div style={blogStyle} className="blogDiv">
    //   {blog.title} by {blog.author}
    //   <Togglable buttonLabel="view" removeButton="hide">
    //     <div>
    //       <p>{blog.url}</p>
    //       <p ><b className="likeCounter">{blog.likes}</b> likes<button id={blog.id} onClick={handleLike} className="like">like</button></p>
    //       <p>{blog.user[0].name}</p>
    //     </div>
    //     {remButton(blog)}
    //   </Togglable>
    // </div>


  
    
      <ListGroup.Item ><Link to={`/blogs/${blog.id}`}>{blog.title}</Link></ListGroup.Item>
    // {/* <Togglable buttonLabel="view" removeButton="hide">
    //   <div>
    //     <p>{blog.url}</p>
    //     <p ><b className="likeCounter">{blog.likes}</b> likes<button id={blog.id} onClick={handleLike} className="like">like</button></p>
    //     <p>{blog.user[0].name}</p>
    //   </div>
    //   {remButton(blog)}
    // </Togglable> */}
  
  )
}
export default Blog
