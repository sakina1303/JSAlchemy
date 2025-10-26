// Armstrong number check in JavaScript

function isArmstrong(num) {
  let sum = 0;
  const digits = num.toString().split('');
  const power = digits.length;

  for (let digit of digits) {
    sum += Math.pow(Number(digit), power);
  }

  return sum === num;
}

// Example usage:
const number = 153; // Try 370, 371, 9474, etc.
if (isArmstrong(number)) {
  console.log(`${number} is an Armstrong number.`);
} else {
  console.log(`${number} is not an Armstrong number.`);
}
