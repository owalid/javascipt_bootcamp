// Tableau d'objet
const posts = [
  {
    name: "Othmane",
    age: "23"
  },
  {
    name: "toto",
    age: "23"
  },
  {
    name: "tata",
    age: "23"
  }
]

// Parcourir un tableau d'objet
posts.map(item => console.log(item))

posts.push({ 
  name: "tutu",
  age: "23"
})

posts.map(item => console.log(item))
