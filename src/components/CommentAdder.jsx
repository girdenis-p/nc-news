import { useContext, useState } from "react";
import UserInfo from "./UserInfo";
import { UserContext } from "../contexts/User"

import "./CommentAdder.css"

function CommentAdder({ articleId }) {
  const { loggedInUser } = useContext(UserContext)

  const [commentBody, setCommentBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className="CommentAdder" onSubmit={handleSubmit}>
      <section className="CommentAuthorInfo">
        <UserInfo username={loggedInUser} precedingText="Comment as"/>
      </section>
      <label>
        <p>Comment body:</p>
        <textarea required value={commentBody} onChange={e => {
          setCommentBody(e.target.value)
        }}></textarea>
      </label>
      <button type="submit">Post comment</button>
    </form>
  )
}

export default CommentAdder;