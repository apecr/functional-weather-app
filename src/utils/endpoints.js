const WEATHER_API_KEY = process.env.API_KEY

export const getParamString = (params = {}) =>
  Object.entries(params).reduce(
    (acc, [key, value]) => `${acc}&${key}=${value}`,
    ''
  )

export const getOpenWeatherMapUrl =
    prefix =>
      endpoint =>
        params =>
          city =>
            `${prefix}${endpoint}?q=${city}&appid=${WEATHER_API_KEY}${getParamString(params)}`
