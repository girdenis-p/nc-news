import UserInfo from "./UserInfo"

import "./Header.css"
import { useContext } from "react";
import { UserContext } from "../contexts/User";

function Header() {
  const { loggedInUser } = useContext(UserContext);

  return (
    <header className="Header">
      <h1>NC News</h1>
      <section className="LoggedInInfo">
        <UserInfo username={loggedInUser} precedingText="Logged in as" />
      </section>
    </header>
  )
}

export default Header;