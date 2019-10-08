class Guest {
   constructor() {
      this.type = "guest";
      this.name = 'Guest';
   }

   getName() {
      return this.name;
   }

   getType() {
      return this.type;
   }
}

export default Guest;