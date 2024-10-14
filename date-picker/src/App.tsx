import './App.css'
import DatePicker from './components/datePicker/DatePicker';

function App() {
  const getLastWeekdays = (days: number): [string, string] => {
    const end = new Date();
    const start = new Date(end);
    let count = 0;
    
    while (count < days) {
      start.setDate(start.getDate()-1);
      count++;
    }
    
    const formatDate = (date: Date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
    
    return [formatDate(start), formatDate(end)];
  };

  const predefinedRanges = [
    { label: "Last 7 Days", range: getLastWeekdays(7) },
    { label: "Last 30 Days", range: getLastWeekdays(30) }
  ];

  const handleDateRangeChange = (dateRange: [string, string] | null, weekends: string[]) => {
    if (dateRange) {
      alert(`Selected Range : ${dateRange}`);
      alert(`Weekends in Range : ${weekends.length > 0 ? weekends.join(', ') : 'No weekends in this range'}`);
    } else {
      alert(`No date range selected`);
    }
  };

  return (
    <div className="App">
      <h1 className="calendar-heading">Your Own Custom Calendar</h1>
      <DatePicker
        onChange={handleDateRangeChange}
        predefinedRanges={predefinedRanges}
      />
    </div>
  );
};

export default App
