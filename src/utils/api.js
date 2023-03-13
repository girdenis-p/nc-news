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