import { DateInput } from "../dashboard/Dashboard.styles";

export const DateRange = ({ value, onClick }) => (
  <DateInput className="custom-date-picker-input" onClick={onClick}>
    {value || "Select Date"} {/* Display selected date or default text */}
  </DateInput>
);
