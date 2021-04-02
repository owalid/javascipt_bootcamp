
const getOuterSize = () => `Taille de la fenetre exterieur: ${window.outerWidth} * ${window.outerHeight}`
const getInnerSize = () => `Taille de la fenetre exterieur: ${window.innerWidth} * ${window.innerHeight}`

const outerSize = getOuterSize()
const innerSize = getInnerSize()

console.log(outerSize, innerSize)