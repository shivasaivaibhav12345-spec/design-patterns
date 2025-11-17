export interface IObserver {
    update(weatherData: WeatherData): void;
}