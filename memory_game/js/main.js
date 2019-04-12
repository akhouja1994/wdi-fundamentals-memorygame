alert('Hello, friends.');
var cards = ["queen","king","queen","king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[1];
var cardThree = cards[2];
var cardFour = cards[3];
cardsInPlay.push(cardOne);
console.log("Up and running!"); 
console.log("User flipped " + cardsInPlay[0]);
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[1]);
if (cardsInPlay[0]===cardsInPlay[1])
{
	alert("You found a match!");
}
else
{
	cardsInPlay=[]
	alert("Sorry, try again");
}
console.log(cardsInPlay[0]);