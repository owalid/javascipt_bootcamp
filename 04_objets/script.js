
// un objet:
let person = {
  firstName: "John",
  lastName: "Hondas",
  age: 29
};

// un tableau:
const tab = [12, 33, 22, -3]
console.log(tab[0]) // recupere le premier element du tableau


console.log(person) // affiche l'objet person
console.log(person.firstName) // recupere l'element firstName de l'objet person
console.log(person["firstName"]) // recupere l'element firstName de l'objet person

console.log(Object.keys(person)) // affiche les clefs
console.log(Object.values(person)) // afficche les valeurs


// permet d'ajouter un nouvel element à un objet ( toto: "toto" dans l'objet person)
person = Object.assign({ toto: "toto" }, person)
console.log(person)

// Parcourir un objet
for (const key in person) {
  console.log(key, person[key])
}

// Tableau d'objet
const posts = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  }
]

// Parcourir un tableau d'objet
posts.forEach(item => console.log(item.id, item.title))
