class Car{
    constructor(wheels, fuel){
        this.wheels = wheels;
        this.fuel = fuel
    }
    gas() {
        console.log("gas it!")
    }
}

class Bike extends Car {
    constructor(wheels, fuel, helmet){
        super(wheels, fuel)
        this.helmet = helmet
    }
    gas() {
        super.gas()
        console.log('ramdamdamdamdam')
    }
    wheelie() {
        console.log("put it up!")
    }
}

let xtz = new Bike(2, 'alcohol', 'Verstappen');
let v40 = new Car(4, 'oil');