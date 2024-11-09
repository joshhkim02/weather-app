const formButton = document.querySelector('.button');
const searchElement = document.querySelector('#location');
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

formButton.addEventListener('click', () => {
  (async function () {
    const res = await getWeather(searchElement.value);

    let dayData = {
      dateTime: res.days[0].datetime,
      maxTemp: res.days[0].tempmax,
      minTemp: res.days[0].tempmin,
      windSpeed: res.days[0].windspeed,
    };

    console.log('Day Data:');
    console.log(dayData);
  })();

  (async function () {
    const res = await getWeather(searchElement.value);

    let currentData = {
      feelsLike: res.currentConditions.feelslike,
      temperature: res.currentConditions.temp,
      uvIndex: res.currentConditions.uvindex,
      dateTime: res.currentConditions.datetime,
    };

    console.log('Current conditions:');
    console.log(currentData);
  })();
});

/*
    Option 1:
*/

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
