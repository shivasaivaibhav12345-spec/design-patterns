import { IObserver } from "../interface/IObserver.js";

export class PushNotificationObserver implements IObserver {
    private oberverName: string;

    constructor(name: string) {
        this.oberverName = name;
    }

    public update(weatherData: WeatherData): void {
        console.log(
            `Hey ${this.oberverName}, you have recevied a push notification of wheater data....`
        );
        console.log(
            `city -> ${weatherData.city}, temparatue -> ${weatherData.temparature}`
        );
        console.log();
    }
}
