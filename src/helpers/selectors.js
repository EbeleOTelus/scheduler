
export function getAppointmentsForDay(state, day) {
  
  let Array = [];
  state.days.forEach(daysPick => {
    if (daysPick.name === day) {
      for (let appointmentid of daysPick.appointments) {
        Array.push(state.appointments[appointmentid]);
      }
    }
  });
  return Array;
}

export function getInterview(state, interview) {
  let interviewObject = {};

  if (!interview) {
    return null;
  }

  interviewObject = {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer]
  };
  return interviewObject;
}


export function getInterviewersForDay(state, day) {
  
  let InterviewerArray = [];
 
    state.days.forEach(daysPick => {
      if (daysPick.name === day) {
        for (let interviewerid of daysPick.interviewers) {
          InterviewerArray.push(state.interviewers[interviewerid]);
        }
      }
    });
   
  return InterviewerArray;
}