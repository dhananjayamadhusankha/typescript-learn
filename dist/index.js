"use strict";
let user = [1, "Dhana"];
user.push(1);
console.log(user);
const mySize = 1;
console.log(mySize);
function incomeTax(income, taxYear = 2022) {
    if (taxYear > 2023) {
        return income * 1.3;
    }
    return 0;
}
incomeTax(10000, 2022);
let employee = {
    id: 1,
    name: "Dhana",
    retire: (date) => {
        console.log(date);
    },
};
let employee1 = {
    id: 1,
    name: "Dhana",
    retire: (date) => {
        console.log(date);
    },
};
const kgToLbs = (weight) => {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
};
kgToLbs(10);
//# sourceMappingURL=index.js.map