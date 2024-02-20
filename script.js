// Complete the js code
function Car(make, model) {
  this._make = make;
  this._model = model;
}

// Add method to Car prototype
Car.prototype.getMakeModel = function () {
  return `${this._make} ${this._model}`;
};

// SportsCar constructor function, inheriting from Car
function SportsCar(make, model, topSpeed) {
  Car.call(this, make, model); // Call the Car constructor to set make and model
  this._topSpeed = topSpeed;
}

// Inherit Car prototype in SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar; // Set the constructor property to SportsCar

// Add method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this._topSpeed;
};
// const car = new SportsCar("Ferrari", "Testarossa", 200);
// console.log(car.getMakeModel()); // Output: Ferrari Testarossa
// console.log(car.getTopSpeed()); // Output: 200
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
