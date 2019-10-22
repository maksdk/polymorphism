//@ts-check
import Easy from './strategies/Easy';
import Normal from './strategies/Normal';

class TicTacToe {
   mapLevelToStrategy = {
      easy: Easy,
      normal: Normal,
   };

   constructor(level = 'easy') {
      this.strategy = this.mapLevelToStrategy[level];
      this.field = [
         Array(3).fill(null),
         Array(3).fill(null),
         Array(3).fill(null),
      ];
   }

   getField() {
      return this.field;
   }

   go(row = null, col = null) {
      if (row === null || col === null) {
         const [autoRow, autoCol] = this.strategy.getNextStep(this.field);
         this.field[autoRow][autoCol] = 'AI';
         return this.isWinner('AI');
      }

      this.field[row][col] = 'Player';
      return this.isWinner('Player');
   }

   isWinner(type) {
      if (this.field.find((row) => TicTacToe.populatedByOnePlayer(row, type))) {
         return true;
      }

      for (let i = 0; i < 3; i += 1) {
         if (TicTacToe.populatedByOnePlayer(this.field.map((el) => el[i]), type)) {
            return true;
         }
      }

      const diagonal1 = [this.field[0][0], this.field[1][1], this.field[2][2]];
      if (TicTacToe.populatedByOnePlayer(diagonal1, type)) {
         return true;
      }

      const diagonal2 = [this.field[2][0], this.field[1][1], this.field[0][2]];
      if (TicTacToe.populatedByOnePlayer(diagonal2, type)) {
         return true;
      }

      return false;
   }

   static populatedByOnePlayer(row, type) {
      return row.every((value) => value === type);
   }
}

export default TicTacToe;