import { useState } from "react";
import ChildComponent from "./ChildComponent";
import UserContext from "../contexts/UserContext.js";

export default function UserDetailsComponent() {
  let [userDetails, setUserDetails] = useState({
    name: "Mayank",
    age: 30,
  });

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      <div className="parent">
        <h1>This is the Parent Component</h1>
        <ChildComponent userDetails={userDetails} />
      </div>
    </UserContext.Provider>
  );
}
