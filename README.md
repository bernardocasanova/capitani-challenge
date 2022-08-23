# Challenge Capitani

#### Game description

Consider the following hypothetical game very similar to Monopoly, where several of its mechanics have been simplified. In this game, players take turns taking turns, in a randomly defined order at the beginning of the game. Players always start a match with a balance of 300.

In this game, the board is made up of 20 properties in sequence. Each property has a selling cost, a rental amount and an owner if they are already purchased.

At the start of his turn, the player rolls a 6-sided equiprobable die that determines how many spaces on the board the player will move.

* Upon landing on an unowned property, the player can choose whether or not to buy the property. This is the only way a property can be purchased.

* When he lands on a property that has an owner, he must pay the owner the rent amount on the property.

* Upon completing a turn on the board, the player gains 100 balance.

The player can only buy the property if it has no owner and the player has the money to make the purchase. When buying a property the player loses money and gains ownership of the property.

A player who has a negative balance loses the game, and no longer plays, loses his properties and therefore can be bought by any other player.

It ends when there is only one player left with a positive balance at any given time. That player is declared the winner.

We want to run a simulation to decide which is the best strategy. For this, we idealized a game with 4 different types of possible players.

The defined behaviors are:

* Player one is impulsive;

    The impulsive player buys any property he lands on.

* Player two is demanding;

    The demanding player buys any property as long as its rent is greater than 50.

* Player three is cautious;

    The cautious player buys any property as long as he has a reserve of 80 balances left after the purchase is made.

* Player four is random;

    The random player buys the property he lands on with a 50% probability.

If the game takes a long time, as is usual in games of this nature, the game ends on the thousandth round with the victory of the player with the most balance.

### Setup

> On terminal, at same directory as cloned the project, run the command below (need a docker installed on machine):
```shell
docker-compose up -d
```
### Run

> Make a request via GET to api endpoint on browser or a client api.
```shell
http://localhost:8080/game/simulate
```

#### Result

```javascript
{
	"winner": "cautious",
	"positionRank": [
		"cautious",
		"randomer",
		"demanding",
		"impulsive"
	],
	"playersRank": [
		{
			"position": 3,
			"strategy": "cautious",
			"money": 109.77731046589264,
			"gameover": false
		},
		{
			"position": 12,
			"strategy": "randomer",
			"money": -13.435888660212072,
			"gameover": true
		},
		{
			"position": 9,
			"strategy": "demanding",
			"money": -71.83733172716259,
			"gameover": true
		},
		{
			"position": 15,
			"strategy": "impulsive",
			"money": -85.92758496602916,
			"gameover": true
		}
	],
	"timeOut": false,
	"roundsPlayed": 12
}
```


## Author

- [@bgcasanova](https://www.github.com/bernardocasanova)
