import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import "./SortByForm.css"

function SortByForm() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [sortBy, setSortBy] = useState(searchParams.get("sort_by") || "created_at");
  const [order, setOrder] = useState(searchParams.get("order") || "desc");

  //This will change the values in the form back to default if the user changes topic
  //as queries reset when changing topic
  useEffect(() => {
   setSortBy(searchParams.get('sort_by') || "created_at") 
   setOrder(searchParams.get('order') || "desc")
  }, [searchParams])

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchParams({
      sort_by: sortBy,
      order
    })
  } 

  return (
    <form className="SortByForm" onSubmit={handleSubmit}>
      <label>
        <p>Sort By:</p>
        <select value={sortBy} onChange={e => {
          setSortBy(e.target.value)
        }}>
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
      </label>
      <label>
        <p>Order:</p>
        <select value={order} onChange={e => {
          setOrder(e.target.value)
        }}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
      <button type="submit">Sort</button>
    </form>
  )
}

export default SortByForm;