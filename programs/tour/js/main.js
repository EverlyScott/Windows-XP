document.addEventListener('contextmenu', event => event.preventDefault())

document.getElementById('next').onclick = () => {
  if (document.getElementById('flash').checked) {
    parent.openProgram('tour/flash', '') || openProgram('tour/flash', '')
  } else if (document.getElementById('html').checked) {
    parent.openProgram('internet_explorer', 'path=../tour/html/default.htm') || openProgram('internet_explorer', 'path=../tour/html/default.htm')
  }
}

function openProgram(programUrl, params) {
  location.href = `../${programUrl}?${params}`
}

function closeProgram() {
  location.href = 'about:blank'
}

document.getElementById('cancel').onclick = () => {
  parent.closeProgram('tour')
}