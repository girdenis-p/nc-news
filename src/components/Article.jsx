import "./Article.css"
import UserInfo from "./UserInfo";

function Article({ article }) {
  return (
    <article className="Article">
      <h2>{article.title}</h2>
      <img src={article.article_img_url} alt="" />
      <aside>
        <UserInfo username={article.author} precedingText="Article by" />
      </aside>
      <p>{article.body}</p>
    </article>
  )
}

export default Article;