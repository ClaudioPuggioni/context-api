import SubChildComponent from "./SubChildComponent";

export default function ChildComponent(props) {
    return (
      <div className="child">
        <h2>This is Child Component</h2>
        <SubChildComponent userDetails={props.userDetails}></SubChildComponent>
      </div>
    )
  }
