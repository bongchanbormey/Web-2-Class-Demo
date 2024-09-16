// 1. Write a function that takes an object with two properties as argument. It should return the value
//  of the property with key country.
function keyCountry(countryObject) {
    return countryObject.country;
}

// Test cases
console.log(keyCountry({ continent: 'Asia', country: 'Japan'}));
console.log(keyCountry({ country: 'Sweden', continent: 'Europe'}));



//2. Write a function that takes two objects as arguments. Unfortunately, the property 'country' in the
//  second object has the wrong key
// It should be named 'city' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'planet', 'continent', 'country', 'state', and 'city'
function resultingObject(obj1, obj2) {
    var resultObj = {};

    // Object 1 contains continent & country
    resultObj.continent = obj1.continent;
    resultObj.country = obj1.country;

    // Object 2 contains planet, country, state
    resultObj.planet = obj2.planet;
    resultObj.state = obj2.state;

    // Rename the wrong key ('country') to ('city')
    resultObj.city = obj2.country;

    return resultObj;
}


// Test cases
console.log(resultingObject({ continent: 'Europe', country: 'Germany' }, { planet: 'Earth', country: 'Munich', state: 'Bavaria' }))
console.log(resultingObject({ continent: 'North America', country: 'USA' }, { planet: 'Earth', country: 'Los Angeles', state: 'California' }))



// 3. Write a function that takes an object as an argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
function mixedKeys(obj) {
    // Use Object.keys() to get an array of keys, then use reduce() to build the swapped object
    return Object.keys(obj).reduce(function(swapped, key) {
        swapped[obj[key]] = key;
        return swapped;
    }, {});
}

// Test cases
console.log(mixedKeys({ bear: 'animal', sow: 'female', boar: 'male', cub: 'young' }));
console.log(mixedKeys({ sheep: 'animal', ewe: 'female', ram: 'male', lamb: 'young' }));
console.log(mixedKeys({ Berlin: 'city', Germany: 'country' }));