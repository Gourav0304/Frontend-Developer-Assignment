type calendarProps = {
  currentYear: number, 
  currentMonth: number,
  startDate: Date | null,
  endDate: Date | null,
  formatDate: (date: Date) => string,
  isWeekday: (date: Date) => boolean,
  handleDateClick: (date: Date) => void
}

const renderCalendar = ({ currentYear, currentMonth, startDate, endDate, formatDate, isWeekday, handleDateClick} : calendarProps) => {
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const startDay = firstDayOfMonth.getDay();
  const days = [];

  for (let i = 0; i < startDay; i++) {
    days.push(<div key={`empty-${i}`} className="empty-day" />);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentYear, currentMonth, i);
    const isSelected = (startDate && formatDate(date) === formatDate(startDate)) || (endDate && formatDate(date) === formatDate(endDate));

    const isWithinRange = startDate && endDate && date >= startDate && date <= endDate;

    const className = `day ${isWeekday(date) ? "weekday" : "weekend"} ${isSelected ? "selected" : ""} ${isWithinRange && isWeekday(date) ? "in-range" : ""}`;

    days.push(
      <div
        key={i}
        className={className}
        onClick={() => handleDateClick(date)}
      >
        {i}
      </div>
    );
  }

  return days;
};

export default renderCalendar;