
export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  // eslint-disable-next-line array-callback-return
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
   let interviewObject = {}

   if (!interview){
     return null;
    }
    
    interviewObject = {
      student: interview.student,
      interviewer: state.interviewers[interview.interviewer]
  }
return interviewObject
   }
  

