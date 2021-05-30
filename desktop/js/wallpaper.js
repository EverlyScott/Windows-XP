var wallpapers

function getWallpaperObj() {
  var { wallpaper } = localStorage
  if (!wallpaper) {
    localStorage.setItem('wallpaper', `{"type":"builtin","name":"Bliss","settings":{}}`)
    return getWallpaperObj()
  } else {
    wallpaper = JSON.parse(wallpaper)
    return wallpaper
  }
}

function getWallpaper() {
  const wallpaper = getWallpaperObj()

  if (wallpaper.type == 'builtin') {
    const fixedname = wallpaper.name.toLowerCase().replace(/ +/, '_')
    return `../assets/img/wallpaper/${fixedname}.jpg`
  } else if (wallpaper.type == 'url') {
    return wallpaper.name
  }
}

function setWallpaper() {
  if (wallpapers === undefined) {
    fetch('js/wallpapers.json').then((res) => res.json()).then((Wallpapers) => {
      wallpapers = Wallpapers
      return setWallpaper()
    })
  }

  const wallpaper = getWallpaper()

  fetch(wallpaper).then((res) => {
    if (res.ok) {
      document.getElementById('container').style.backgroundImage = `url(${wallpaper})`
    } else {
      console.log(`Failed to fetch wallpaper (${wallpaper}): ${res.status} ${res.statusText}. Resetting to default (Bliss)`)
      localStorage.setItem('wallpaper', `{"type":"builtin","name":"Bliss","settings":{}}`)
      setWallpaper()
      //TODO: show system tray notification with an error once that is implemented
    }
  })
}

export { setWallpaper }