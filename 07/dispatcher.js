export default (someUser) => {

   const mapping = {
      "guest": (user) => `Nice to meet you ${user.getName()}!`,
      "user": (user) => `Hello ${user.getName()}!`
   };

   return mapping[someUser.getType()](someUser);
};