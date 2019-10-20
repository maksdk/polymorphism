//@ts-check
import axios from "axios";
import WeatherServeice from "../WeatherServise";

const cityName = process.argv[2];
const weatherServise = new WeatherServeice(axios);

const print = ({name, temperature}) => {
  console.log(`StringMatching /Temperature in ${name}: ${temperature}C`);
};

weatherServise
  .get(cityName)
  .then(print);