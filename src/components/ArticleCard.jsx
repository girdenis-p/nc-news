import './ArticleCard.css'

function ArticleCard({ article }) {
  return (
    <li className="ArticleCard">
      <img src={article.article_img_url} alt="" />
      <h3>{article.title}</h3>
      <p>{article.votes} votes</p>
      <p>{article.comment_count} comments</p>
    </li>
  )
}

export default ArticleCard;