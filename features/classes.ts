class Vehicle {
  constructor(public color: string) {}

  // commented out so we can make Car's drive - private

  // drive(): void {
  //   console.log('driveeeeeeee');
  // }

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('inherited from its parent - Vehicle');
  }

  public startDrive(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'blue');
console.log(car.color);
