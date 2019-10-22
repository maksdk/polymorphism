//@ts-check
import Easy from './strategies/Easy';
import Normal from './strategies/Normal';

class TicTacToe {
   constructor(level) {
      const levelName = level || "easy";

      const levels = {
         "easy": Easy,
         "normal": Normal
      };

      this.game = new levels[levelName]();
   }

   go(y=-1, x=-1) {
      if (y === -1 && x === -1) {
         return this.game.fillEmpty("O");
      }
      else {
         return this.game.fillFrom("X", x, y);
      }
   }
}

export default TicTacToe;