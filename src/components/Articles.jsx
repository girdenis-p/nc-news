import { useEffect, useState } from "react";
import { fetchArticlesData } from "../utils/api";
import ArticleCard from "./ArticleCard";

import './Articles.css'
import PageIncrementer from "./PageIncrementer";

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
      <PageIncrementer listName="articles" listLength={articles.length} totalCount={totalArticleCount} isLoading={isLoading} setPage={setPage} />
    </main>
  )
}

export default Articles;