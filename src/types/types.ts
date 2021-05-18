type CoordinatesType = {
    lat: string
    lon: string
}

type TimeType = number | null

type CityType = {
    id: number
    name: string
    coordinates: CoordinatesType
}

type CitiesType = CityType[]

type TemperatureType = number | null

type ImageType = string | null

type WeatherCardType = {
    date: TimeType
    temperature: TemperatureType
    image: ImageType
} | null

type Weather7DaysCardsType = WeatherCardType[]

type ErrorType = string | null

type ResponseSuccessfulWeatherInfo7DaysItemType = {
    dt: TimeType
    weather: [{ icon?: string }]
    temp: { day: number }
} | null

type ResponseSuccessfulWeatherInfoDayPastType = {
    dt: TimeType
    weather: [{ icon?: string }]
    temp: number
} | null

type ResponseSuccessfulWeatherInfo7DaysType =
    ResponseSuccessfulWeatherInfo7DaysItemType[]

type ResponseWeatherInfo7DaysType = {
    daily?: ResponseSuccessfulWeatherInfo7DaysType
    message?: ErrorType
}

type ResponseWeatheInforDayPastType = {
    current?: ResponseSuccessfulWeatherInfoDayPastType
    message?: ErrorType
}
type isLoadingType = boolean

export type {
    TimeType,
    CoordinatesType,
    TemperatureType,
    ImageType,
    WeatherCardType,
    Weather7DaysCardsType,
    ResponseWeatherInfo7DaysType,
    ResponseSuccessfulWeatherInfo7DaysType,
    ResponseSuccessfulWeatherInfoDayPastType,
    ResponseSuccessfulWeatherInfo7DaysItemType,
    ResponseWeatheInforDayPastType,
    ErrorType,
    CityType,
    CitiesType,
    isLoadingType,
}
