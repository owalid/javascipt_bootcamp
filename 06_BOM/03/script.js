const getResolutionScreen = () => {
  return `${screen.width} * ${screen.height}`
}

const getColorDepth = () => {
  return screen.colorDepth
}

const getPixelDepth = () => {
  return screen.pixelDepth
}

console.log(`La taille totale de l'exran est: ${getResolutionScreen()}`)
console.log(`La palette de couleur est : ${getColorDepth()}`)
console.log(`La résolution de l'écran est : ${getPixelDepth()}`)