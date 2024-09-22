import { format, parseISO } from "date-fns";

export const formatTime = (dateString) => {
  const date = parseISO(dateString);
  return format(date, "hh:mm a");
};
