import { Calendar as Cal, momentLocalizer } from "react-big-calendar";
import React from "react";
import moment from "../../lib/moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import { Container } from "./OverrideCalender.style.js";

// const DragAndDropCalendar = withDragAndDrop(Cal);
const DragAndDropCalendar = Cal;

const Calender = ({
  events = [],
  date,
  onNavigate,
  view,
  onView,
  views = {
    day: true,
    month: true,
    week: true,
    agenda: true,
  },
  getNow = () => new Date(),
  accessors,
  max,
  min,
  selectable = false,
  ...props
}) => {
  moment.locale("ko", {
    week: {
      dow: 1,
      doy: 1,
    },
  });
  const localizer = momentLocalizer(moment);
  let nowDate = `${new Date().getDate()} ${new Date().getMonth() + 1} ${new Date().getFullYear()}`;
  let currentDate = `${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()}`;
  return (
    <Container currentDate={currentDate === nowDate}>
      <DragAndDropCalendar
        {...{
          localizer,
          events,
          date,
          onNavigate,
          view,
          onView,
          views,
          getNow,
          accessors,
          selectable,
          min,
          max,
        }}
        resizable
        {...props}
      />
    </Container>
  );
};

export default Calender;
