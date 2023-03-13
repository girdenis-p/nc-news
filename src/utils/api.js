import axios from "axios";

const newsApi = axios.create({
  baseURL: 'https://news-api-project.onrender.com/api'
})

export const fetchArticles = () => {
  return newsApi.get('/articles', {
    params: {
      limit: 10,
      p: 1
    }
  })
    .then(res => res.data.articles);
}