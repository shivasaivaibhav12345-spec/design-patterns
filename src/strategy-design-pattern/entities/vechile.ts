import { IDriveStrategy } from "../interface/IDriveStrategy";

export class Vechile {
    private driveStrategy: IDriveStrategy;

    constructor(driveStrategy: IDriveStrategy) {
        this.driveStrategy = driveStrategy;
    }

    public drive(): void {
        this.driveStrategy.drive();
    }
}