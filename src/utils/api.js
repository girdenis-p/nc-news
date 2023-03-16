import axios from "axios";

const newsApi = axios.create({
  baseURL: 'https://news-api-project.onrender.com/api'
})

export const fetchArticlesData = ({page, topic, sortBy, order}) => {
  return newsApi.get('/articles', {
    params: {
      limit: 10,
      p: page,
      topic,
      sort_by: sortBy,
      order
    }
  })
    .then(res => res.data);
}

export const fetchArticleById = (articleId) => {
  return newsApi.get(`/articles/${articleId}`)
    .then(res => res.data.article)
}

export const fetchUserByUsername = (username) => {
  return newsApi.get(`/users/${username}`)
    .then(res => res.data.user)
}

export const fetchTopics = () => {
  return newsApi.get(`topics/`)
    .then(res => res.data.topics)
}

export const incVotesOnArticle = (articleId, incVotes) => {
  return newsApi.patch(`articles/${articleId}`, {
    inc_votes: incVotes
  })
}

export const fetchCommentsDataByArticleId = (articleId, page) => {
  return newsApi.get(`/articles/${articleId}/comments`, {
    params: {
      limit: 10,
      p: page
    }
  })
    .then(res => res.data)
}

export const postCommentOnArticle = (articleId, {commentBody, loggedInUser}) => {
  return newsApi.post(`/articles/${articleId}/comments`, {
    body: commentBody,
    username: loggedInUser
  })
    .then(res => res.data.comment)
}

export const deleteCommentById = (commentId) => {
  return newsApi.delete(`comments/${commentId}`)
}