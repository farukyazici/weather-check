import { Current, Hour } from '../redux'

export const getWeatherText = (hour: Hour | Current) => `${hour?.temp_c} ºC`
