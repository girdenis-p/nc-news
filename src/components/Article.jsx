import { useEffect, useState } from "react";
import { fetchUserByUsername } from "../utils/api";

import "./Article.css"

function Article({ article }) {
  const [author, setAuthor] = useState(null)

  useEffect(() => {
    fetchUserByUsername(article.author)
      .then(user => {
        setAuthor(user);
      })
  })

  return (
    <article className="Article">
      <h2>{article.title}</h2>
      <img src={article.article_img_url} alt="" />
      <aside>
        {
          author === null ?
          <p>Fetching author...</p> :
          <>
            <img src={author.avatar_url} alt={author.name}></img>
            <p>Article by {author.name}</p>
          </>
        }
      </aside>
      <p>{article.body}</p>
    </article>
  )
}

export default Article;