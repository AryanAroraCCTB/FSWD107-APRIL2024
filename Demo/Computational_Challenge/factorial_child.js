const factorial = (number) => {
    let result = 1;
    while(number > 0) {
        result = result * number;
        number = number - 1;
    }

    process.send(result);
    return result;
}

factorial(parseInt(process.argv[2]));
// console.log(process.argv[2], ' -> ', factorial(parseInt(process.argv[2])));