// Step 1: Define the Vehicle Interface

interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Step 2: Implement the Car Class
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

// Step 3: Create an Instance and Verify the start Method
const myCar = new Car("Toyota", "Corolla", 2021);
myCar.start(); // This should log "Car engine started" to the console
