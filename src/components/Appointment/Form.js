import React from "react"
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";
import { useState, useEffect } from 'react';


const Form = (props) => {

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  const handleChange= (event) => {
    setStudent(event.target.value)
   
  }

  const reset = () => {
    setStudent("")
    setInterviewer(null)
  }

  const cancel = () => {
    reset()
    props.onCancel()
  }

  function validate(student, interviewer) {
    if (student === "") {
      setError("student name cannot be blank");
      return;
    }
    if (interviewer === null) {
      setError("Please select an interviewer");
      return;
    }
  
    props.onSave(student, interviewer);
  }

  useEffect(() => {
setError("")
  }, [interviewer, student])

  return (
    <main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete="off" 
   /* onSubmit={event => event.preventDefault()}*/>
      <input
        className="appointment__create-input text--semi-bold"
        name="name"
        type="text"
        placeholder="Enter Student Name"
        value={student}
        onChange={handleChange}
        data-testid="student-name-input"
      />
    </form>
    <section className="appointment__validation">{error}</section>
    <InterviewerList 
    interviewers={props.interviewers}
    value={interviewer}
  onChange={setInterviewer}
    />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={cancel}>Cancel</Button>
      <Button confirm onClick={() => validate(student, interviewer)}>Save</Button>
    </section>
  </section>
</main>

  )
}






export default Form;