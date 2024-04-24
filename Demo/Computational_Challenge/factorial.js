// 3! = 3 * 2 * 1
// 5! = 5 * 4 * 3 * 2 * 1

const factorial = async (number) => {
    let result = 1;
    while(number > 0) {
        result = result * number;
        number = number - 1;
    }

    return result;
}

export default factorial