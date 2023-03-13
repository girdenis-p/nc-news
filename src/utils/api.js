import axios from "axios";

const newsApi = axios.create({
  baseURL: 'https://news-api-project.onrender.com/api'
})

export const fetchArticlesData = (page) => {
  return newsApi.get('/articles', {
    params: {
      limit: 10,
      p: page
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