import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";


const InterviewerListItem = (props) => {
  const interviewersClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });

  

  const SelectedInterviewer = () => {
    if (props.selected) {
      return props.name;
    }
  }
    return (
    <li className={interviewersClass} onClick={props.setInterviewer}>
        <img
          className="interviewers__item-image"
          src={props.avatar}
          alt={props.name}
        />
        {SelectedInterviewer()}
      </li>
    );
  };


  export default InterviewerListItem;