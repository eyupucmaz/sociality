
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export function date2String(date: string) {


  const dateArray = date.split('-');
  const day = dateArray[2];
  const month = dateArray[1] as unknown as number;
  const year = dateArray[0];

  return `${day} ${months[month - 1]} ${year}`

}


export function dateWithHours(dateInput: string) {

  try {
    const date = dateInput.split(' ')[0];
    const hours = dateInput.split(' ')[1];

    return `${date2String(date)} - ${hours.slice(0, -3)}`

  } catch (error) {
    return "00 Jan 1999 - 00:00"
  }

}