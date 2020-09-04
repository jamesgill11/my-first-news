import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-firstapp-my-news.herokuapp.com/api",
});

export const getAllArticles = (topic, sort_by) => {
  return instance
    .get("/articles", { params: { topic, sort_by } })
    .then((res) => {
      return res.data.articles;
    });
};

export const getSingleArticle = (article_id) => {
  return instance.get(`/articles/${article_id}`).then((res) => {
    return res.data.articles[0];
  });
};

export const getArticleComments = (article_id) => {
  return instance.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const postComment = (article_id, username, body) => {
  return instance
    .post(`/articles/${article_id}/comments`, { username, body })
    .then((res) => {
      return res.data.comment;
    });
};

export const patchVotes = (article_id, inc_votes, type) => {
  return instance
    .patch(`/${type}/${article_id}`, { inc_votes: inc_votes })
    .then((res) => {
      return res.data;
    });
};

export const delComment = (comment_id) => {
  return instance
    .delete(`/comments/${comment_id}`, { params: { comment_id } })
    .then((res) => {
      return console.log("deleted");
    });
};
