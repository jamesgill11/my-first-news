import React, { Component } from "react";
import * as api from "../utils/api";
import CommentAdder from "./CommentAdder";
import Voter from "./Voter";

class ArticleCommnets extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  componentDidMount() {
    this.getComments().then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  }
  getComments = () => {
    return api.getArticleComments(this.props.article_id);
  };

  addComments = (newComment) => {
    this.setState((currentState, prevState) => {
      return {
        comments: [newComment, ...currentState.comments],
      };
    });
  };

  deleteComments = (id) => {
    api.delComment(id);
    this.setState((prevState) => {
      return {
        comments: prevState.comments.filter((comment) => {
          return comment.comment_id !== id;
        }),
      };
    });
  };

  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) return <p>Loading....</p>;
    return (
      <div>
        <h3>Comments</h3>
        {comments.map((comment) => {
          return (
            <section className="comment__section" key={comment.comment_id}>
              <li className="comments__list">
                <p>Votes: {comment.votes}</p>
                <p> author: {comment.author}</p>
                <p>created at: {comment.created_at}</p>
                <p>{comment.body}</p>
                <button
                  onClick={() => {
                    this.deleteComments(comment.comment_id);
                  }}
                >
                  Delete
                </button>
                <br />
                <br />
                <Voter
                  article_id={comment.comment_id}
                  votes={comment.votes}
                  type={"comments"}
                />
              </li>
              <br />
            </section>
          );
        })}
        <section>
          <CommentAdder
            key={comments.comment_id}
            article_id={this.props.article_id}
            addComments={this.addComments}
          />
        </section>
      </div>
    );
  }
}

export default ArticleCommnets;
