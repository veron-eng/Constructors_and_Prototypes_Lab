
const {Car} = require('./car.js');
const {Dealership} = require('./car.js');

let dealership1 = new Dealership("Verons dealership",10,0);
let car1 = new Car("tesla", 900, 1.6);
let car2 = new Car("ford", 10, 1.2);
let car3 = new Car("ford", 109, 1.8);

dealership1.addCar(car1);
dealership1.addCar(car2);
//dealership1.addCar(car3);

test("have access to car manufacturer", () => {
    actual = car1.getManufacturer();
    expected = ("tesla");
    expect(actual).toBe(expected)
})

test("have access to cars price", () => {
    actual = car1.getPrice();
    expected = (900);
    expect(actual).toBe(expected)
})

test("have access to cars engine size", () => {
    actual = car1.getEngine();
    expected = (1.6);
    expect(actual).toBe(expected)
})

test("have access to car dealership name", () => {
    actual = dealership1.getName();
    expected = ("Verons dealership");
    expect(actual).toBe(expected)
})

test("have access to car dealership maximum occupancy", () => {
    actual = dealership1.getMaximumCarOccupancy();
    expected = (10);
    expect(actual).toBe(expected)
})

test("retreieve the number of cars in the sealership", () => {
    actual = dealership1.numberOfCarsInStock()
    expected = (2);
    expect(actual).toBe(expected)
})


test("add car to stock", () => {
    dealership1.addCar(car3);
    actual = dealership1.numberOfCarsInStock()
    expected = (3);
    expect(actual).toBe(expected)
})

test("return each cars manufacturer", () => {
    actual = dealership1.getAllManufacturers().length
    expected = (3);
    expect(actual).toBe(expected)
})

test("return total value of cars", () => {
    actual = dealership1.getTotalValue()
    expected = (1019);
    expect(actual).toBe(expected)
})
