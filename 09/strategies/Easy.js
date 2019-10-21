//@ts-check
class Easy {
   // BEGIN (write your solution here)
   constructor() {
      this.rows = 3;
      this.cols = 3;
      this.field = [];

      this.createField();
   }
   createField() {
      this.field = [];
      for(let y = 0; y < this.rows; y++) {
         this.field[y] = [];
         for(var x = 0; x < this.cols; x++) {
            this.field[y][x] = 0;
         }
      }
   }
   go(row, col) {
      this.field[row][col] = 1;
   }
   checkWin(fromR, fromC) {
      const matrix = [
         {x: 1, y: 1 },
         {x:-1, y: -1},
         {x: -1, y: 1 },
         {x: 1, y: -1 },
         {x: 0, y: 1 },
         {x: 1, y: 0 },
         {x: 0, y: -1 },
         {x: -1, y: 0 }
      ];

      for (let i = 0; i < matrix.length; i++) {
         
      }
   }
   // END
}

export default Easy;