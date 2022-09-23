
const Car = function(manufacturer, price, engine) {
    let _manufacturer = manufacturer;
    let _price = price;
    let _engine = engine;

    this.getManufacturer = () => _manufacturer;
    this.setManufacturer = (manufacturer) => _manufacturer = manufacturer;
    this.getPrice = () => _price;
    this.setPrice = (price) => _price = price;
    this.getEngine = () => _engine;
    this.setEngine = (engine) => _engine = engine;

}

const Dealership = function(name, maximumCarOccupancy) {
    let _name = name;
    let _maximumCarOccupancy = maximumCarOccupancy;
    let _carsInStock = [];


    this.getName = () => _name;
    this.setName = (name) => _name = name;
    this.getMaximumCarOccupancy = () => _maximumCarOccupancy;
    this.SetMaximumCarOccupancy = (maximumCarOccupancy) => _maximumCarOccupancy = maximumCarOccupancy;
    this.getCarsInStock = () => _carsInStock;
    this.setCarsInStock = (carsInStock) => _carsInStock = carsInStock;
    this.addCar = (car) => _carsInStock.push(car); // add cars to stock
    this.numberOfCarsInStock = () => _carsInStock.length // number of cars in stock
    this.getAllManufacturers = () => _carsInStock.map(car => car.getManufacturer()) // get all cars manufacturers
    this.getTotalValue = () => _carsInStock.reduce((reducer, car) => reducer += car.getPrice(),0)
}


module.exports = {Car,Dealership};