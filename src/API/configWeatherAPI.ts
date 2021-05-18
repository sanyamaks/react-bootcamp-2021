export type ConfigWeatherAPIType = {
    baseUrl: string
    baseAPIUrl: string
    apiKey: string
    exclude: string[]
    units: string
}

export const configWeatherAPI: ConfigWeatherAPIType = {
    baseUrl: 'https://openweathermap.org',
    baseAPIUrl: 'https://api.openweathermap.org',
    apiKey: '7b54e6539c1070699e6118ca175348c7',
    exclude: ['current', 'minutely', 'hourly', 'alerts'],
    units: 'metric',
}
