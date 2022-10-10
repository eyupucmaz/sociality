
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

export default function date2String(date: string) {

  try {
    const dateArray = date.split('-');
    const day = dateArray[2];
    const month = dateArray[1] as unknown as number;
    const year = dateArray[0];

    return `${day} ${months[month - 1]} ${year}`

  } catch (error) {
    return new Error('Date format is not correct!');
  }
}