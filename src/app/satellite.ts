export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    addWarning: boolean = true;
    color = ''

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.orbitType = orbitType;
        this.type = type;
        this.operational = operational;
        this.launchDate = launchDate;
    }

    shouldShowWarning () {
        if (this.type === 'Space Debris') {
            this.addWarning = true;
            this.color = 'red';
        } else {
            this.addWarning = false;
        }
    }

}

 
