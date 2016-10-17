var person = {
  name: "Sophia",
  representation: "https://s-media-cache-ak0.pinimg.com/236x/eb/5c/78/eb5c78657282a7c7715939aac4553dcb.jpg",
  height: "500px",	
  favoriteColor: "blue",
  catchphrase: "Woohoo!"
}
drawPerson(person)

function drawPerson(person) {
  console.log(person.catchphrase)
}

drawPerson("Sophia")