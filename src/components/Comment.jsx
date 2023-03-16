import UserInfo from "./UserInfo"
import "./Comment.css"
import { useContext, useEffect, useRef, useState } from "react"
import { UserContext } from "../contexts/User"
import { dateDiffFromNow } from "../utils/utils"
import { deleteCommentById } from "../utils/api"

function Comment({ comment, setComments }) {
  const { loggedInUser } = useContext(UserContext);

  const [promptDeleteConfirmation, setPromptDeleteConfirmation] = useState(false);
  const [isPendingDelete, setIsPendingDelete] = useState(false);

  const [err, setErr] = useState(null);

  const [commentHeight, setCommentHeight] = useState(0);
  const [commentWidth, setCommentWidth] = useState(0);
  const commentRef = useRef(null);

  useEffect(() => {
    setCommentHeight(commentRef.current.clientHeight)
    setCommentWidth(commentRef.current.clientWidth)
  }, [])

  const handleDelete = () => {
    setIsPendingDelete(true)
    setErr(null)

    deleteCommentById(comment.comment_id)
      .then(() => {
        setComments(currComments => {
          const commentIndex = currComments.indexOf(comment)

          return currComments
            .slice(0, commentIndex)
            .concat(currComments.slice(commentIndex + 1))
        })
      })
      .catch(() => {
        setIsPendingDelete(false);
        setErr("Something went wrong, please try again later");
      })
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
            <p>Posted {dateDiffFromNow(new Date(comment.created_at))} ago</p>
          </section>
          <p>{comment.body}</p>
          {
            loggedInUser === comment.author ?
            <section className="DeleteCommentSection">
              {
                err === null ?
                null:
                <p className="ErrorMessage">{err}</p>
              }
              {
                promptDeleteConfirmation ? 
                <>
                  <p>Are you sure you want to delete this comment?</p> 
                  <button className="ConfirmDeleteButton" onClick={handleDelete}>Yes</button>
                  <button className="ConfirmDeleteButton" onClick={
                    () => {
                      setPromptDeleteConfirmation(false)
                      setErr(null)
                    }
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