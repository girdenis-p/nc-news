import { useEffect, useState } from "react";
import "./ArticleVoter.css"

function ArticleVoter({ articleId }) {
  const [vote, setVote] = useState(+localStorage.getItem(`article${articleId}vote`) || 0);



  useEffect(() => {
    localStorage.setItem(`article${articleId}vote`, vote.toString());
  }, [vote, articleId])

  const handleLike = () => {
    setVote(currVote => {
      return currVote === 1 ? 0 : 1;
    })
  }

  const handleDislike = () => {
    setVote(currVote => {
      return currVote === -1 ? 0 : -1;
    })
  }

  const voteStatus = 
    vote === 1 ? "liked" :
    vote === -1 ? "disliked":
    "haven't voted on"

  return (
    <section className="ArticleVoter">
      <h3>Vote on this article</h3>
      <p>You {voteStatus} this article</p>
      <button onClick={handleLike} className={
        vote === 1 ? "button--status-upvoted" : ""
      }>{
        vote === 1 ?
        "Liked" :
        "Like"
      }</button>
      <button onClick={handleDislike} className={
        vote === -1 ? "button--status-downvoted" : ""
      }>{
        vote === -1 ?
        "Disliked" :
        "Dislike"
      }</button>
    </section>
  )
}

export default ArticleVoter;