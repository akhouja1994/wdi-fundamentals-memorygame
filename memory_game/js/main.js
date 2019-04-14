var cards = [
	{
	rank:'queen',
	suit: 'hearts',
	cardImage:'src/images/images/queen-of-hearts.png'
	},
	{
	rank:'king',
	suit:'hearts',
	cardImage:'src/images/images/king-of-hearts.png'
	},
	{
	rank:'queen',
	suit:'diamonds',
	cardImage:'src/images/images/queen-of-diamonds.png'
	},
	{
	rank:'king',
	suit:'diamonds',
	cardImage:'src/images/images/king-of-diamonds.png'
	}
	];
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
	cardsInPlay.push(cards[cardId].rank);
	console.log("user flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	}
flipCard(0);
flipCard(1);
checkForMatch(cardsInPlay);