import { useContext, useState } from "react";
import UserInfo from "./UserInfo";
import { UserContext } from "../contexts/User"

import "./CommentAdder.css"
import { postCommentOnArticle } from "../utils/api";

function CommentAdder({ articleId, setComments }) {
  const { loggedInUser } = useContext(UserContext)
  
  const [err , setErr] = useState('');
  const [commentBody, setCommentBody] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setIsSubmitDisabled(true)
    setErr('');
    postCommentOnArticle(articleId, {commentBody, loggedInUser})
      .then(comment => {
        setComments(currComments => [comment, ...currComments])
      })
      .catch(() => {
        setErr('Something went wrong, please try again later.')
      })
      .finally(() => {
        setIsSubmitDisabled(false)
      })
  }

  return (
    <form className="CommentAdder" onSubmit={handleSubmit}>
      <p className="ErrorMessage">{err}</p>
      <section className="CommentAuthorInfo">
        <UserInfo username={loggedInUser} precedingText="Comment as"/>
      </section>
      <label>
        <p>Comment body:</p>
        <textarea required value={commentBody} onChange={e => {
          setCommentBody(e.target.value)
        }}></textarea>
      </label>
      <button type="submit" disabled={isSubmitDisabled}>Post comment</button>
    </form>
  )
}

export default CommentAdder;