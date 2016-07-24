module.exports = Time

function Time (time = Date.now()) {
  const milliseconds = typeof time === 'number'
    ? time
    : time instanceof Date
      ? time.getTime()
      : (new Date(time)).getTime()

  const seconds = milliseconds / 1000
  const day = secondsToDay(seconds)

  return {
    year: dayToYear(day),
    month: dayToMonth(day),
    day,
    seconds
  }
}

// 1 day = 24 hours/day * 60 minutes/hour * 60 seconds/minute = 86400 seconds
function secondsToDay (seconds) {
  return seconds / 86400
}

// 1 month = 29.53 days
function dayToMonth (day) {
  return day / 29.5305891
}

// 1 year = 365.242189 days
function dayToYear (day) {
  return day / 365.2421897
}
