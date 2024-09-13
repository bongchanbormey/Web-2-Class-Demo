// 1. Write a function that has a local variable balance. This variable should be different from the global
//  balance variable. Inside the function, increment the local balance, and outside the function, increment
//  the global balance. Compare the values.

var globalBalance = 100;

function localScope() {
    var localBalance = 0;
    localBalance += 100;
    console.log(localBalance);
}

// Output = 100
localScope();

// Output = 150
globalBalance += 50;
console.log(globalBalance);


// 2. Write a function that takes an object representing an item as an argument. The object contains two
//  properties: price (number) and quantity (number). The function should return the total price by multiplying
//   the price by the quantity.

function myFunction(item) {
    this.price = item.price;
    this.quantity = item.quantity;
    return this.price * this.quantity;
};

// Output: 30 & 50
console.log(myFunction({price: 10, quantity: 3 }))
console.log(myFunction({price: 5, quantity: 10}))