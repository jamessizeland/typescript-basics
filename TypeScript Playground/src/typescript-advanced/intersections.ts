type Admin = {
    name: string;
    privilages: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmplyee = Admin & Employee;

const e1: ElevatedEmplyee = {
    name: "Geoffry",
    privilages: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric // intersection type has found the common ground between the two other types

export default e1;