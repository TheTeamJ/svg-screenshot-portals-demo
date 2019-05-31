window.addEventListener('load', () => {
  const portal = document.querySelector('portal')

  portal.addEventListener('click', () => {
    portal.classList.add('portal-reveal')
  }, false)

  portal.addEventListener('transitionend', evt => {
    portal.activate()
  })
}, false)
