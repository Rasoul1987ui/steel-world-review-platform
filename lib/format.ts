const TIME_ZONE = 'Asia/Tehran'

export function formatNumber(value: number, fractionDigits = 0) {
  return new Intl.NumberFormat('fa-IR', {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value)
}

export function formatSigned(value: number, fractionDigits = 0) {
  const sign = value > 0 ? '+' : value < 0 ? '−' : ''
  return `${sign}${formatNumber(Math.abs(value), fractionDigits)}`
}

export function formatPercent(value: number) {
  return `${formatSigned(value, 2)}٪`
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat('fa-IR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: TIME_ZONE,
  }).format(new Date(iso))
}

export function formatLongDate(iso: string) {
  return new Intl.DateTimeFormat('fa-IR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: TIME_ZONE,
  }).format(new Date(iso))
}

export function formatTime(iso: string) {
  return new Intl.DateTimeFormat('fa-IR', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
    timeZone: TIME_ZONE,
  }).format(new Date(iso))
}

export function formatReadingTime(minutes: number) {
  return `${formatNumber(minutes)} دقیقه مطالعه`
}
