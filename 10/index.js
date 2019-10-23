//@ts-check
import path from 'path';
import ConfigFactory from './ConfigFactory';

const filePath = path.join(__dirname, '__tests__', '__fixtures__', 'test.yml');
const config = ConfigFactory.factory(filePath);
console.log(config.getValue('key')); // value