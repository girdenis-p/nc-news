import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

import './Articles.css'

function Articles() {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    fetchArticles()
      .then(fetchedArticles => {
        setArticles(currArticles => [...currArticles, ...fetchedArticles]);
        setIsLoading(false);
      })
  }, [])

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
        null
      }
    </main>
  )
}

export default Articles;