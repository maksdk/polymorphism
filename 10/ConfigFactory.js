//@ts-check
import path from 'path';
import fs from 'fs';
import JsonParser from './parsers/JsonParser';
import YamlParser from './parsers/YamlParser';
import Config from './Config';

const mapParsers = {
   "json": JsonParser,
   "yaml": YamlParser,
   "yml": YamlParser
};

export default class {
   static factory(filepath) {
      const ext = path.extname(filepath).replace(".", "");
      const data = fs.readFileSync(filepath);
      const parsedData = mapParsers[ext].parse(data);
      return new Config(parsedData);
   }
}