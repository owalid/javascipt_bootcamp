const newP = document.createElement('p')
newP.textContent = "Je suis le texte n.5"
newP.classList.add('text')
const allP = document.querySelectorAll('p')
allP[allP.length - 1].parentNode.append(newP)

const h1 = document.getElementById('title')
h1.parentNode.removeChild(h1)