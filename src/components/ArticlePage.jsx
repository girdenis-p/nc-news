import { useState } from "react";
import Article from "./Article";

import "./ArticlePage.css"


function ArticlePage() {

  const [article, setArticle] = useState({"author":"jessjelly","title":"Running a Node App","article_id":1,"body":"This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.","created_at":"2020-11-07T06:03:00.000Z","topic":"coding","votes":0,"article_img_url":"https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=700&h=700","comment_count":8});

  return (
    <main className="ArticlePage">
      <Article article={article} />
    </main>
  )
}

export default ArticlePage;