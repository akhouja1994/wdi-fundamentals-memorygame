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

var createBoard=function()
{
	for (var i = 0; i < cards.length; i++) {
    // Logic here

    var cardElement = document.createElement('img');
    var gameBoard = document.getElementById('game-board');
    cardElement.setAttribute('src','src/images/images/back.png');
    cardElement.setAttribute('data-id',i);
    gameBoard.appendChild(cardElement);
    cardElement.addEventListener('click',function(e){flipCard(this);
    	if (cardsInPlay.length >=2){checkForMatch(cardsInPlay);}});
}
	
}
var flipCard = function (element)
	{
	var cardId = element.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	element.setAttribute('src',cards[cardId].cardImage);
	}

var checkForMatch =function(memorey)
{
		if (memorey[0]===memorey[1])
		{
			alert("You found a match!");
			
		}

	else
		{
			alert("Sorry, try again");

		}
		cardsInPlay = [];
}

createBoard();
