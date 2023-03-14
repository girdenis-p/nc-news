import { useEffect, useState } from "react"
import { fetchCommentsByArticleId } from "../utils/api";
import Comment from "./Comment";

import "./Comments.css"

function Comments({ articleId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchCommentsByArticleId(articleId)
      .then(comments => {
        setComments(comments);
      })
  }, [articleId])

  return (
    <section className="Comments">
      <h3>Comments</h3>
      <ul>
        {
          comments.map(comment =>
              <Comment key={comment.comment_id} comment={comment} />
            )
        }
      </ul>
    </section>
  )
}

export default Comments;