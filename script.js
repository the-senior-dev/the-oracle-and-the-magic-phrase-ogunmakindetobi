// Use the skeleton bellow as a basis for your script
var generateBtn = document.querySelector("#magic-btn");

function displayMagicPhrase() {
  console.log("The user as clicked")
  var magicPhrase = makeSomeMagic();
  var magicPhraseDisplay = document.querySelector("#magic-phrase");

  magicPhraseDisplay.value = magicPhrase;
}

// Attach event listener to the magi button
generateBtn.addEventListener("click", displayMagicPhrase);

function makeSomeMagic() {
  let likeSport = confirm("Do you like sport?")
  console.log(likeSport)
  let likePizza = confirm("Do you like pizza?")
  let makePuzzle = confirm("Do you like to make puzzles?")
  let toDraw = confirm("Do you like to draw?")
  let toRead = confirm("Do you like to read?")
  let likePet = confirm("Do you like pet?")
  let morningPerson = confirm("Are you a morning person?")

  if (toRead && toDraw && likePizza) {
    return "You are destined to be a developer"
  }else if(likePet && likeSport){
    return "You cant be a developer"
  }

}
