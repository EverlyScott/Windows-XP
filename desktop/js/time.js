var clock

function startclock() {
  document.getElementById('time').innerText = getTime()
  clock = setInterval(() => {
    document.getElementById('time').innerText = getTime()
  }, 5000)
}

function getTime() {
  var time = new Date().toLocaleTimeString()

  const timePeriod = genPeriod(time)
  time = time.split(':')
  time.pop()
  time = time.join(':')
  time = `${time} ${timePeriod}`
  return time
}

function genPeriod(time) {
  if (time.includes('AM') || time.includes('PM')) {
    return time.split(' ')[1]
  }
  return ''
}

export { startclock }