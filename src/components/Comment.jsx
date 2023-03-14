import UserInfo from "./UserInfo"
import "./Comment.css"

function Comment({ comment }) {
  return (
    <li className="Comment">
      <section className="CommentAuthorInfo">
        <UserInfo username={comment.author} precedingText="Comment by" />
      </section>
      <p>{comment.body}</p>
    </li>
  )
}

export default Comment