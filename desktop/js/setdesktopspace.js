function getdesktopspace() {
  var spacex = innerWidth/60
  var spacey = innerHeight/60

  spacex = Math.floor(spacex)
  spacey = Math.floor(spacey)
  return {
    spacex,
    spacey
  }
}

function setdesktopspace() {
  const pericon = getdesktopspace()

  var columns = ''
  for (var i = 0; i < pericon.spacex; i++) {
    columns += 'auto '
  }
  var rows = ''
  for (var i = 0; i < pericon.spacey; i++) {
    rows += 'auto '
  }

  document.getElementById('desktop').style.gridTemplateColumns = columns
  document.getElementById('desktop').style.gridTemplateRows = rows
}

export { setdesktopspace }