export const formatDate = (date: string) => {
  const dateParsed = new Date(date)

  return `${dateParsed.getDate()}/${dateParsed.getMonth() + 1}/${dateParsed.getFullYear()}`
}

export const formatDateYYYYMMDD = (date: string) => {
  const dateParsed = date ? new Date(date) : new Date()

  return `${dateParsed.getFullYear()}-${dateParsed.getMonth() + 1}-${dateParsed.getDate()}`
}
