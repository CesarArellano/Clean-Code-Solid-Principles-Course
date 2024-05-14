export abstract class Vehicle {
  constructor(private numberOfSeats: number) {}

  getNumberOfSeats = (): number => this.numberOfSeats;
}

export class Tesla extends Vehicle {
  constructor(numberOfSeats: number) {
    super(numberOfSeats);
  }
}

export class Audi extends Vehicle {
  constructor(numberOfSeats: number) {
    super(numberOfSeats);
  }
}

export class Toyota extends Vehicle {
  constructor(numberOfSeats: number) {
    super(numberOfSeats);
  }
}

export class Honda extends Vehicle {
  constructor(numberOfSeats: number) {
    super(numberOfSeats);
  }
}

export class Volvo extends Vehicle {
  constructor(numberOfSeats: number) {
    super(numberOfSeats);
  }
}
