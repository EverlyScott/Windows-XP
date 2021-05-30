const iframe = document.getElementById('iframe')

const settingsDefault = {
  homepage: 'https://www.msn.com' //(real windows xp default homepage)
}
const settings = getLocalStorage('IESettings', settingsDefault)

changePage(getQueryVariable('path') ? getQueryVariable('path') : settings.homepage)

iframe.addEventListener('load', () => {
  const pageTitle = iframe.contentDocument.title || iframeUrl
  addPageToHistory(iframeUrl, pageTitle)
  if (pageTitle === undefined) {
    parent.setProgramTitle(`Microsoft Internet Explorer`, 'internet_explorer') || setProgramTitle('Microsoft Internet Explorer')
  } else {
    parent.setProgramTitle(`${pageTitle} - Microsoft Internet Explorer`, 'internet_explorer') || setProgramTitle(`${pageTitle} - Microsoft Internet Explorer`)
  }
})

function getProxiedURL(url, callback) {
  fetch('proxy/index.php', {
    method: 'POST',
    body: `url=${encodeURIComponent(url)}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((res) => {
    callback(res.url)
  })
}

function changePage(url) {
  getProxiedURL(url, (newUrl) => {
    iframe.src = newUrl
  })
}

function setProgramTitle(title) {
  document.getElementById('title').innerText = title
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return false
}

function getLocalStorage(item, defaultSettings) {
  const storageItem = localStorage.getItem(item)
  if (storageItem) {
    return JSON.parse(storageItem)
  } else {
    if (typeof defaultSettings === 'object') {
      localStorage.setItem(item, JSON.stringify(defaultSettings))
    } else {
      localStorage.setItem(item, defaultSettings)
    }
    return JSON.parse(localStorage.getItem(item))
  }
}

function setLocalStorage(item, data) {
  if (typeof data === 'object') {
    localStorage.setItem(item, JSON.stringify(data))
  } else {
    localStorage.setItem(item, data)
  }
}