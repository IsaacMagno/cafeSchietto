const MONTHS_PT = [
  "JAN",
  "FEV",
  "MAR",
  "ABR",
  "MAI",
  "JUN",
  "JUL",
  "AGO",
  "SET",
  "OUT",
  "NOV",
  "DEZ",
] as const;

export function formatEventDate(dateString: string): {
  day: number;
  month: string;
} {
  const date = new Date(`${dateString}T12:00:00`);
  return {
    day: date.getDate(),
    month: MONTHS_PT[date.getMonth()] ?? "",
  };
}
