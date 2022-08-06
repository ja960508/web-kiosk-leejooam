function getCurrentDate() {
  return DateToYYYYMMDD(new Date());
}

function DateToYYYYMMDD(date: Date) {
  return date.toISOString().split('T')[0];
}

export default { getCurrentDate, DateToYYYYMMDD };
