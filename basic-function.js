// Function that adds two numbers
function addNumbers(firstNum, secondNum) {
    return firstNum + secondNum;
}

// Function to display the sum result
function displaySum() {
    var firstNum = parseFloat(document.getElementById('sum1').value);
    var secondNum = parseFloat(document.getElementById('sum2').value);
    var sum = addNumbers(firstNum, secondNum);
    document.getElementById('sumResult').textContent = `The sum of the numbers is ${sum}.`;
}


// Function that find the maximum number
function findMaxNum(firstNum, secondNum) {
    var maxNum;
    if (firstNum > secondNum) {
        maxNum = firstNum;
    } else { 
        maxNum = secondNum; 
    }

    return maxNum;
}

// Another way to write the above function
// function findMaxNum(firstNum, secondNum) {
//     return firstNum > secondNum ? firstNum : secondNum;
// }

// Function to display the max number
function displayMaxNumber() {
    var firstNum = parseFloat(document.getElementById('num1').value);
    var secondNum = parseFloat(document.getElementById('num2').value);
    var maxNumber = findMaxNum(firstNum, secondNum);
    document.getElementById('maxResult').textContent = `The maximum number is ${maxNumber}.`;
}

// Function to check for odd/even number
function evenOrOdd(num) {
    return num % 2 == 0 ? 'even': 'dd';
}

// Function to display odd/even result
function displayEvenOrOdd() {
    var num = parseFloat(document.getElementById('evenOddNum').value);
    var evenOrOddResult = evenOrOdd(num);
    document.getElementById('evenOrOddResult').textContent = `The number is ${evenOrOddResult}`;
}