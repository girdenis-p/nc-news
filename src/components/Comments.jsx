import { useEffect, useState } from "react"
import { fetchCommentsDataByArticleId } from "../utils/api";
import Comment from "./Comment";
import CommentAdder from "./CommentAdder";

import "./Comments.css"
import PageIncrementer from "./PageIncrementer";

function Comments({ articleId }) {
  const [comments, setComments] = useState([]);
  const [totalCommentCount, setTotalCommentCount] = useState();

  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true)
    fetchCommentsDataByArticleId(articleId, page)
      .then(commentsData => {
        setComments(currComments => [...currComments, ...commentsData.comments]);
        setTotalCommentCount(commentsData.total_count);
        setIsLoading(false)
      })
  }, [articleId, page])

  return (
    <section className="Comments">
      <h3>Comments</h3>
      <CommentAdder articleId={articleId} setComments={setComments} />
      <ul>
        {
          comments.map(comment =>
              <Comment key={comment.comment_id} comment={comment} />
            )
        }
      </ul>
      {totalCommentCount === 0 ?
      <p className="NoCommentMessage">No comments here</p> :
      <PageIncrementer listName="comments" listLength={comments.length} totalCount={totalCommentCount} isLoading={isLoading} setPage={setPage} />
      }
    </section>
  )
}

export default Comments;