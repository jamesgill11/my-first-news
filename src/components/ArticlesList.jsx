import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
  };

  componentDidMount() {
    this.getArticles().then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.getArticles().then((articles) => {
        this.setState({ articles, isLoading: false });
      });
    } else if (this.state.sort_by !== prevState.sort_by) {
      this.getArticles().then((articles) => {
        this.setState({ articles, isLoading: false });
      });
    }
  }
  getArticles = () => {
    return api.getAllArticles(this.props.topic, this.state.sort_bywzws);
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ sort_by: value });
  };
  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <p>Loading...</p>;

    return (
      <main>
        <section className="topic__buttons">
          <Link to="/articles/football">
            <button>Football</button>
          </Link>
          <Link to="/articles/cooking">
            <button>Cooking</button>
          </Link>
          <Link to="/articles/coding">
            <button>Coding</button>
          </Link>
        </section>
        <section>
          <p>Sort By: </p>
          <select onChange={this.handleChange} name="dropdown" id="dropdown">
            <option value="created_at">created at</option>
            <option value="votes"> votes</option>
            <option value="comment_count">comment count</option>
          </select>
        </section>
        <div className="flex__container">
          {articles.map((article) => {
            return (
              <li className="articles__list" key={article.article_id}>
                <Link
                  to={`/article/${article.article_id}`}
                  className="article__title--link"
                >
                  <h2>{article.title}</h2>
                </Link>
                <h3>Topic:{article.topic}</h3>
                <h3>Author:{article.author}</h3>
              </li>
            );
          })}
        </div>
      </main>
    );
  }
}

export default ArticlesList;
