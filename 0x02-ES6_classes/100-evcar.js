const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');
const _range = Symbol('range');

class Car {
  constructor(brand, motor, color) {
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  get brand() {
    return this[_brand];
  }

  get motor() {
    return this[_motor];
  }

  get color() {
    return this[_color];
  }

  cloneCar() {
    const { brand, motor, color } = this;
    return new Car(brand, motor, color);
  }
}

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[_range] = range;
  }

  get range() {
    return this[_range];
  }

  cloneCar() {
    const {
      brand, motor, color, range,
    } = this;
    return new EVCar(brand, motor, color, range);
  }
}

export default EVCar;
