const video = document.getElementById('video')
const vsources = {
  intro: 'assets/video/intro/intro_start.mp4',
  picker: {
    start: '',
    loop: 'assets/video/intro/intro_loop.mp4',
    end: 'assets/video/intro/intro_end.mp4'
  },
  business: {
    start: 'assets/video/business/business_start.mp4',
    loop: 'assets/video/business/business_loop.mp4',
    1: 'assets/video/business/1.mp4',
    2: 'assets/video/business/2.mp4',
    3: 'assets/video/business/3.mp4'
  },
  pcing: {
    start: 'assets/video/pcing/pcing_start.mp4',
    loop: 'assets/video/pcing/pcing_loop.mp4',
    1: 'assets/video/pcing/1.mp4',
    2: 'assets/video/pcing/2.mp4',
    3: 'assets/video/pcing/3.mp4'
  },
  digital_media: {
    start: 'assets/video/digital_media/digital_media_start.mp4',
    loop: 'assets/video/digital_media/digital_media_loop.mp4',
    1: 'assets/video/digital_media/1.mp4',
    2: 'assets/video/digital_media/2.mp4',
    3: 'assets/video/digital_media/3.mp4'
  },
  connected: {
    start: 'assets/video/connected/connected_start.mp4',
    loop: 'assets/video/connected/connected_loop.mp4',
    1: 'assets/video/connected/1.mp4',
    2: 'assets/video/connected/2.mp4',
    3: 'assets/video/connected/3.mp4',
    4: 'assets/video/connected/4.mp4'
  },
  basics: {
    start: 'assets/video/basics/basics_start.mp4',
    loop: 'assets/video/basics/basics_loop.mp4',
    1: 'assets/video/basics/1.mp4',
    2: 'assets/video/basics/2.mp4',
    3: 'assets/video/basics/3.mp4',
    4: 'assets/video/basics/4.mp4',
    5: 'assets/video/basics/5.mp4',
    6: 'assets/video/basics/6.mp4',
    7: 'assets/video/basics/7.mp4',
    8: 'assets/video/basics/8.mp4'
  }
}
const audio = {
  music: {
    intro: new Audio('assets/audio/music/intro.mp3'),
    business: new Audio('assets/audio/music/business.mp3'),
    pcing: new Audio('assets/audio/music/pcing.mp3'),
    digital_media: new Audio('assets/audio/music/digital_media.mp3'),
    connected: new Audio('assets/audio/music/connected.mp3'),
    basics: new Audio('assets/audio/music/basics.mp3')
  },
  vo: {
    intro: new Audio('assets/audio/vo/intro.mp3'),
    picker: new Audio('assets/audio/vo/picker.mp3'),
    business: [
      new Audio('assets/audio/vo/business/01.mp3'),
      new Audio('assets/audio/vo/business/02.mp3')
    ],
    pcing: [],
    digital_media: [],
    connected: [],
    basics: []
  }
}

if (location.search.includes('showcontrols=true')) {
  showControls()
}

function showControls() {
  video.setAttribute('controls', 'true')
}

var musicMuted = false

intro()
function intro() {
  stopAllSounds()
  video.src = vsources.intro
  audio.music.intro.play()
  audio.vo.intro.play()
  video.play().catch(() => {
    alert('It appears that you navigated directly to this page! This sadly doesn\'t work due to how browsers handle autoplaying. We\'re going to automatically redirect you to the main page so you can manually navigate here.')
    location.replace('../')
  })

  setTimeout(() => {
    setMap([{coords: [0, 1014, 250, 1080], function: 'picker()'}])
  }, 2433)

  setTimeout(() => {
    setMap([{coords: [0, 1014, 250, 1080], function: 'picker()'}, {coords: [1347, 1018, 1397, 1066], function: 'toggleMusicMute()'}, {coords: [1263, 1018, 1311, 1066], function: 'parent.closeProgram("tour-flash")'}])
  }, 12900)

  audio.music.intro.onended = () => {
    audio.music.intro.play()
  }

  video.onended = () => {
    picker()
  }
}

function picker() {
  setMap([
    {
      name: 'Restart',
      coords: [48, 1016, 100, 1068],
      function: 'intro()'
    },
    {
      name: 'Mute Music',
      coords: [1347, 1018, 1397, 1066],
      function: 'toggleMusicMute()'
    },
    {
      name: 'Close',
      coords: [1263, 1018, 1311, 1066],
      function: 'parent.closeProgram("tour-flash")'
    },
    {
      name: 'Best for Business',
      coords: [760, 323, 880, 378],
      function: 'business()'
    },
    {
      name: 'Safe and Easy Personal Computing',
      coords: [889, 453, 1010, 508],
      function: 'pcing()'
    },
    {
      name: 'Unlock the World of Digital Media',
      coords: [1019, 583, 1140, 639],
      function: 'digital_media()'
    },
    {
      name: 'The Connected Home and Office',
      coords: [1148, 714, 1269, 770],
      function: 'connected()'
    },
    {
      name: 'Windows XP Basics',
      coords: [1278, 845, 1399, 899],
      function: 'basics()'
    }
  ])
  stopAllVO()
  video.src = vsources.picker.loop
  audio.vo.picker.play()
  video.play()

  var i = 0
  video.onended = () => {
    if (i < 8) {
      video.play()
      i++
    } else {
      business()
    }
  }
}

function business() {
  setMap([{coords: [48, 1016, 100, 1068], function: 'intro()'}, {coords: [1347, 1018, 1397, 1066], function: 'toggleMusicMute()'}, {coords: [1263, 1018, 1311, 1066], function: 'parent.closeProgram("tour-flash")'}])
  stopAllSounds()
  video.src = vsources.business.start
  audio.music.business.play()
  audio.vo.business[0].play()
  video.play()
  audio.music.business.onended = () => {
    audio.music.business.play()
  }

  var i = 0
  video.onended = () => {
    if (i < 13) {
      if (i == 0) {
        video.src = vsources.business.loop
      }
      video.play()
      i++
    } else {
      one()
    }
  }

  function one() {
    video.src = vsources.business[1]
    video.play()
    audio.vo.business[1].play()
    video.onended = () => two()
  }

  function two() {
    video.src = vsources.business[2]
    video.play()
    video.onended = () => three()
  }

  function three() {
    video.src = vsources.business[3]
    video.play()
    video.onended = () => pcing()
  }
}

function pcing() {
  stopAllSounds()
  video.src = vsources.pcing.start
  audio.music.pcing.play()
  video.play()
  audio.music.pcing.onended = () => {
    audio.music.pcing.play()
  }

  var i = 0
  video.onended = () => {
    if (i < 16) {
      if (i == 0) {
        video.src = vsources.pcing.loop
      }
      video.play()
      i++
    } else {
      one()
    }
  }

  function one() {
    video.src = vsources.pcing[1]
    video.play()
    video.onended = () => two()
  }

  function two() {
    video.src = vsources.pcing[2]
    video.play()
    video.onended = () => three()
  }

  function three() {
    video.src = vsources.pcing[3]
    video.play()
    video.onended = () => digital_media()
  }
}

function digital_media() {
  stopAllSounds()
  video.src = vsources.digital_media.start
  audio.music.digital_media.play()
  video.play()
  audio.music.digital_media.onended = () => {
    audio.music.digital_media.play()
  }

  var i = 0
  video.onended = () => {
    if (i < 13) {
      if (i == 0) {
        video.src = vsources.digital_media.loop
      }
      video.play()
      i++
    } else {
      one()
    }
  }
  
  function one() {
    video.src = vsources.digital_media[1]
    video.play()
    video.onended = () => two()
  }

  function two() {
    video.src = vsources.digital_media[2]
    video.play()
    video.onended = () => three()
  }
  
  function three() {
    video.src = vsources.digital_media[3]
    video.play()
    video.onended = () => connected()
  }
}

function connected() {
  stopAllSounds()
  video.src = vsources.connected.start
  audio.music.connected.play()
  video.play()
  audio.music.connected.onended = () => {
    audio.music.connected.play()
  }

  var i = 0;
  video.onended = () => {
    if (i < 12) {
      if (i == 0) {
        video.src = vsources.connected.loop
      }
      video.play()
      i++
    } else {
      one()
    }
  }

  function one() {
    video.src = vsources.connected[1]
    video.play()
    video.onended = () => two()
  }

  function two() {
    video.src = vsources.connected[2]
    video.play()
    video.onended = () => three()
  }

  function three() {
    video.src = vsources.connected[3]
    video.play()
    video.onended = () => four()
  }

  function four() {
    video.src = vsources.connected[4]
    video.play()
    video.onended = () => basics()
  }
}

function basics() {
  stopAllSounds()
  video.src = vsources.basics.start
  audio.music.basics.play()
  video.play()
  audio.music.basics.onended = () => {
    audio.music.basics.play()
  }

  video.onended = () => {
    setTimeout(() => {
      one()
    }, 10000)
  }

  function one() {
    video.src = vsources.basics[1]
    video.play()
    video.onended = () => two()
  }

  function two() {
    video.src = vsources.basics[2]
    video.play()
    video.onended = () => three()
  }

  function three() {
    video.src = vsources.basics[3]
    video.play()
    video.onended = () => four()
  }

  function four() {
    video.src = vsources.basics[4]
    video.play()
    video.onended = () => five()
  }

  function five() {
    video.src = vsources.basics[5]
    video.play()
    video.onended = () => six()
  }

  function six() {
    video.src = vsources.basics[6]
    video.play()
    video.onended = () => seven()
  }

  function seven() {
    video.src = vsources.basics[7]
    video.play()
    video.onended = () => eight()
  }

  function eight() {
    video.src = vsources.basics[8]
    video.play()
    video.onended = () => intro()
  }
}

function stopMusic(music) {
  audio.music[music].pause()
  audio.music[music].currentTime = 0
}

function muteMusic(music) {
  audio.music[music].volume = 0
}

function unmuteMusic(music) {
  audio.music[music].volume = 1
}

function stopVO(vo, index = 0) {
  if (Array.isArray(audio.vo[vo])) {
    audio.vo[vo][index].pause()
    audio.vo[vo][index].currentTime = 0
  } else {
    audio.vo[vo].pause()
    audio.vo[vo].currentTime = 0
  }
}


function stopAllMusic() {
  stopMusic('intro')
  stopMusic('business')
  stopMusic('pcing')
  stopMusic('digital_media')
  stopMusic('connected')
  stopMusic('basics')
}

function muteAllMusic() {
  musicMuted = true
  muteMusic('intro')
  muteMusic('business')
  muteMusic('pcing')
  muteMusic('digital_media')
  muteMusic('connected')
  muteMusic('basics')
}

function unmuteAllMusic() {
  musicMuted = false
  unmuteMusic('intro')
  unmuteMusic('business')
  unmuteMusic('pcing')
  unmuteMusic('digital_media')
  unmuteMusic('connected')
  unmuteMusic('basics')
}

function toggleMusicMute() {
  if (musicMuted) {
    unmuteAllMusic()
  } else {
    muteAllMusic()
  }
}

function stopAllVO() {
  stopVO('intro')
  for (var i = 0; i < audio.vo.business.length; i++) {
    stopVO('business', i)
  }
  for (var i = 0; i < audio.vo.pcing.length; i++) {
    stopVO('pcing', i)
  }
  for (var i = 0; i < audio.vo.digital_media.length; i++) {
    stopVO('digital_media', i)
  }
  for (var i = 0; i < audio.vo.connected.length; i++) {
    stopVO('connected', i)
  }
  for (var i = 0; i < audio.vo.basics.length; i++) {
    stopVO('basics', i)
  }
}

function stopAllSounds() {
  stopAllMusic()
  stopAllVO()
}

function setMap(areas) {
  //TODO: fix issue where map name does not update all the time
  var mapName = 'map-1'
  if (document.getElementsByTagName('map')[0]) {
    mapName = `map-${(parseInt(document.getElementsByTagName('map')[0].name.replace('map-', ''))+1).toString()}`
    console.log(mapName)
    document.getElementsByTagName('map')[0].remove()
  }

  document.getElementsByTagName('img')[0].useMap = `#${mapName}`

  const map = document.createElement('map')
  map.setAttribute('name', mapName)
  const screenToVidHeightRatio = innerHeight/1080
  console.log(screenToVidHeightRatio)
  for (var i = 0; i < areas.length; i++) {
    const area = document.createElement('area')

    for (var c = 0; c < areas[i].coords.length; c++) {
      areas[i].coords[c] = Math.round(areas[i].coords[c]*screenToVidHeightRatio)
    }

    area.setAttribute('shape', 'rect')
    area.setAttribute('coords', areas[i].coords.join(','))
    area.setAttribute('href', '#')
    area.setAttribute('onclick', areas[i].function)
    area.setAttribute('alt', areas[i].name)

    map.appendChild(area)
  }
  document.getElementsByTagName('body')[0].appendChild(map)
}

function removeMap() {
  if (document.getElementsByName('map')[0]) {
    document.getElementsByName('map')[0].remove()
  }
}