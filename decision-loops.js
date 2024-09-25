function mathOperation(num1, num2, operator) {
    switch(operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return 'Invalid operator';
    }
}


// Test cases
console.log(mathOperation(2, 2, '+'));
console.log(mathOperation(4, 2, '-'));
console.log(mathOperation(2, 2, '*'));
console.log(mathOperation(4, 2, '/'));



// Determine whether it is prime or not.
function primeNumber(n) {
    if (n <= 1) return false; // 0 and 1 are not prime numbers
    if (n <= 3) return true;  // 2 and 3 are prime numbers

    // Check for even numbers greater than 2
    if (n % 2 === 0) return false;

    // Check for factors from 3 to the square root of n
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(primeNumber(1));
console.log(primeNumber(2));
console.log(primeNumber(3));
console.log(primeNumber(6));