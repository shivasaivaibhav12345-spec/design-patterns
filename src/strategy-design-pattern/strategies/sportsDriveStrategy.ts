import { IDriveStrategy } from "../interface/IDriveStrategy.js";

export class SportsDriveStrategy implements IDriveStrategy {
    
    public drive(): void {
        console.log(`Sports driving mode activated!!..`);
        return;
    }
}