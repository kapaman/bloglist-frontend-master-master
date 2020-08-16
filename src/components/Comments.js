import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import {createloginformAction,setUserInfo} from '../reducers/loginFormReducer';
import { addCommentAction } from "../reducers/blogreducer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Comments = ({ blog }) => {
  const state = useSelector((state) => state);
  let realblog = state.blogs.find((el) => el.id === blog.id);
  //   const blogs = state.blogs;
  const dispatch = useDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target[0].value)
    const comment = event.target[0].value;
    if (comment.replace(/\s/g, "").length > 0) {
      dispatch(addCommentAction({ id: blog.id, comment: comment }));
    }
    event.target[0].value = "";
  };

  return (
    <div  className="container-fluid">
      <div style={{border:'1px solid rgb(151 190 232)',backgroundColor:'white',padding:'20px',margin:'35px 0'}}>

      <h2>Comments</h2>

              <div className="formComment">

      <Form onSubmit={onSubmit}>
        <Form.Group >
          <Form.Control type="text" style={{width:'100%'}} />
          {/* <Form.Text className="text-muted">Comments are anonymous.</Form.Text> */}
        </Form.Group>
        <div>
        <Button variant="primary" type="submit">
          add comment
        </Button>

        </div>
      </Form>
      </div>
      <ul style={{ margin: "20px 0" }}>
        {realblog.comments.map((el) => (
          <li key={el.length * Math.random() * 100}>{el}</li>
          ))}
      </ul>
          </div>
    </div>
  );
};
export default Comments;
