// Preserving Context...

var salutationFunction = () => {
    console.log("Hello World from Arrow Function...")
}

function saltutationFunctionNormal() {
    console.log("Salutation From Normal Function...")
}

salutationFunction()

saltutationFunctionNormal()

function doOperation(a, b, c, d, e) {
    return a + b -c * d / e; 
}

var doOperationArrow = (a, b, c, d, e) => {
    return a + b -c * d / e;
}

var data = doOperationArrow(1, 2, 3, 4, 5);

debugger;