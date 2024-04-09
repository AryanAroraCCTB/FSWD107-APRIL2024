let fruits = ["apple", "orange", "grapes"];

let isEven = (num) => num % 2 === 0;

// Examples
for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    const length = element.length;
    const isLengthEven = isEven(length);

    console.log(element, length, isLengthEven);
}
