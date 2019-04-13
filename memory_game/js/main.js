var cards = ["queen","king","queen","king"];
var cardsInPlay = [];
var checkForMatch =function(memorey)
{
		if (memorey[0]===memorey[1])
		{
			console.log("You found a match!");
		}

	else
		{
			console.log("Sorry, try again");
		}
}
var flipCard = function (cardId)
	{
	cardsInPlay.push(cards[cardId]);
	console.log("user flipped" + cards[cardId]);
	}
flipCard(0);
flipCard(1);
checkForMatch(cardsInPlay);