const displayPosition = (position) => {
  console.log(position)
  console.log(`Ma position est: Longitude: ${position.coords.longitude}, Latitude: ${position.coords.latitude}`)
}


navigator.geolocation.getCurrentPosition((position) => displayPosition(position))

navigator.geolocation.getCurrentPosition((position) => {
  console.log(`Ma position est: Longitude: ${position.coords.longitude}, Latitude: ${position.coords.latitude}`)
})
navigator.geolocation.getCurrentPosition(displayPosition)


const myObject = {
 toto: "toto",
 tata: "tata"
}

console.log(myObject)
