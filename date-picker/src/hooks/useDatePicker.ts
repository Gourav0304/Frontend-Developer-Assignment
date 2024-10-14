import { useEffect, useState } from "react";

type DateRange = [string, string] | null;

const useDatePicker = (
  onChange: (dateRange: DateRange, weekends: string[]) => void
) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const isWeekday = (date: Date): boolean => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  //   const formatDate = (date: Date): string => {
  //     return date.toISOString().split("T")[0];
  //   };

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleDateClick = (date: Date) => {

    if (!isWeekday(date)) return;

    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (date >= startDate) {
        setEndDate(date);
      } else {
        setStartDate(date);
      }
    }
  };

  const getWeekendsInRange = (start: Date, end: Date): string[] => {
    const weekends: string[] = [];
    let current = new Date(start);

    while (current <= end) {
      if (!isWeekday(current)) {
        weekends.push(formatDate(current));
      }
      current.setDate(current.getDate() + 1);
    }

    return weekends;
  };

  useEffect(() => {

    if (startDate && endDate) {
      const formattedStart = formatDate(startDate);
      const formattedEnd = formatDate(endDate);
      const weekends = getWeekendsInRange(startDate, endDate);

      onChange([formattedStart, formattedEnd], weekends);
    }
  }, [startDate, endDate, onChange]);

  return {
    currentMonth,
    setCurrentMonth,
    currentYear,
    setCurrentYear,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    formatDate,
    isWeekday,
    handleDateClick,
  };
};

export default useDatePicker;
