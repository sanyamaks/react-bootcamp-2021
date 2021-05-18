import { configWeatherAPI, ConfigWeatherAPIType } from './configWeatherAPI'
import {
    TimeType,
    CoordinatesType,
    ResponseWeatherInfo7DaysType,
    ResponseWeatheInforDayPastType,
    ImageType,
} from '../types/types'

const { baseUrl, baseAPIUrl, exclude, units, apiKey }: ConfigWeatherAPIType =
    configWeatherAPI

export const getWeatherInfo7days = async (
    coordinates: CoordinatesType
): Promise<ResponseWeatherInfo7DaysType> => {
    const res = await fetch(
        baseAPIUrl +
            '/data/2.5/onecall?lat=' +
            coordinates.lat +
            '&lon=' +
            coordinates.lon +
            '&exclude=' +
            exclude.join(',') +
            '&units=' +
            units +
            '&appid=' +
            apiKey
    )
    const res1 = res.json()

    return res1
}

export const geWeatherInfotDayPast = async (
    coordinates: CoordinatesType,
    time: TimeType
): Promise<ResponseWeatheInforDayPastType> => {
    const res = await fetch(
        baseAPIUrl +
            '/data/2.5/onecall/timemachine?lat=' +
            coordinates.lat +
            '&lon=' +
            coordinates.lon +
            '&dt=' +
            time +
            '&units=' +
            units +
            '&appid=' +
            apiKey
    )
    const res1 = res.json()

    return res1
}

export const getImageString = (image: ImageType): ImageType => {
    if (!image) {
        return null
    }
    return baseUrl + '/img/wn/' + image + '@2x.png'
}
