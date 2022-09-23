

const Dealership = function(name, maximumCarOccupancy,carsInStock) {
    let _name = name;
    let _maximumCarOccupancy = maximumCarOccupancy;
    let _carsInStock = [];


    this.getName = () => {_name};
    this.setName = (name) => {_name = name};
    this.getMaximumCarOccupancy = () => {_maximumCarOccupancy};
    this.SetMaximumCarOccupancy = (maximumCarOccupancy) => {_maximumCarOccupancy = maximumCarOccupancy};
    this.getCarsInStock = () => {_carsInStock};
    this.setCarsInStock = (carsInStock) => {_carsInStock = carsInStock};
    this.addCar = (car) => {carsInStock.push(car)}; // add cars to stock
    this.numberOfCarsInStock = () => {carsInStock.length()} // number of cars in stock
    this.getAllManufacturers = () => {getCarsInStock().map((car) => car.getManufactuer())}

}


