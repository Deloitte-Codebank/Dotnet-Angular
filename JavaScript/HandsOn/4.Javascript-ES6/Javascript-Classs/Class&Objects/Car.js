//A class is a blueprint. 
// An object is an instance of that blueprint.
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  showDetails() {
    console.log(`🚗 This car is a ${this.brand} ${this.model}`);
  }
}

const car1 = new Car("Toyota", "Corolla");
car1.showDetails(); // Output: This car is a Toyota Corolla
