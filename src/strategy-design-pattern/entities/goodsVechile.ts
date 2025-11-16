import { Vechile } from "./vechile.js";
import { IDriveStrategy } from "../interface/IDriveStrategy.js";

export class GoodsVechile extends Vechile {
    
    constructor(driveStrategy: IDriveStrategy) {
        super(driveStrategy);
    }
}