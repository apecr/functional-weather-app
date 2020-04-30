/* global describe, it*/

const { expect } = require('chai')
const {
  getParamString,
  getOpenWeatherMapUrl,
} = require('./../../src/utils/endpoints')
const { WEATHER_API_KEY } = require('./../../src/utils/const')

//        http://api.openweathermap.org/data/2.5/weather?q=Pontevedra&units=metric&appid=8d8f16f29fb30a4904cad0ebf21c1dbf
// http://api.openweathermap.org/data/2.5/forecast/daily?q=Pontevedra&units=metric&appid=8d8f16f29fb30a4904cad0ebf21c1dbf&cnt=16

describe('Endpoints', () => {
  it('Should translate undefined and {} into an empty param string', () => {
    expect(getParamString()).to.be.equal('')
    expect(getParamString({})).to.be.equal('')
  })
  it('Should translate an object into a param string', () => {
    const params = {
      key1: 'value1',
      key2: 'value2',
    }
    const result = '&key1=value1&key2=value2'
    expect(getParamString(params)).to.be.equal(result)
  })
  it('Should assemble the weather endpoint URL with params', () => {
    const params = {
      key1: 'value1',
      key2: 'value2',
    }
    const url = getOpenWeatherMapUrl('http://api.openweathermap.org/data/2.5/')('api')(params)('Pontevedra')
    const result = `http://api.openweathermap.org/data/2.5/api?q=Pontevedra&appid=${WEATHER_API_KEY}${getParamString(params)}`
    expect(url).to.be.equal(result)
  })
})


