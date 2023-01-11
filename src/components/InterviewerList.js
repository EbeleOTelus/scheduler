import React from "react"
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem"

const InterviewerList = (props) => {


  
  const listAvatar = props.interviewers.map((value) => {
return (
    <InterviewerListItem
      key={value.id}
      name={value.name}
      avatar={value.avatar}
      selected={value.id === props.interviewer}
      setInterviewer={() => {
        props.onClick(value.id)
      }}
    />
  );
});

  return (
    <section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
  <ul className="interviewers__list">{listAvatar}</ul>
</section>
  )
}


export default InterviewerList;