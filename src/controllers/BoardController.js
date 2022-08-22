import Game from './GameController';
import PlayerCautious from './players/CautiousController';
import PlayerDemanding from './players/DemandingController';
import PlayerImpulsive from './players/ImpulsiveController';
import PlayerRandom from './players/RandomController';

class BoardController {
  /**
   * Create new board
   *
   * @return object with match data
   */
  createBoard() {
    const game = new Game();
    const strategies = ['impulsive', 'demanding', 'cautious', 'randomer'];
    const players = [];
    strategies.forEach((strategy) => {
      players.push(this.createPlayer(strategy));
    });
    game.players = this.shuffle(players);
    return game;
  }

  /**
   * Create players to board
   *
   * @param object strategy containing the type strategy players
   *
   * @return object containing players and strategies
   */
  createPlayer(strategy) {
    const strategies = {
      impulsive: new PlayerImpulsive('impulsive'),
      demanding: new PlayerDemanding('demanding'),
      cautious: new PlayerCautious('cautious'),
      randomer: new PlayerRandom('randomer'),
    };
    return strategies[strategy];
  }

  /**
   * Shuffle players to get a random order to init a play
   *
   * @param object players
   *
   * @return array of players shuffled
   */
  shuffle(players) {
    const newArr = players.slice();
    for (let i = newArr.length - 1; i > 0; i -= 1) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr;
  }
}

export default new BoardController();
