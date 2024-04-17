import { DateInput } from "../dashboard/Dashboard.styles";

// select a time frame, according to which the results will be shows
export const DateRange = ({ value, onClick }) => (
  <DateInput className="custom-date-picker-input" onClick={onClick}>
    {value || "Select Date"} {/* Display selected date or default text */}
  </DateInput>
);
