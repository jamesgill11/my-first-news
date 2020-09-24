import React, { Component } from "react";
import * as api from "../utils/api";

class CommentAdder extends Component {
  state = {
    username: "",
    body: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { username, body } = this.state;
    api.postComment(this.props.article_id, username, body).then((comment) => {
      this.props.addComments(comment);
    });
  };
  render() {
    return (
      <div>
        <h2 class="addercomment__title">Add new Comment</h2>
        <form onSubmit={this.handleSubmit} class="comment__form__adder">
          <label htmlFor="username" class="username">
            Username:{" "}
          </label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="body" class="comment">
            Comment:{" "}
          </label>
          <br />
          <textarea
            type="text"
            id="body"
            name="body"
            rows="4"
            cols="50"
            onChange={this.handleChange}
          ></textarea>

          <br />
          <button type="submit">Add Comment</button>
        </form>
      </div>
    );
  }
}

export default CommentAdder;
