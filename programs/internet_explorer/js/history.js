var sessionHistory = []
var globalHistory = getLocalStorage('globalHistory', [])

//Make mouse buttons 3 and 4 go back and forth in sessionHistory instead of the actual browser history
addEventListener('mouseup', (e) => {
  if (e.button === 3) {
    e.preventDefault()
    if (sessionHistory.length > 1) {
      console.log(sessionHistory[sessionHistory.length - 1].url)
      changePage(sessionHistory[sessionHistory.length - 1].url)
    } else {
      throw new Error('History does not go back far enough!')
    }
  } else if (e.button === 4) {
    e.preventDefault()
    //TODO: add forward button
    throw new Error('Not implemented!')
  }
})

function addPageToHistory(url, title) {
  const data = {url, title}
  sessionHistory.push(data)
  globalHistory.push(data)
  setLocalStorage('globalHistory', globalHistory)
}

function historyToMarkup(reversed = false) {
  //TODO: convert history entry into html markup for the back and forward buttons
  //the default conversion will be the back button, but if reversed is true, the markup will be made for the forward button.
}