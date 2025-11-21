import { IObserverPull } from "./IObserver.js";

export interface IObservable {
    
    addObserver(observer: IObserverPull): void;

    removeObserver(observer: IObserverPull): void;

    notifyObserver(): void;

    updateState(weatherData: WeatherData): void;

    getState(): WeatherData;
}