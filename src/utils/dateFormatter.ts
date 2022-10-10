
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


export function dateWithHours(dateInput: string) {

  try {
    const date = dateInput.split(' ')[0];
    const hours = dateInput.split(' ')[1];

    return `${date2String(date)} - ${hours.slice(0, -3)}`

  } catch (error) {
    return new Error('Something went wrong, please check the date format!')
  }

}