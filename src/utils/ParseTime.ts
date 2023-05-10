export default function ParseTime(second: number) {
  const mm = Math.floor(second / 60)
  const ss = second % 60
  return `${mm < 10 ? '0' + mm : mm}:${ss < 10 ? '0' + ss : ss}`
}