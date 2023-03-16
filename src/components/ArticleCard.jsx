import { Link } from 'react-router-dom';
import { dateDiffFromNow } from '../utils/utils';

import './ArticleCard.css'

function ArticleCard({ article }) {
  return (
    <li className="ArticleCard">
      <Link to={`/articles/${article.article_id}`}>
        <img src={article.article_img_url} alt="" />
        <h3>{article.title}</h3>
        <p>{article.votes} votes</p>
        <p>{article.comment_count} comments</p>
        <p>Posted {dateDiffFromNow(new Date(article.created_at))} ago</p>
      </Link>
    </li>
  )
}

export default ArticleCard;