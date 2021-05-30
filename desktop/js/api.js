const programs = document.getElementById('programs')

function openProgram(programUrl, params) {
  //Fetch application info file
  fetch(`../programs/${programUrl}/info.json`).then(res => res.json()).then((info) => {
    if (info.fullscreen === true) {
      const program = document.createElement('div')
      program.id = info.id
      program.classList = 'program'
      program.style = 'position:absolute;top:0px;right:0px;bottom:0px;left:0px;background:#ffffff;'
      const programBody = document.createElement('iframe')
      programBody.src = `../programs/${programUrl}?${params}`
      programBody.style = 'width:100%;height:100vh;border:none;'
      program.appendChild(programBody)
      programs.appendChild(program)
    } else {
      //TODO: allow the windows to be moved around
      //TODO: allow the windows to be resized
      const template = document.getElementById('program-template')
      const clone = template.content.cloneNode(true)
      const program = clone.getElementById('program')
      const window = clone.getElementById('window')
      const iframe = clone.getElementById('iframe')
      const titleBarText = clone.getElementById('titleBarText')
      const titleBarIcon = clone.getElementById('titleBarIcon')
      const titleBarControls = clone.getElementById('titleBarControls')
      program.id = info.id
      window.style = `width:${info['default-size'].width+6}px;height:${info['default-size'].height+29}px;z-index:100;`
      titleBarText.innerText = info.name
      if (info.icon) {
        titleBarIcon.src = `../programs/${info.id}/${info.icon}`
      }
      if (info['window-controls'].includes('minimize')) {
        const button = document.createElement('button')
        button.setAttribute('aria-label', 'Minimize')
        titleBarControls.append(button)
      }
      if (info['window-controls'].includes('maximize')) {
        const button = document.createElement('button')
        button.setAttribute('aria-label', 'Maximize')
        titleBarControls.append(button)
      }
      if (info['window-controls'].includes('close')) {
        const button = document.createElement('button')
        button.setAttribute('aria-label', 'Close')
        button.setAttribute('onclick', `closeProgram('${info.id}')`)
        titleBarControls.append(button)
      }
      iframe.src = `../programs/${programUrl}?${params || ''}`
      iframe.width = info['default-size'].width
      iframe.height = info['default-size'].height

      programs.appendChild(program)
    }
  }).catch((err) => {
    xp_alert('error', 'Application Error!', `Error running application:\n${err}\n\nMore information has been logged to the developer console.`)
    throw err
  })
}

function setProgramTitle(title, id) {
  console.log(`#${id} #titleBarText`)
  console.log(title)
  document.querySelector(`#${id} #titleBarText`).innerText = title
}

function closeProgram(id) {
  document.getElementById(id).remove()
}

function xp_alert(type, title, message) {
  //TODO: implement a proper error box instead of using a browser alert.
  alert(message)
}

function xp_explorer_notif(id, message, timeout, timeoutms) {

}