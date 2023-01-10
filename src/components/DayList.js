import React from "react";
import DayListItem from "./DayListItem";

const DayList = (props) => {

  const daysValue = props.days;
  const listDays = daysValue.map((value) => {
return (
    <DayListItem
      key={value.id}
      name={value.name}
      spots={value.spots}
      selected={value.name === props.day}
      setDay={props.setDay}
    />
  );
});


  return (
    <ul>
      {listDays}
    </ul>
  );
};


export default DayList;