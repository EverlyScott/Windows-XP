import { setWallpaper } from './wallpaper.js'
import { setdesktopspace } from './setdesktopspace.js'
import { startclock } from './time.js'
import { startmenu } from './startmenu.js'

setWallpaper()
setdesktopspace()
startclock()
startmenu()

document.addEventListener('contextmenu', event => event.preventDefault())