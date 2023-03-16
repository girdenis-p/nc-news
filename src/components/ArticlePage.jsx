import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Article from "./Article";
import { fetchArticleById } from "../utils/api"

import "./ArticlePage.css"
import ArticleVoter from "./ArticleVoter";
import Comments from "./Comments";
import ErrorPage from "./ErrorPage";


function ArticlePage() {
  const [err, setErr] = useState(null);

  const { articleId } = useParams();

  const [article, setArticle] = useState(null);

  useEffect(() => {
    setErr(null);
    setArticle(null)
    fetchArticleById(articleId)
      .then(article => {
        setArticle(article)
      })
      .catch(({ response: res }) => {
        if (res.status === 404) {
          setErr({
            reason: "article not found",
            statusCode: 404
          })
        } else if (res.status === 400) {
          setErr({
            reason: "invalid article id",
            statusCode: 400
          })
        }
      })
  }, [articleId])

  return (
    <>
    {
      err === null ?
      <main className="ArticlePage">
      {
        article === null ?
        <p>Fetching article...</p> :
        <>
        <Article article={article} />
        <ArticleVoter articleId={articleId} />
        <Comments articleId={articleId} />
        </>
      }
      </main> :
      <ErrorPage reason={err.reason} statusCode={err.statusCode} />
    }
    </>
  )
}

export default ArticlePage;