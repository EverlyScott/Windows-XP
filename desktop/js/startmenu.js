function startmenu() {
  document.getElementById('startbutton').onmouseenter = () => {
    document.getElementById('startbutton').setAttribute('src', '../assets/img/start/hover.png')
  }
  
  document.getElementById('startbutton').onmouseleave = () => {
    document.getElementById('startbutton').setAttribute('src', '../assets/img/start/normal.png')
  }
  
  document.getElementById('startbutton').onmousedown = () => {
    document.getElementById('startbutton').setAttribute('src', '../assets/img/start/click.png')
  }
  
  document.getElementById('startbutton').onmouseup = () => {
    document.getElementById('startbutton').setAttribute('src', '../assets/img/start/hover.png')
  }

  document.getElementById('startbutton').onclick = () => {
    document.getElementById('startmenu').style.display = 'initial'
  }
}

export { startmenu }