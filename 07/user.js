class User {
   constructor(name) {
      this.type = "user";
      this.name = name;
   }

   getName() {
      return this.name;
   }

   getType() {
      return this.type;
   }
}

export default User;