const displayPosition = (position) => {
  console.log(`Ma position est: Longitude: ${position.coords.longitude}, Latitude: ${position.coords.latitude}`)
}
navigator.geolocation.getCurrentPosition(displayPosition)