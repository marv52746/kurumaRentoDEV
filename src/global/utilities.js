// utilities.js
export function formatDateString(inputDate) {
  const date = new Date(inputDate);
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const formattedDate = `${
    monthNames[date.getMonth()]
  } ${date.getDate()} ${date.getFullYear()}`;

  const hours = date.getHours() % 12 || 12; // Convert to 12-hour format
  const ampm = date.getHours() >= 12 ? 'pm' : 'am';
  const formattedTime = `${hours}:${
    (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
  } ${ampm}`;

  return `${formattedDate} - ${formattedTime}`;
}

export const formatTime = time => {
  return time
    ? time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
    : '';
};

export function formatDate(inputDate) {
  if (inputDate === null) {
    return null;
  }
  const date = new Date(inputDate);
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const formattedDate = `${
    monthNames[date.getMonth()]
  } ${date.getDate()} ${date.getFullYear()}`;

  return formattedDate;
}
