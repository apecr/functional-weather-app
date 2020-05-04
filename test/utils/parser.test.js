/* global describe, it, xit */

import { expect } from 'chai'
import {
  getCity,
  getCountry,
  getWeatherDate,
  getTodaysTemperature,
  getSunriseSunset,
  getTodaysTemplate,
  getForecastRow,
  getForecastTable
} from './../../src/utils/parser'

describe('Parser util', () => {
  it('should return the city', () => {
    expect(getCity({ name: 'City'})).to.be.equal('City')
  })
  it('should return the country', () => {
    expect(getCountry({ sys: {country: 'Country'}})).to.be.equal('Country')
  })
  it('should return the weather condition and description', () => {
    const input = {
      weather: [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04d'
        }
      ],
    }
    expect(getWeatherDate(input)).to.be.equal('Clouds (broken clouds)')
  })
  it('should return todays temperatures', () => {
    const input = {
      'main': {
        'temp': 17.32,
        'feels_like': 16.16,
        'temp_min': 13.89,
        'temp_max': 19,
        'pressure': 1021,
        'humidity': 77
      },
    }

    expect(getTodaysTemperature(input)).to.be.equal('Temperature (min, average, max): 13.89, 17.32, 19')
  })

  it('should return the sunrise and sunset time', () => {
    const input = {
      sys: {
        'sunrise': 1588397265,
        'sunset': 1588448106
      }
    }
    expect(getSunriseSunset(input)).to.be.equal('Sunrise: hh:mm, Sunset: hh:mm')

  })
  it('should return the full template for today', () => {
    const input = {
      'coord': {
        'lon': -8.64,
        'lat': 42.43
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04d'
        }
      ],
      'base': 'stations',
      'main': {
        'temp': 17.32,
        'feels_like': 16.16,
        'temp_min': 13.89,
        'temp_max': 19,
        'pressure': 1021,
        'humidity': 77
      },
      'visibility': 10000,
      'wind': {
        'speed': 3.1,
        'deg': 230
      },
      'clouds': {
        'all': 75
      },
      'dt': 1588430795,
      'sys': {
        'type': 1,
        'id': 6440,
        'country': 'ES',
        'sunrise': 1588397265,
        'sunset': 1588448106
      },
      'timezone': 7200,
      'id': 3113209,
      'name': 'Pontevedra',
      'cod': 200
    }

    const response = `
<div>Pontevedra, ES: Clouds (broken clouds)</div>
<div>Temperature (min, average, max): 13.89, 17.32, 19</div>
<div>Sunrise: hh:mm, Sunset: hh:mm</div>`.trim()

    expect(getTodaysTemplate(input)).to.be.equal(response)
  })
  xit('should return a forecast row', () => {

  })
  xit('should return the full forecast table', () => {

  })
})