import UserInfo from "./UserInfo"
import "./Comment.css"
import { dateDiffFromNow } from "../utils/utils"

function Comment({ comment }) {
  return (
    <li className="Comment">
      <section className="CommentAuthorInfo">
        <UserInfo username={comment.author} precedingText="Comment by" />
        <p>Posted {dateDiffFromNow(new Date(comment.created_at))} ago</p>
      </section>
      <p>{comment.body}</p>
    </li>
  )
}

export default Comment