import { IObservable } from "../interface/IObservable.js";
import { IObserverPull } from "../interface/IObserver.js";

export class PushNotificationObserverPull implements IObserverPull {
    private oberverName: string;
    private observable: IObservable;

    constructor(name: string, observable: IObservable) {
        this.oberverName = name;
        this.observable = observable;
    }

    public update(): void {
        const weatherData = this.fetchDataFromObservable();
        console.log(
            `Hey ${this.oberverName}, you have recevied a push notification of wheater data....`
        );
        console.log(
            `climate at ${weatherData.city} is ${weatherData.climate}, temparatue -> ${weatherData.temparature}`
        );
        console.log();
    }

    private fetchDataFromObservable() {
        return this.observable.getState();
    }
}
