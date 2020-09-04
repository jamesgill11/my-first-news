import React, { Component } from "react";
import * as api from "../utils/api";
import ArticleComments from "./ArticleComments";
// import CommentAdder from "./CommentAdder";
import Voter from "./Voter";
import ErrorPage from "./ErrorPage";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    err: null,
  };
  componentDidMount() {
    this.getArticle()
      .then((article) => {
        this.setState({ article, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: { msg: response.data.msg, status: response.status },
        });
      });
  }

  getArticle = () => {
    return api.getSingleArticle(this.props.article_id);
  };

  render() {
    const { article, isLoading, err } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (err) return <ErrorPage />;
    return (
      <main>
        <section className="single__article">
          <h3>{article.title}</h3>
          <p>{article.body}</p>
          <p>votes: {article.votes}</p>
          <p>topic: {article.topic}</p>
          <p>author: {article.author}</p>
          <p>created_at: {article.created_at}</p>
          <p>comment_count: {article.comment_count}</p>
          <Voter article_id={article.article_id} votes={article.votes} />
          <br />
        </section>

        <section>
          <ArticleComments article_id={article.article_id} />
        </section>
      </main>
    );
  }
}

export default SingleArticle;
