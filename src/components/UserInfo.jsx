import { useEffect, useState } from "react";
import { fetchUserByUsername } from "../utils/api";

import "./UserInfo.css"

function UserInfo({ username, precedingText }) {
  const [ author, setAuthor ] = useState(null);

  useEffect(() => {
    fetchUserByUsername(username)
      .then(user => {
        setAuthor(user);
      })
  }, [username])

  return (
    <>
      {
        author === null ?
        <p>Fetching user...</p> :
        <>
          <img src={author.avatar_url} alt="" className="UserAvatar"/>
          <p>{precedingText} {author.name}</p>
        </>
      }
    </>
  )
}

export default UserInfo;