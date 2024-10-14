import useDatePicker from "../../hooks/useDatePicker";
import renderCalendar from "../../utils/calendar";
import "./DatePicker.css";
import { DatePickerProps } from "./types";

const DatePicker = ({ onChange, predefinedRanges = [] }: DatePickerProps) => {
  const {currentMonth, setCurrentMonth, currentYear, setCurrentYear, startDate, setStartDate, endDate, setEndDate, formatDate, isWeekday, handleDateClick} = useDatePicker(onChange);

  return (
    <div className="center-container">
      <div className="weekday-date-range-picker">
      <div className="controls">
        <button onClick={() => setCurrentYear(currentYear - 1)}>&lt;</button>
        <span>{currentYear}</span>
        <button onClick={() => setCurrentYear(currentYear + 1)}>&gt;</button>
        <button onClick={() => setCurrentMonth((currentMonth + 11) % 12)}>
          &lt;
        </button>
        <span>
          {new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
          })}
        </span>
        <button onClick={() => setCurrentMonth((currentMonth + 1) % 12)}>
          &gt;
        </button>
      </div>
      <div className="calendar-day-names">
        <div className="day-name weekend">Sun</div>
        <div className="day-name">Mon</div>
        <div className="day-name">Tue</div>
        <div className="day-name">Wed</div>
        <div className="day-name">Thu</div>
        <div className="day-name">Fri</div>
        <div className="day-name weekend">Sat</div>
      </div>
      <div className="calendar-grid">{renderCalendar({ currentYear, currentMonth, startDate, endDate, formatDate, isWeekday, handleDateClick })}</div>
      <div className="predefined-ranges">
        {predefinedRanges.map((range, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (range.range && range.range[0] && range.range[1]) {
                setStartDate(new Date(range.range[0]));
                setEndDate(new Date(range.range[1]));
              } else alert(`Invalid range provided : ${range}`);
            }}
          >
            {range.label}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default DatePicker;