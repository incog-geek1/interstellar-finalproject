const iframe = document.getElementById('ifra')

window.addEventListener('resize', navigator.keyboard.lock(['Escape']))

function decodeXor(input) {
  if (!input) return input
  let [str, ...search] = input.split('?')

  return (
    decodeURIComponent(str)
      .split('')
      .map((char, ind) => (ind % 2 ? String.fromCharCode(char.charCodeAt(NaN) ^ 2) : char))
      .join('') + (search.length ? '?' + search.join('?') : '')
  )
}

function iframeLoad() {
  if (document.readyState === 'complete') {
    const website = iframe.contentWindow?.location.href.replace(window.location.origin, '');
    if (website.includes('/y/') || website.includes('/f/')) {
      document.getElementById('is').value = window.location.origin + website;
    } else {
      const website = iframe.contentWindow?.location.href.replace(window.location.origin, '').replace('/a/', '')
      document.getElementById('is').value = decodeXor(website)    }
  }
}

function reload() {
  if (iframe) {
    iframe.src = iframe.src
  }
}

function erudaToggle() {
  if (!iframe) return

  const erudaWindow = iframe.contentWindow
  const erudaDocument = iframe.contentDocument

  if (!erudaWindow || !erudaDocument) return

  if (erudaWindow.eruda?._isInit) {
    erudaWindow.eruda.destroy()
  } else {
    let script = erudaDocument.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/eruda'
    script.onload = function () {
      if (!erudaWindow) return
      erudaWindow.eruda.init()
      erudaWindow.eruda.show()
    }
    erudaDocument.head.appendChild(script)
  }
}

const fullscreenButton = document.getElementById('fullscreen-button')
fullscreenButton.addEventListener('click', function () {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
})

const homeButton = document.getElementById('home-page')
homeButton.addEventListener('click', function () {
  window.location.href = './'
})

function goBack() {
  if (iframe) {
    iframe.contentWindow.history.back()
  } else {
    console.error('No iframe found')
  }
}

function goForward() {
  if (iframe) {
    iframe.contentWindow.history.forward()
  } else {
    console.error('No iframe found')
  }
}

window.onload = function () {
  let GoUrl = sessionStorage.getItem('GoUrl')
  if (!GoUrl.startsWith('/y/') && !GoUrl.startsWith('/f/')) {
    GoUrl = '/a/' + GoUrl
  }
  console.log(GoUrl)
  if (iframe) {
    iframe.src = GoUrl
  }
}
document.addEventListener('fullscreenchange', function () {
  const isFullscreen = Boolean(document.fullscreenElement)
  document.body.classList.toggle('fullscreen', isFullscreen)
})
