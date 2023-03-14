import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Article from "./Article";
import { fetchArticleById } from "../utils/api"

import "./ArticlePage.css"
import ArticleVoter from "./ArticleVoter";


function ArticlePage() {

  const {article_id: articleId} = useParams();

  const [article, setArticle] = useState(null);

  useEffect(() => {
    setArticle(null)
    fetchArticleById(articleId)
      .then(article => {
        setArticle(article)
      })
  }, [articleId])

  return (
    <main className="ArticlePage">
      {
        article === null ?
        <p>Fetching article...</p> :
        <Article article={article} />
      }
      <ArticleVoter articleId={articleId} />
    </main>
  )
}

export default ArticlePage;