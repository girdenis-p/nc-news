import { useEffect, useRef, useState } from "react";
import { incVotesOnArticle } from "../utils/api";
import "./ArticleVoter.css"

function ArticleVoter({ articleId }) {
  const [err, setErr] = useState('');
  const [vote, setVote] = useState(+localStorage.getItem(`article${articleId}vote`) || 0);
  const prevVoteRef = useRef(vote);

  useEffect(() => {
    setErr('')
    incVotesOnArticle(articleId, vote - prevVoteRef.current)
      .then(() => {
        prevVoteRef.current = vote;
      })
      .catch((err) => {
        setErr("Something went wrong please try again")
        setVote(prevVoteRef.current);
        localStorage.setItem(`article${articleId}vote`, prevVoteRef.current.toString());
      })
    
    //Note if the local storage setItem was in a promise, then if the client leaves the page before it was resolved the local storage
    // would never be set. Assuming that the promise resolving is more likely than the promise rejecting, I have placed this outside the promise.
    localStorage.setItem(`article${articleId}vote`, vote.toString());
      
  }, [vote, articleId])

  const handleVote = (clickedVoteValue) => {
    return () => {
      setVote(currVote => {
        return currVote === clickedVoteValue ? 0 : clickedVoteValue
      })
    }
  }

  const voteStatus = 
    vote === 1 ? "liked" :
    vote === -1 ? "disliked":
    "haven't voted on"

  return (
    <section className="ArticleVoter">
      <h3>Vote on this article</h3>
      <p>You {voteStatus} this article</p>
      <p>{err}</p>
      <button onClick={handleVote(1)} className={
        vote === 1 ? "button--status-upvoted" : ""
      }>{
        vote === 1 ?
        "Liked" :
        "Like"
      }</button>
      <button onClick={handleVote(-1)} className={
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