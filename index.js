// Step 1: Define the Vehicle Interface
// Step 2: Implement the Car Class
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Step 3: Create an Instance and Verify the start Method
var myCar = new Car("Toyota", "Corolla", 2021);
myCar.start(); // This should log "Car engine started" to the console
