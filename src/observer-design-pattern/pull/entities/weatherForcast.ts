import { IObserverPull } from "../interface/IObserver.js";
import { IObservable } from "../interface/IObservable.js";

export class WeatherForcastPull implements IObservable {
    private weatherData: WeatherData;
    private observers: IObserverPull[];

    constructor() {
        this.weatherData = {} as WeatherData;
        this.observers = [];
    }

    public addObserver(observer: IObserverPull): void {
        this.observers.push(observer);
    }

    public removeObserver(observer: IObserverPull): void {
        this.observers = this.observers.filter((o) => o !== observer);
    }

    public notifyObserver(): void {
        this.observers.forEach((o) => o.update());
    }

    public updateState(weatherData: WeatherData): void {
        if (JSON.stringify(this.weatherData) != JSON.stringify(weatherData)) {
            this.weatherData = weatherData;
            this.notifyObserver();
        }
    }

    public getState(): WeatherData {
        return this.weatherData;
    }
}
