//@ts-check
import yaml from 'js-yaml';

export default class {
   static parse(data) {
      return yaml.safeLoad(data);
   }
}
