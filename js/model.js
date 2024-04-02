import { KEY, API_URL } from "./config.js";
import { getJson } from "./helper.js";

export const result = {};
export const loadResults = async function (query) {
  try {
    const data = await getJson(
      `${API_URL}?q=${query}&appid=${KEY}&units=metric`
    );
    result.id = data.id;
    result.name = data.name;
    result.temp = Math.round(data.main.temp);
    result.windSpeed = data.wind.speed;
    result.humidity = data.main.humidity;
    result.weather = data.weather[0].main;
  } catch (err) {
    throw err;
  }
};
