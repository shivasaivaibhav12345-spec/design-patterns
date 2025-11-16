import { IDriveStrategy } from "../interface/IDriveStrategy.js";

export class CityDriveStrategy implements IDriveStrategy {
    
    public drive(): void {
        console.log(`City driving mode activated!!..`);
        return;
    }
}