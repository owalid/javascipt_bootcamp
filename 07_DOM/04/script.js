let can_open_alert = true
const btn = document.getElementById('btn-popup')

btn.addEventListener('click', () => {
  console.log("can_open_alert", can_open_alert)
  if (can_open_alert) {
    alert("Hello je suis une alerte")
  }
})


const p_elements = document.querySelectorAll('p')

p_elements.forEach(element => {
  element.addEventListener('mouseover', () => {
    element.style.fontWeight = 'bold'
  })
})

document.addEventListener("keyup", (event) => {
  console.log("can_open_alert", can_open_alert)
  if (event.key === 'Escape') {
    can_open_alert = !can_open_alert
  }
})