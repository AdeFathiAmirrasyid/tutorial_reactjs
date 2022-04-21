import React, { Component, Fragment } from "react";
import { Form, Button } from "react-bootstrap";
import Post from "../../../component/post/Post";
import API from "../../../service";

export default class BlogPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      formBlogPost: {
        id: 1,
        title: "",
        body: "",
        userId: 1,
      },
      isUpdate: false,
    };
  }

  getPostAPI = () => {
    API.getNewsBlog().then((result) => {
      this.setState({
        post: result,
      });
    });
  };

  postDataToAPI = () => {
    API.postNewsBlog(this.state.formBlogPost).then((resp) => {
      this.getPostAPI();
      this.setState({
        formBlogPost: {
          id: 1,
          title: "",
          body: "",
          userId: 1,
        },
      });
    });
  };

  componentDidMount() {
    this.getPostAPI();
  }

  handleFormChange = (event) => {
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timestamp = new Date().getTime();
    if (!this.state.isUpdate) {
      formBlogPostNew["id"] = timestamp;
    }
    formBlogPostNew[event.target.name] = event.target.value;
    this.setState({
      formBlogPost: formBlogPostNew,
    });
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
  };

  handleRemove = (dataId) => {
    API.deleteNewsBlog(dataId).then((resp) => {
      this.getPostAPI();
    })
  };

  putDataToAPI = () => {
    API.updateNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id).then((resp) => {
      this.getPostAPI();
      this.setState({
        isUpdate: false,
        formBlogPost: {
          id: 1,
          title: "",
          body: "",
          userId: 1,
        },
      });
    });
  };

  handleUpdate = (dataId) => {
    console.log(dataId);
    this.setState({
      formBlogPost: dataId,
      isUpdate: true,
    });
  };

  render() {
    return (
      <Fragment>
        <h1>Blog Post</h1>
        <hr />
        <Form className="card p-3 col-md-7">
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={this.state.formBlogPost.title}
              placeholder="add title"
              onChange={this.handleFormChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Blog Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="body"
              value={this.state.formBlogPost.body}
              placeholder="add blog post"
              onChange={this.handleFormChange}
            />
          </Form.Group>
          <div className="col-md-3">
            <Button variant="outline-primary" onClick={this.handleSubmit}>
              Simpan
            </Button>
          </div>
        </Form>
        {this.state.post.map((post) => {
          return (
            <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />
          );
        })}
      </Fragment>
    );
  }
}
