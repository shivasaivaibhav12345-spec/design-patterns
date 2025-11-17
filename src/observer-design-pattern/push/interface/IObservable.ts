import { IObserver } from "./IObserver.js";

export interface IObservable {
    
    addObserver(observer: IObserver): void;

    removeObserver(observer: IObserver): void;

    notifyObserver(): void;

    updateState(weatherData: WeatherData): void;
}