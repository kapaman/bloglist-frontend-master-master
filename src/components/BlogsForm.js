import React from "react";
import Togglable from "./Togglable";
import Blog from "./Blog";
import { useDispatch, useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addBlogAction, removeBlog } from "../reducers/blogreducer";

const BlogsForm = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const blogs = state.blogs;
  const loginForm = state.loginForm;
  const errors = state.error.errorMssg;

  const handleNewBlog = async (event) => {
    event.preventDefault();
    const object = {
      title: event.target[0].value,
      author: event.target[1].value,
      url: event.target[2].value,
    };
    event.target[0].value = "";
    event.target[1].value = "";
    event.target[2].value = "";
    dispatch(addBlogAction(object));
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

  const renderBlogList = () => {
    if (blogs.length > 0) {
      return blogs
        .sort((a, b) => b.likes - a.likes)
        .map((blog) => (
          <Blog key={blog.id} blog={blog} handleRemove={handleRemove} />
        ));
    }
  };
  if (loginForm) {
    return (
      <div
        style={{ marginTop: errors ? "0" : "12vh" }}
        id="mainBlogForm"
        className="container-fluid"
      >
        <div style={{ margin: "15px 0" }} id="needFlex">
          <div>
            <h1 style={{color:'#2e86de',fontWeight:'bolder'}}>Blogs</h1>
          </div>
          <div id="fullWidth">
            <Togglable buttonLabel="create">
              <div>
                {/* SET FORM HERE FOR BOOTSTRAP SHIT */}

                <Form onSubmit={handleNewBlog} className="formasd">
                  <h3>create new blog entry</h3>
                  <Form.Group>
                    {/* <Form.Label>title</Form.Label> */}
                    <Form.Control
                      name="title"
                      className="title"
                      placeholder="Enter title"
                      style={{marginTop:'1rem'}}
                    />
                  </Form.Group>

                  <Form.Group>
                    {/* <Form.Label>author</Form.Label> */}
                    <Form.Control
                      name="title"
                      className="title"
                      type="text"
                      placeholder="Enter author"
                    />
                  </Form.Group>
                  <Form.Group>
                    {/* <Form.Label>url</Form.Label> */}
                    <Form.Control
                      name="url"
                      className="url"
                      type="text"
                      placeholder="Enter url"
                    />
                  </Form.Group>
                  <Button id="create-blog" variant="primary" type="submit">
                    create
                  </Button>
                </Form>

                {/* sdfad */}
                {/* <form onSubmit={handleNewBlog} className="formasd">
              <h3>create new blog entry</h3>
              <div>title
                <input name ="title" className="title"></input>
              </div>
              <div>author
                <input name ="title" className="title"></input>
              </div>

              <div>url
                <input name ="url" className="url"></input>
              </div>

              <button id="create-blog">create</button>
            </form> */}
              </div>
            </Togglable>
          </div>
        </div>

        <ListGroup style={{ margin: "20px 0" }}>
          {renderBlogList()}
        </ListGroup>
      </div>
    );
  }
};

export default BlogsForm;
