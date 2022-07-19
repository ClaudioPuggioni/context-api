import { useContext } from "react";
import UserContext from "../contexts/UserContext.js";
import SubSubChildComponent from "./SubSubChildComponents.jsx";

export default function SubChildComponent(props) {
  let contextData = useContext(UserContext);

  return (
    <div className="sub-child">
      <div id="left">
        <h3>This is Sub Child Component</h3>
        <h4>User Name: {contextData.userDetails.name}</h4>
        <h4>User Age: {contextData.userDetails.age}</h4>
      </div>
      <SubSubChildComponent />
    </div>
  );
}
