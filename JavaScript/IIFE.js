// Concept of IIFEs

function getData() {
    console.log("Hello World...")
    return {
        name: "Mayank",
        age: 10
    }
}

var data = getData();
var data1 = getData();

// ..............................

var userDetails = (function getData() {
    var abc = "akdgsd";
    var bbc = "ahasldh";
    
    console.log("Hello World...")
    return {
        name: "Mayank",
        age: 10
    }
})();

console.log(userDetails)