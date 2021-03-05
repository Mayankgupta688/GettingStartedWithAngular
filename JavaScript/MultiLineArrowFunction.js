// 1. Original Data should not be mutated (Immutability)


var userAge = [10, 20, 30, 40, 50, 60, 70, 80];

userAge = userAge.map(age => age + 1);

var filterData = userAge.filter((age) => {
    let updatedAge = age * 2 + 5;
    if(updatedAge > 40) {
        return true
    } else {
        return false;
    }
})

