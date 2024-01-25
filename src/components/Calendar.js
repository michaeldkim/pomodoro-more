// Calendar.js
import React from 'react';
import './Calendar.css'; // Import your CSS file for styling

const Calendar = () => {
  const renderCalendarRows = () => {
    const hours = Array.from({ length: 24 }, (_, index) => index); // 0 to 23 hours

    return (
      <div className="calendar-rows">
        {hours.map((hour) => (
          <div key={hour} className="calendar-row">
            <div className="hour-label">{`${hour}:00`}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h1>Good Morning</h1>
        <p>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
      <div className="scrollable-calendar">{renderCalendarRows()}</div>
    </div>
  );
};

export default Calendar;
