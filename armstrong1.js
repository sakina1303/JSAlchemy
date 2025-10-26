function isArmstrong(number) {
    let sum = 0;
    const digits = number.toString().split('');
    const numDigits = digits.length;

    for (let digit of digits) {
        sum += Math.pow(parseInt(digit), numDigits);
    }

    return sum === number;
}


