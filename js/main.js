var shutdownmenuopen = false

if (location.search.includes('shutdown=true')) {
  shutdownmenuopen = true
  if (location.search.includes('delay=false')) {
    shutdownmsg(false)
  } else {
    shutdownmsg()
  }
}

document.addEventListener('contextmenu', event => event.preventDefault())

document.getElementById('user').onmouseenter = () => {
  document.getElementById('pfp').style = 'animation:pfphover .1s;border-color:#ffee00'
}

document.getElementById('user').onmouseleave = () => {
  document.getElementById('pfp').style = 'animation:pfpunhover .1s;'
}

document.getElementById('shutdown').onmouseenter = () => {
  document.getElementById('shutdowntext').style = 'text-decoration: underline;'
}

document.getElementById('shutdown').onmouseleave = () => {
  document.getElementById('shutdowntext').style = ''
}

function shutdownmsg(delay = true) {
  shutdownmenuopen = true
  document.getElementById('container').style.filter = 'grayscale(100%)'
  document.getElementById('container').style = 'filter:grayscale(100%);animation:jsgrayscale 1000ms;'
  if (delay) {
    setTimeout(() => {
      document.getElementById('powerdialogue').style.display = 'flex'
    }, 1000)
  } else {
    document.getElementById('powerdialogue').style.display = 'flex'
  }
}

document.getElementById('shutdownlink').onclick = shutdownmsg

document.getElementById('shutdowncancel').onclick = () => {
  shutdownmenuopen = false
  document.getElementById('container').style = ''
  document.getElementById('powerdialogue').style.display = 'none'
}

document.getElementById('user').onclick = () => {
  const sound = playSound('startup')
  document.getElementById('body').style.backgroundColor = '#000000'
  document.getElementById('jsstyle').innerHTML = ':root { cursor: url("assets/cursors/loading.png"), wait }'
  document.getElementById('body').style.height = '100vh'
  document.getElementById('container').style.filter = 'opacity(0%)'
  document.getElementById('container').style.animation = 'jsfadeout 1000ms'
  sound.onended = () => {
    location.href = './desktop/'
  }
}

document.getElementById('shutdownimg').onclick = shutdown
document.getElementById('shutdowntxt').onclick = shutdown
document.getElementById('restartimg').onclick = restart
document.getElementById('restarttxt').onclick = restart

document.getElementById('shutdownimg').onmouseenter = () => {
  document.getElementById('shutdowntxt').style.textDecoration = 'underline'
}
document.getElementById('shutdownimg').onmouseleave = () => {
  document.getElementById('shutdowntxt').style.textDecoration = ''
}

document.getElementById('restartimg').onmouseenter = () => {
  document.getElementById('restarttxt').style.textDecoration = 'underline'
}
document.getElementById('restartimg').onmouseleave = () => {
  document.getElementById('restarttxt').style.textDecoration = ''
}

function playSound(sound) {
  const Sound = new Audio(`assets/audio/${sound}.mp3`)
  Sound.play()
  return Sound
}

function shutdown() {
  const sound = playSound('shutdown')
  document.getElementById('powerdialogue').style.display = 'none'
  document.getElementById('body').style.backgroundColor = '#000000'
  document.getElementById('container').style.filter = 'opacity(0%)'
  document.getElementById('container').style.animation = 'jsfadeout 1000ms'
  sound.onended = () => {
    close() //If the windows was opened with javascript, close it
    location.href = 'about:blank' //If not then just redirect to about:blank
  }
}

function restart() {
  const sound = playSound('shutdown')
  document.getElementById('powerdialogue').style.display = 'none'
  document.getElementById('body').style.backgroundColor = '#000000'
  document.getElementById('container').style.filter = 'opacity(0%)'
  document.getElementById('container').style.animation = 'jsfadeout 1000ms'
  sound.onended = () => {
    location.reload()
  }
}

document.onkeyup = (key) => {
  if (shutdownmenuopen) {
    if (key.code == 'KeyR' && !key.altKey && !key.ctrlKey) {
      restart()
    } else if (key.code == 'KeyU' && !key.altKey && !key.ctrlKey) {
      shutdown()
    }
  }
}