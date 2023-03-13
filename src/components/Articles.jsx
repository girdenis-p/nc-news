import { useState } from "react";
import ArticleCard from "./ArticleCard";

import './Articles.css'

function Articles() {
  const [articles, setArticles] = useState([{"author":"grumpy19","title":"The Notorious MSG’s Unlikely Formula For Success","article_id":34,"topic":"cooking","created_at":"2020-11-22T11:13:00.000Z","votes":0,"article_img_url":"https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700","comment_count":11},{"author":"tickle122","title":"The battle for Node.js security has only begun","article_id":12,"topic":"coding","created_at":"2020-11-15T13:25:00.000Z","votes":0,"article_img_url":"https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?w=700&h=700","comment_count":7},{"author":"grumpy19","title":"JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals","article_id":6,"topic":"coding","created_at":"2020-11-11T15:09:00.000Z","votes":0,"article_img_url":"https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?w=700&h=700","comment_count":11}])

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
    </main>
  )
}

export default Articles;