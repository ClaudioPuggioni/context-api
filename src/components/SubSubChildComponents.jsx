import { useContext } from "react";
import UserContext from "../contexts/UserContext.js";

export default function SubSubChildComponent(props) {
  let contextData = useContext(UserContext);

  return (
    <div id="right">
      <button
        style={{ height: "100px", width: "100px", color: "white", border: "none", borderRadius: "9001px", backgroundColor: "red", fontSize: "22px", fontWeight: "700", fontFamily: "advent pro", boxShadow: "1px 1px 10px rgb(198, 82, 0)", textShadow: "0px 0px 2px black" }}
        onClick={() => {
          let copyUserDetails = { ...contextData.userDetails };
          copyUserDetails.age = copyUserDetails.age + 1;
          contextData.setUserDetails(copyUserDetails);
        }}
      >
        Get Older
      </button>
    </div>
  );
}
