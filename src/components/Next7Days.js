import React from "react";
import ListRender from "./ListRender";

const Next7Days = (props) => {
  const date = new Date();
  const next7DaysList = props.list.filter((task) => {
    const taskDate = new Date(task.date);
    const diffTime = taskDate.getTime() - date.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 1 && diffDays <= 7;
  });


  return (
    <div id="next-list">
      <ListRender list={next7DaysList}/>
    </div>
  );
};

export default Next7Days;
