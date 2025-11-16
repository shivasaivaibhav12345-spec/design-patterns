import { Vechile } from "./strategy-design-pattern/entities/vechile.js";
import { GoodsVechile } from "./strategy-design-pattern/entities/goodsVechile.js";

import { CityDriveStrategy } from "./strategy-design-pattern/strategies/cityDriveStrategy.js";
import { SportsDriveStrategy } from "./strategy-design-pattern/strategies/sportsDriveStrategy.js";

function startStrategyPattern() {

    const vechile1: GoodsVechile = new GoodsVechile(new CityDriveStrategy());
    vechile1.drive();

    const vechile2: Vechile = new Vechile(new SportsDriveStrategy());
    vechile2.drive();
}

startStrategyPattern();