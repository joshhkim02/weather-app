const key = '55JLVRQAYP78BLMK2WPVYX9FK';

async function getWeather(location) {
  try {
    let data = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${key}`
    );
    let result = await data.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

/*
    Option 1:
*/
(async function () {
  const res = await getWeather('chandler');

  let dayData = {
    dateTime: res.days[1].datetime,
    maxTemp: res.days[1].tempmax,
    minTemp: res.days[1].tempmin,
    windSpeed: res.days[1].windspeed,
  };

  console.log('Day Data:');
  console.log(dayData);
})();

(async function () {
  const res = await getWeather('chandler');

  let currentData = {
    feelsLike: res.currentConditions.feelslike,
    temperature: res.currentConditions.temp,
    uvIndex: res.currentConditions.uvindex,
    dateTime: res.currentConditions.datetime,
  };

  console.log('Current conditions:');
  console.log(currentData);
})();

/*
    Option 2:
*/
// function returnWeather() {
//   getWeather('seoul').then((result) => console.log(result));
// }
// returnWeather();

/*
    Option 3: 
    Basically option 2
*/
// getWeather('seoul').then((result) => console.log(result));
