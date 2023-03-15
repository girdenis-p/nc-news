import { useState } from "react";

import "./SortByForm.css"

function SortByForm() {
  const [sortBy, setSortBy] = useState("date");
  const [order, setOrder] = useState("asc");

  return (
    <form className="SortByForm">
      <label>
        <p>Sort By:</p>
        <select value={sortBy} onChange={e => {
          setSortBy(e.target.value)
        }}>
          <option value="date">Date</option>
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