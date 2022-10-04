export function formatDateFromDatabase(date: Date) {
  const [year, month, day] = date.toString().slice(2, 10).split('-')
  return `${month}/${day}/${year}`
}

export function formatDateFromForm(day: string, month: string, year: string) {
  const dateString = `${month}-${day}-${year}`
  const date = new Date(dateString)
  return date.toISOString()
}