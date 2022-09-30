export default function formatDateFromDatabase(date: Date) {
  const [year, month, day] = date.toString().slice(2, 10).split('-')
  return `${month}/${day}/${year}`
}