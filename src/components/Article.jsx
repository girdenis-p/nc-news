import { useState } from "react";

import "./Article.css"

function Article({ article }) {
  const [author, setAuthor] = useState({"username":"jessjelly","name":"Jess Jelly","avatar_url":"https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141"})

  return (
    <article className="Article">
      <h2>{article.title}</h2>
      <img src={article.article_img_url} alt="" />
      <aside>
        <img src={author.avatar_url} alt={author.name}></img>
        <p>Article by {author.name}</p>
      </aside>
      <p>{article.body}</p>
    </article>
  )
}

export default Article;