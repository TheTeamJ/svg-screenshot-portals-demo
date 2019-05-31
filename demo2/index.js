window.addEventListener('load', () => {
  setupListeners()
}, false)

window.addEventListener('portalactivate', e => {
  const portal = document.querySelector('portal')
  const svg = document.querySelector('svg')
  svg.removeEventListener('transitionend', activatePortal)
  svg.classList.remove('portal-reveal')

  const predecessor = e.adoptPredecessor()
  portal.replaceWith(predecessor)
  setupListeners()
})

const setupListeners = () => {
  const portal = document.querySelector('portal')
  const svg = document.querySelector('svg')

  portal.addEventListener('click', () => {
    svg.classList.add('portal-reveal')
  }, false)

  svg.addEventListener('transitionend', activatePortal, false)
}

const activatePortal = () => {
  const portal = document.querySelector('portal')
  const svg = document.querySelector('svg')
  if (!svg.classList.contains('portal-reveal')) return
  portal.activate()
}
