window.addEventListener('portalactivate', e => {
  const lightbox = document.querySelector('#lightbox')
  const embed = document.querySelector('#embed')
  const image = document.querySelector('#image')
  const object = image.querySelector('object')

  const predecessor = e.adoptPredecessor()
  embed.appendChild(predecessor)
  requestAnimationFrame(() => {
    lightbox.style.opacity = '0.75'
    object.classList.add('shadow')
  })

  lightbox.addEventListener('click', () => {
    activatePredecessor(predecessor)
  }, { once: true })
})


const activatePredecessor = (predecessor) => {
  const lightbox = document.querySelector('#lightbox')
  const embed = document.querySelector('#embed')
  const image = document.querySelector('#image')
  const object = image.querySelector('object')

  predecessor.activate().then(_ => {
    lightbox.style.opacity = '0'
    object.classList.remove('shadow')
    embed.removeChild(predecessor)
  })
}
