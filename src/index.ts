// array
let user: [number, string] = [1, "Dhana"];

user.push(1);

console.log(user);

// enum

const enum Size {
  Small,
  Medium,
  Large,
}
const mySize: Size = Size.Medium;

console.log(mySize);

//function
function incomeTax(income: number, taxYear = 2022): number {
  if (taxYear > 2023) {
    return income * 1.3;
  }
  return 0;
}

incomeTax(10_000, 2022);

// objects
let employee: {
  id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Dhana",
  retire: (date: Date) => {
    console.log(date);
  },
};

// aliase
type Employee = {
  id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee1: Employee = {
  id: 1,
  name: "Dhana",
  retire: (date: Date) => {
    console.log(date);
  },
};

// union
const kgToLbs = (weight: number | string): number => {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
};

kgToLbs(10);

// Intersection
type Dragable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Dragable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};
