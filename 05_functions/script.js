
// Fonction
function myFunctionBidule1() {
  console.log("hello world")
}

const myFunctionBidule2 = () => {
  console.log("hello")
}


// Fonction qui retourne une value
function getNumber2() {
  return 10
}

const getNumber2 = () => 10

// Scope d'une fonction

// toto est accessible partout meme a l'interieur de la fonction myFunction3
const toto = "toto"

const myFunction3 = () => {
   // tata est accessible uniquement dans le scope de la fonction ( dans le corp de la fonction)
  const tata = "tata"
  console.log(toto + tat)
}

console.log(toto)
myFunction3()


// Fonctions avec parametre
const nbMult1 = (nb) => {
  return nb * 2;
}

const nbMult2 = (nb) => nb * 2


console.log(nbMult(10))
console.log(nbMult(30))
console.log(nbMult(40))


// Fonction anonyme
(function(){
  console.log('Alerte fonction anonyme')
})()





