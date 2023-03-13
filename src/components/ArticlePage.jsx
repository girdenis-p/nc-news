import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Article from "./Article";
import { fetchArticleById } from "../utils/api"

import "./ArticlePage.css"
import Comments from "./Comments";


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
      <Comments />
    </main>
  )
}

export default ArticlePage;