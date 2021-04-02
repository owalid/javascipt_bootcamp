const h1_element = document.getElementById('title').textContent
console.log(h1_element)

const text_elements = document.getElementsByClassName('text')

// getElementsByClassName renvois un HTML collection qui n'est pas utilisable dans un forEach
// Il faut donc le convertir avec Array.from
Array.from(text_elements).forEach(element => {
  console.log(element.textContent)
})

const p_elements = document.querySelectorAll('p')
// querySelectorAll lui renvoi un NodeList qui peu etre forEach donc pas de conversion de tableau
p_elements.forEach(element => {
  console.log(element.textContent)
})