let string=" plain text"
let numbers=1
let float=9.89

let array=[string,numbers, float]

let object={ name: string , age:numbers, height: float, array }

Object.entries(object).forEach(element => {
    console.log(element)
});

array.forEach(element => {
    console.log(element)
});
