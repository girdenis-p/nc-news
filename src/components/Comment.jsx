import UserInfo from "./UserInfo"
import "./Comment.css"
import { useContext, useEffect, useRef, useState } from "react"
import { UserContext } from "../contexts/User"

function Comment({ comment, setComments }) {
  const { loggedInUser } = useContext(UserContext);

  const [promptDeleteConfirmation, setPromptDeleteConfirmation] = useState(false);
  const [isPendingDelete, setIsPendingDelete] = useState(false);

  const [commentHeight, setCommentHeight] = useState(0);
  const [commentWidth, setCommentWidth] = useState(0);
  const commentRef = useRef(null);

  useEffect(() => {
    setCommentHeight(commentRef.current.clientHeight)
    setCommentWidth(commentRef.current.clientWidth)
  }, [])

  const handleDelete = () => {
    setIsPendingDelete(true) 
  }

  return (
    <>
      {
        isPendingDelete ?
        <li className="DeletedComment" style={{
          width: commentWidth,
          height: commentHeight
        }}>
          <p>Comment deleted</p>
        </li> :
        <li className="Comment" ref={commentRef}>
          <section className="CommentAuthorInfo">
            <UserInfo username={comment.author} precedingText="Comment by" />
          </section>
          <p>{comment.body}</p>
          {
            loggedInUser === comment.author ?
            <section className="DeleteCommentSection">
              {
                promptDeleteConfirmation ? 
                <>
                  <p>Are you sure you want to delete this comment?</p> 
                  <button className="ConfirmDeleteButton" onClick={handleDelete}>Yes</button>
                  <button className="ConfirmDeleteButton" onClick={
                    () => setPromptDeleteConfirmation(false)
                  }>No</button>
                </> :
                <button onClick={() => {
                  setPromptDeleteConfirmation(true)
                }}>Delete comment</button>
              }
            </section> :
            <></>
          }
        </li>
      }
    </>
  )
}

export default Comment