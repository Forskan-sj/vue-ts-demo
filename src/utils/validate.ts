
export function formatTime(val: any) {
  const year = val.getFullYear()
  const month = val.getMonth() + 1
  const day = val.getDate()
  const hh = val.getHours()
  const mm = val.getMinutes()
  const ss = val.getSeconds()
  let clock = year + '-'
  if (month < 10) {
    clock += '0'
  }
  clock += month + '-'
  if (day < 10) {
    clock += '0'
  }
  clock += day + ' '
  if (hh < 10) {
    clock += '0'
  }
  clock += hh + ':'
  if (mm < 10) {
    clock += '0'
  }
  clock += mm + ':'
  if (ss < 10) {
    clock += '0'
  }
  clock += ss
  return (clock)
}
