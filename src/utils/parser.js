export const getCity = (response) => response.name

export const getCountry = (response) => response.sys.country

export const getWeatherDate = ({ weather }) =>
  `${weather[0].main} (${weather[0].description})`

export const getTodaysTemperature = ({ main }) =>
  `Temperature (min, average, max): ${main.temp_min}, ${main.temp}, ${main.temp_max}`

export const getSunriseSunset = ({sys}) =>
  'Sunrise: hh:mm, Sunset: hh:mm'

export const getTodaysTemplate = response => `
<div>${getCity(response)}, ${getCountry(response)}: ${getWeatherDate(response)}</div>
<div>${getTodaysTemperature(response)}</div>
<div>${getSunriseSunset(response)}</div>`.trim()