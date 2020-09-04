import React, { Component } from "react";
import * as api from "../utils/api";

class Voter extends Component {
  state = {
    optaVotes: 0,
  };

  handleVote = (vote) => {
    api.patchVotes(this.props.article_id, vote, this.props.type);
    this.setState((currentState) => {
      return {
        optaVotes: currentState.optaVotes + vote,
      };
    });
  };

  render() {
    const { votes } = this.props;
    const { optaVotes } = this.state;

    return (
      <section>
        <button onClick={() => this.handleVote(1)} disabled={optaVotes === 1}>
          Like!
        </button>{" "}
        {votes + optaVotes}{" "}
        <button onClick={() => this.handleVote(-1)} disabled={optaVotes === -1}>
          DisLike!
        </button>
      </section>
    );
  }
}

export default Voter;
