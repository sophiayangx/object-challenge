var person = {
  name: "Sophia",
  representation: "https://s-media-cache-ak0.pinimg.com/236x/eb/5c/78/eb5c78657282a7c7715939aac4553dcb.jpg",
  height: "800px",	
  favoriteColor: "blue",
  catchphrase: "Woohoo!"
}

drawPerson(person)

function drawPerson(person) {
  document.write(person.name);
  document.write(person.catchphrase);
  var img = document.createElement("img");
  img.src = (person.representation);
  $('#image').css({height:person.height});
  $('#image').attr("src", person.representation);
}
  