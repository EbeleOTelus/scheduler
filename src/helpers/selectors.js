
export function getAppointmentsForDay(state, day) {

  let Array = [];
  for (let element of state.days) {
    if (day === element.name) {
      for (let id of element.appointments) {
        if (id === state.appointments[id].id)
          Array.push(state.appointments[id]);
      }
    }
  }
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

  const foundDay = state.days.find(d => day === d.name);
  if (state.days.length === 0 || foundDay === undefined) {
    return [];
  }
  return foundDay.interviewers.map((id) => state.interviewers[id]);
}





