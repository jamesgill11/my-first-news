import React from "react";
import ArticlesList from "./components/ArticlesList";
import Title from "./components/Title";
import { Router } from "@reach/router";
import Nav from "./components/Nav";

import "./App.css";
import SingleArticle from "./components/SingleArticle";
import ErrorPage from "./components/ErrorPage";

class App extends React.Component {
  state = {
    user: "weegembump",
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Title />
        <Nav />
        <Router>
          <ArticlesList path="/" />
          <ArticlesList path="/articles/:topic" />
          <SingleArticle path="/article/:article_id" user={user} />
          <ErrorPage default status={404} msg={"Page not found"} />
        </Router>
      </div>
    );
  }
}

export default App;
