// 1. Original Data should not be mutated (Immutability)


var userAge = [10, 20, 30, 40, 50, 60, 70, 80];

// Option One...

for(let i = 0; i< userAge.length; i++) {
    userAge[i] += 1;
}

// Option Two...

var updateAge = [];
for(let i = 0; i< userAge.length; i++) {
    updateAge.push(userAge[i] + 1);
}

var userAge = updateAge;

// Option Three...

var updateAge = [];
for(let value of userAge) {
    updateAge.push(value)
}

var userAge = updateAge;


var userAge = updateAge;

// Fifth Option

function IterateAndAdd(arr) {
    for(let i = 0; i< arr.length; i++) {
        arr[i] += 1;
    }
    return arr;
}

var outputData = IterateAndAdd([1, 2, 3, 4])

// Sixth Operation

userAge = userAge.map(age => age + 1)