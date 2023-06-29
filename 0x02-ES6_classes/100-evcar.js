/* eslint-disable */
const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');
const _range = Symbol('range');

export default class Car {
  constructor(brand, motor, color) {
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  _createCarInstance() {
    const { [_brand]: brand, [_motor]: motor, [_color]: color } = this;
    return new Car(brand, motor, color);
  }

  cloneCar() {
    return this._createCarInstance();
  }
}

export class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[_range] = range;
  }
}

