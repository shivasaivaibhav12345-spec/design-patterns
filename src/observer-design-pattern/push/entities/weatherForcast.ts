import { IObserver } from "../interface/IObserver.js";
import { IObservable } from "../interface/IObservable.js";

export class WeatherForcast implements IObservable {
    private weatherData: WeatherData;
    private observers: IObserver[];

    constructor() {
        this.weatherData = {} as WeatherData;
        this.observers = [];
    }

    public addObserver(observer: IObserver): void {
        this.observers.push(observer);
    }

    public removeObserver(observer: IObserver): void {
        this.observers = this.observers.filter((o) => o !== observer);
    }

    public notifyObserver(): void {
        this.observers.forEach((o) => o.update(this.weatherData));
    }

    public updateState(weatherData: WeatherData): void {
        if (JSON.stringify(this.weatherData) != JSON.stringify(weatherData)) {
            this.weatherData = weatherData;
            this.notifyObserver();
        }
    }
}
