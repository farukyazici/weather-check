import { getNextHours, getWeatherText } from '..'
import { FORECAST_1_DAY, FORECAST_2_DAYS } from '../__mocks__/weather-mock'

describe('Get weather text', () => {
  it('should return weather text properly', () => {
    const hour = {
      temp_c: '29.5'
    }
    expect(getWeatherText(hour)).toEqual('29.5 ºC')
  })
})

describe('Get next hours', () => {
  it('should return hours within one day', () => {
    jest.useFakeTimers().setSystemTime(new Date('2024-09-11 06:00'))
    expect(
      getNextHours(FORECAST_1_DAY.forecast.forecastday, '2024-09-11 06:00', 5),
    ).toEqual([
      {
        time: '2024-09-11 07:00',
        temp_c: 15.7,
        temp_f: 60.2,
        condition: {
          text: 'Cloudy ',
          icon: '//cdn.weatherapi.com/weather/64x64/day/119.png'
        }
      },
      {
        time: '2024-09-11 08:00',
        temp_c: 15.8,
        temp_f: 60.4,
        condition: {
          text: 'Patchy rain nearby',
          icon: '//cdn.weatherapi.com/weather/64x64/day/176.png'
        }
      },
      {
        time: '2024-09-11 09:00',
        temp_c: 15.0,
        temp_f: 59.0,
        condition: {
          text: 'Light drizzle',
          icon: '//cdn.weatherapi.com/weather/64x64/day/266.png'
        }
      },
      {
        time: '2024-09-11 10:00',
        temp_c: 15.5,
        temp_f: 59.9,
        condition: {
          text: 'Patchy rain nearby',
          icon: '//cdn.weatherapi.com/weather/64x64/day/176.png'
        }
      },
      {
        time: '2024-09-11 11:00',
        temp_c: 15.4,
        temp_f: 59.7,
        condition: {
          text: 'Patchy rain nearby',
          icon: '//cdn.weatherapi.com/weather/64x64/day/176.png'
        }
      }
    ])
  })
  it('should return hours within 2 days', () => {
    jest.useFakeTimers().setSystemTime(new Date('2024-09-11 21:00'))
    expect(
      getNextHours(FORECAST_2_DAYS.forecast.forecastday, '2024-09-11 21:00', 5),
    ).toEqual([
      {
        time: '2024-09-11 22:00',
        temp_c: 12.7,
        temp_f: 54.8,
        condition: {
          text: 'Clear ',
          icon: '//cdn.weatherapi.com/weather/64x64/night/113.png'
        }
      },
      {
        time: '2024-09-11 23:00',
        temp_c: 12.3,
        temp_f: 54.2,
        condition: {
          text: 'Clear ',
          icon: '//cdn.weatherapi.com/weather/64x64/night/113.png'
        }
      },
      {
        time: '2024-09-12 00:00',
        temp_c: 16.7,
        temp_f: 62.0,
        condition: {
          text: 'Overcast ',
          icon: '//cdn.weatherapi.com/weather/64x64/night/122.png'
        }
      },
      {
        time: '2024-09-12 01:00',
        temp_c: 16.5,
        temp_f: 61.7,
        condition: {
          text: 'Cloudy ',
          icon: '//cdn.weatherapi.com/weather/64x64/night/119.png'
        }
      },
      {
        time: '2024-09-12 02:00',
        temp_c: 16.2,
        temp_f: 61.1,
        condition: {
          text: 'Overcast ',
          icon: '//cdn.weatherapi.com/weather/64x64/night/122.png'
        }
      }
    ])
  })
})
