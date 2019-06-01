let activatedPortal = null
let activatedPortalNum = 0

window.addEventListener('load', () => {
  const portals = Array.from(document.querySelectorAll('portal'))
  for (let i = 0; i < portals.length; i++) {
    const portal = portals[i]
    setupListeners(portal, i + 1)
  }
}, false)

window.addEventListener('portalactivate', async e => {
  if (!activatedPortal) return
  const predecessor = e.adoptPredecessor()
  await activatedPortal.replaceWith(predecessor)
  if (activatedPortalNum > 0) {
    const portal = document.querySelector(`svg:nth-of-type(${activatedPortalNum})`).querySelector('portal')
    setupListeners(portal, activatedPortalNum)
  }
})

const setupListeners = (portal, index) => {
  portal.dataset.num = index
  portal.addEventListener('click', async () => {
    await portal.activate()
    activatedPortal = portal
    activatedPortalNum = +portal.dataset.num
  }, false)
}
