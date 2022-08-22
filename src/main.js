import Board from './controllers/BoardController';

class Main {
  /**
   * Initialize board game
   *
   * @param object _req is an object containing information about the HTTP request
   * @param object In response to req, you use res to send back the desired HTTP response.
   *
   * @return json object with match info
   */
  init(_req, res) {
    const board = Board.createBoard();

    while (board.winner === null) {
      board.players.forEach((player) => {
        if (player.gameover) {
          board.removeBoardPlayer(player);
        } else if (!board.winner) {
          const winner = board.checkWinner(player);
          if (winner) {
            board.winner = winner;
            return;
          }
        }
        board.play(player, board);
      });
      board.roundsPlayed += 1;
    }
    return res.json(board.finishMatch());
  }
}

export default new Main();
