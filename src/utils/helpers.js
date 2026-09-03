import { getTimingsFor, PERIODS, toDateTime } from "../data/timings"

export function getPrayerTimes(date) {
  const raw = getTimingsFor(date)
  if (!raw) return null

  return raw.map((time, i) => ({
    raw,
    time,
    period: PERIODS[i],
    dateTime: toDateTime(date, time, PERIODS[i]),
  }))
}

export function getNextPrayer(prayers) {
  const now = new Date()

  for (let p of prayers) {
    if (p.dateTime > now) return p
  }

  return null
}