import { Vechile } from "./strategy-design-pattern/entities/vechile.js";
import { GoodsVechile } from "./strategy-design-pattern/entities/goodsVechile.js";

import { CityDriveStrategy } from "./strategy-design-pattern/strategies/cityDriveStrategy.js";
import { SportsDriveStrategy } from "./strategy-design-pattern/strategies/sportsDriveStrategy.js";

import { IObserver } from "./observer-design-pattern/push/interface/IObserver.js";

import { WeatherForcast } from "./observer-design-pattern/push/entities/weatherForcast.js";
import { SmsNotificationObserver } from "./observer-design-pattern/push/entities/smsNotificationObserver.js";
import { PushNotificationObserver } from "./observer-design-pattern/push/entities/pushNotificationObserver.js";

import { IObserverPull } from "./observer-design-pattern/pull/interface/IObserver.js";

import { WeatherForcastPull } from "./observer-design-pattern/pull/entities/weatherForcast.js";
import { SmsNotificationObserverPull } from "./observer-design-pattern/pull/entities/smsNotificationObserver.js";
import { PushNotificationObserverPull } from "./observer-design-pattern/pull/entities/pushNotificationObserver.js";

function startStrategyPattern() {
    const vechile1: GoodsVechile = new GoodsVechile(new CityDriveStrategy());
    vechile1.drive();

    const vechile2: Vechile = new Vechile(new SportsDriveStrategy());
    vechile2.drive();
}

function startPushObserverPattern() {
    const observer1: IObserver = new PushNotificationObserver("Nikitha");
    const observer2: IObserver = new PushNotificationObserver("Vaibhav");

    const observer3: IObserver = new SmsNotificationObserver("Sai Shankar");
    const observer4: IObserver = new SmsNotificationObserver("Chandramouli");

    const weatherForcaster = new WeatherForcast();
    weatherForcaster.addObserver(observer1);
    weatherForcaster.addObserver(observer2);
    weatherForcaster.addObserver(observer3);
    weatherForcaster.addObserver(observer4);

    weatherForcaster.updateState({
        city: "Hyderabad",
        climate: "Cold",
        temparature: "10 degree celsius",
    } as WeatherData);

    weatherForcaster.removeObserver(observer2);

    weatherForcaster.updateState({
        city: "Hyderabad",
        climate: "Cold",
        temparature: "11 degree celsius",
    } as WeatherData);
}

function startPullObserverPattern() {
    const weatherForcaster = new WeatherForcastPull();
    const observer1: IObserverPull = new PushNotificationObserverPull("Nikitha", weatherForcaster)
    const observer2: IObserverPull = new PushNotificationObserverPull("Vaibhav", weatherForcaster);

    const observer3: IObserverPull = new SmsNotificationObserverPull("Sai Shankar", weatherForcaster);
    const observer4: IObserverPull = new SmsNotificationObserverPull("Chandramouli", weatherForcaster);


    weatherForcaster.addObserver(observer1);
    weatherForcaster.addObserver(observer2);
    weatherForcaster.addObserver(observer3);
    weatherForcaster.addObserver(observer4);

    weatherForcaster.updateState({
        city: "Hyderabad",
        climate: "Cold",
        temparature: "10 degree celsius",
    } as WeatherData);

    weatherForcaster.removeObserver(observer2);

    weatherForcaster.updateState({
        city: "Hyderabad",
        climate: "Cold",
        temparature: "11 degree celsius",
    } as WeatherData);
}


// startStrategyPattern();

// startPushObserverPattern();

startPullObserverPattern();
