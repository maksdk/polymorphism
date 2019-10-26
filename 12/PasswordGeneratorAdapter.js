import generator from 'generate-password';

export default class PasswordGeneratorAdapter {
   generatePassword(length, options) {
      const defaultOptions = {
         "numbers": false,
         "symbols": false,
         "uppercase": false
      };

      const opt = options.reduce((acc, name) => ({
         ...acc,
         [name]: true
      }), defaultOptions);

      return generator.generate({
         length,
         ...opt
      });
   }
}