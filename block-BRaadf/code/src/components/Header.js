import { useContext } from "react";
import { userContext } from "./userContext";

function Header({ isDarkMode }) {
  let user = useContext(userContext);
  console.log(user);
  
  return (
    <h1 className={`heading ${user ? "heading-dark" : "heading-light"}`}>
      {user ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
