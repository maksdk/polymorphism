import fs from 'fs';
import _ from 'lodash';

export default class {
   constructor(path) {
      this.path = path;
   }

   load(env) {
      const path = `${this.path}/database.${env}.json`;
      const result1 = JSON.parse(fs.readFileSync(path, 'utf8'));

      if (result1["extend"]) {
         const result2 = this.load(result1["extend"]);
         const merged = {
            ...result2,
            ...result1
         };
         return _.omit(merged, ["extend"]);
      }

      return result1;
   }
}