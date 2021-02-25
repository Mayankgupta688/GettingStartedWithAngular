// Function and Variable Hoisting...

// let variable belong to the block where it is declared
// let do not allow variable to be Hoisting..

function executeData() {
    var abc = "mYank";

    for(let ii = 0; ii< 10; ii++) {
        console.log(ii)
    }

    if(abc == "mYank") {
        let j = 20
        console.log(j)
    }

    console.log(j)

    console.log(ii)
}

executeData();

console.log(ii)