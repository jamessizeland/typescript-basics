/* eslint-disable react-hooks/rules-of-hooks */
// runtime guarding of type flexibility

// 'in' and 'instanceof' keywords

type Admin = {
    name: string;
    privilages: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privilages' in emp) {
        console.log('Privilages: ' + emp.privilages);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
};

export const e2: Employee = {
    name: 'Barry',
    startDate: new Date()
}

// instance of

class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving...');
    }
    loadCargo(amount: number) {
        console.log('Loading Cargo... ' + amount);
    }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle): void {
    vehicle.drive();
    // if ('loadCargo' in vehicle) {
    if ( vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);

// Discriminated Union
// use a common property between all siblings

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse'
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed: number = 0;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving with speed ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 100})

export default printEmployeeInformation;