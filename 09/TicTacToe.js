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
      this.level = new levels[levelName]();
   }
   go(row, col) {
      this.level.go(row, col);
      return this.level.checkWin();
   }
}

export default TicTacToe;