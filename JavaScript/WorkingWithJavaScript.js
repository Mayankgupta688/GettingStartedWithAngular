function doOperation(a, b, c, d, e) {
    return a + b -c * d / e; 
}

var outputFromFirstOperation = doOperation(1, 2, 3, 4, 5)
var outputFromSecondOperation = doOperation(1, 2, 3, 40, 5)
var outputFromThirdOperation = doOperation(1, 2, 3, 40, 10)

console.log(outputFromFirstOperation)
console.log(outputFromSecondOperation)
console.log(outputFromThirdOperation)
