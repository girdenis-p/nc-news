import { useEffect, useState } from "react";
import { fetchArticlesData } from "../utils/api";
import ArticleCard from "./ArticleCard";

import './Articles.css'

function Articles() {
  const [articles, setArticles] = useState([]);
  const [totalArticleCount, setTotalArticleCount] = useState();

  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true)
    fetchArticlesData(page)
      .then(articlesData => {
        setArticles(currArticles => [...currArticles, ...articlesData.articles]);
        setTotalArticleCount(articlesData.total_count)

        setIsLoading(false);
      })
  }, [page])

  return (
    <main className="Articles">
      <h2>All Articles</h2>
      <ul>
      {
        articles.map(article =>
          <ArticleCard key={article.article_id} article={article} />
          )
        }
      </ul>
      {
        isLoading ? 
        <p>Fetching articles...</p> :
        totalArticleCount <= articles.length ?
        <p>There are no more articles!</p> :
        <button onClick={() => setPage(currPage => {
          return currPage + 1;
        })}>Fetch more articles</button> 
      }
    </main>
  )
}

export default Articles;