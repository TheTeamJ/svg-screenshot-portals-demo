window.addEventListener('portalactivate', e => {
  const lightbox = document.querySelector('#lightbox')
  const embed = document.querySelector('#embed')
  const image = document.querySelector('#image')
  const object = image.querySelector('object')

  const predecessor = e.adoptPredecessor()
  image.style.width = '100vw'
  image.style.height = '100vh'
  object.classList.add('shadow')
  embed.appendChild(predecessor)

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
    image.style.width = ''
    image.style.height = ''
    object.classList.remove('shadow')
    embed.removeChild(predecessor)
  })
}
