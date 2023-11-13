import dayjs from 'dayjs';

export const convertDateTime = (dateTime, pattern = 'HH:mm') =>
  dayjs(dateTime).format(pattern);
