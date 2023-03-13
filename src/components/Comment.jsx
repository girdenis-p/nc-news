import "./Comment.css"

function Comment({ comment }) {
  return (
    <li className="Comment">
      <section className="CommentAuthorInfo">

      </section>
      <p>{comment.body}</p>
    </li>
  )
}

export default Comment