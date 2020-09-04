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
    this.setState((prevState) => {
      return { comments: [newComment, ...prevState.comments] };
    });
  };

  deleteComments = (id) => {
    api.delComment(id);
    const idToRemove = this.state.comments;

    this.setState(() => {
      return { [idToRemove]: id, ...idToRemove };
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
                <Voter article_id={comment.comment_id} votes={comment.votes} />
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
