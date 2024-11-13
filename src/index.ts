// array
let user: [number, string] = [1, 'Dhana']

user.push(1)

console.log(user)

// enum

const enum Size {Small, Medium, Large}
const mySize: Size = Size.Medium

console.log(mySize)

//function
function incomeTax(income:number):number {
    let x;
    if (income < 50_000) 
        return income*1.2
    return income*1.3
}