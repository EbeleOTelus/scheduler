import React from "react";
import DayListItem from "./DayListItem";

const DayList = (props) => {
  const daysValue = props.days;
  const listDays = daysValue.map((day) => {

    return (
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.value}
        setDay={props.onChange}
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