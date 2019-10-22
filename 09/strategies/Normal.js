//@ts-check
class Normal {
   // BEGIN (write your solution here)
   constructor() {
      this.rows = 3;
      this.cols = 3;
      this.emptyCell = "empty";
      this.field = [];

      this.createField();
   }

   createField() {
      this.field = [];
      for(let y = 0; y < this.rows; y++) {
         this.field[y] = [];
         for(var x = 0; x < this.cols; x++) {
            this.field[y][x] = this.emptyCell;
         }
      }
   }

   fillEmpty(value, auto) {
      for(let y = 0; y < this.rows; y++) {
         if (!this.field[y]) this.field[y] = [];

         for(let x = 0; x < this.cols; x++) {
            if (this.field[y][x] === this.emptyCell) {
               this.field[y][x] = value;
               return this.check(value, x, y, auto);
            }
         }
      }
   }

   fillFrom(value, x, y) {
      if (!this.field[y]) this.field[y] = []; 
      this.field[y][x] = value;
      return this.check(value, x, y);
   }

   check(value, fromX, fromY, auto) {
      const depth = 2;
      const countNeedCells = 2;
      let foundedCells = 0;

      const matrixes = [
         [
            {x: 1, y: 1},
            {x:-1, y:-1}
         ],
         [
            {x:-1, y: 1},
            {x: 1, y:-1}
         ],
         [
            {x: 0, y: 1},
            {x: 0, y:-1}
         ],
         [
            {x: 1, y: 0},
            {x:-1, y: 0}
         ]
      ];

      if (auto) {
         console.log(this.field)
         console.log(fromX)
         console.log(fromY)
      }
      
      for(let j = 0; j < matrixes.length; j++) {

         const mtx = matrixes[j];

         for(let i = 1; i <= depth; i++) {

            for(let k = 0; k < mtx.length; k++) {
               const x = fromX + mtx[k].x * i; 
               const y = fromY + mtx[k].y * i;
            
               if (this.field[y] && this.field[y][x] === value) {
                  foundedCells += 1;
                  if (foundedCells === countNeedCells) return true;
               }
            }
         }

         foundedCells = 0;
      }

      return false;
   }
   // END
}

export default Normal;