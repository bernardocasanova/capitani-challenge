import Property from './PropertyController';

class GameController {
  constructor() {
    this.propertiesQuantity = Number(process.env.ENV_QUANTITY_OF_PROPERTIES);
    this.playerMoneyRound = Number(process.env.ENV_PLAYER_MONEY_ROUND);
    this.timeoutRound = Number(process.env.ENV_TIMEOUT_ROUND);

    this.winner = null;
    this.roundsPlayed = 0;
    this.players = [];
    this.positionRank = [];
    this.playersRank = [];
    this.cards = [];

    for (let i = 0; i < this.propertiesQuantity; i += 1) {
      this.cards.push(new Property(i, null));
    }
  }

  /**
   * Play the Match
   *
   * @param object player containing player data
   * @param object board containing board data
   *
   * @return void
   */
  play(player, board) {
    const property = this.cards[this.walk(player)];
    player.rentOrBuy(property, board);
  }

  /**
   * Calculate a new player position on board
   *
   * @param object player containing player data
   *
   * @return string containing a new player position on board
   */
  walk(player) {
    let goToPosition = player.position + this.playDice();
    if (goToPosition >= this.propertiesQuantity) {
      player.money += this.playerMoneyRound;
      goToPosition -= this.propertiesQuantity;
    }
    player.position = goToPosition;
    return goToPosition;
  }

  /**
   * Throw a 6-sided die
   *
   * @return a random number simulate a 6 sided die
   */
  playDice() {
    return Math.floor(1 + 6 * Math.random());
  }

  /**
   * Remover a player from board
   *
   * @param object player containing player data
   *
   * @return void
   */
  removeBoardPlayer(player) {
    this.cards.forEach((property) => {
      if (property.owner === player) {
        property.owner = null;
      }
    });
    this.positionRank.push(player);
    this.players.splice(this.players.indexOf(player), 1);
  }

  /**
   * Check if has game winner
   *
   * @param object player containing player data
   *
   * @return object containing a winner
   * @return null if not has winner
   */
  checkWinner(player) {
    if (this.players.length === 1) {
      this.positionRank.push(player);
      return player;
    }

    if (this.timeoutRound <= this.roundsPlayed) {
      let money = 0;
      let winner = null;
      this.players.forEach((_player) => {
        this.positionRank.push(_player);
        if (_player.money > money) {
          money = _player.money;
          winner = _player;
        }
      });
      return winner;
    }

    return null;
  }

  /**
   * Set the rank players of the match
   *
   * @return void
   */
  setRank() {
    const newRank = [...this.positionRank].sort((a, b) => {
      if (a.money > b.money) return -1;
      if (a.money < b.money) return 1;
      return 0;
    });
    this.positionRank = newRank.map((player) => {
      player = player.strategy;
      return player;
    });
    this.playersRank = newRank.map((player) => player);
  }

  /**
   * Create a object with match results
   *
   * @return object containing match results
   */
  finishMatch() {
    this.setRank();
    return {
      winner: this.winner.strategy,
      positionRank: this.positionRank,
      playersRank: this.playersRank,
      timeOut: this.roundsPlayed > this.timeoutRound,
      roundsPlayed: this.roundsPlayed,
    };
  }
}

export default GameController;
