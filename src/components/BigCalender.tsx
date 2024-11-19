"use client";

import { calender, momentLocalizer, View, Views } from "react-big-calender";
import moment from "moment";
import "react-big-calender/lib/css/react-big-calender.css";
import { useState } from "react";

// Define the type for calender events
interface calenderEvent {
  title: string; // Title of the event
  start: Date;   // Start time of the event
  end: Date;     // End time of the event
}

const localizer = momentLocalizer(moment);

const BigCalender = ({ events }: { events: calenderEvent[] }) => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <calender
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
    />
  );
};

export default BigCalender;
