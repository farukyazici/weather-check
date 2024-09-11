import dayjs, { Dayjs } from 'dayjs'
import { Current, ForecastDay, Hour } from '../redux'

export const getWeatherText = (hour: Hour | Current) => `${hour?.temp_c} ºC`

export const getNextHours = (forecastday: ForecastDay[], localtime: Dayjs, limit: number) => {
    const forecastHourList = forecastday?.map((f: ForecastDay) => f.hour)
    const currentTimestamp = dayjs(localtime).add(1, 'hour').format('YYYY-MM-DD HH:00')
    const mergedHours: Hour[] = forecastHourList?.flat()?.map(hour => ({
        time: hour.time,
        condition: hour.condition,
        temp_c: hour.temp_c,
        temp_f: hour.temp_f
      })
    )
    const nextHourIndex = mergedHours?.findIndex(hour => hour.time === currentTimestamp)
    const nextHours = mergedHours?.slice(nextHourIndex, nextHourIndex + limit)
    return nextHours
}
