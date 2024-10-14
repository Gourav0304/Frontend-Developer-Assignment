type DateRange = [string, string] | null;

export type DatePickerProps = {
  onChange: (dateRange: DateRange, weekends: string[]) => void;
  predefinedRanges?: { label: string; range: DateRange }[];
}
