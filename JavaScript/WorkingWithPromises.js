var data = "Mayank";

var username = "Mayank";

var myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        if(username == "Anshul") {
            resolve("This is Correct User");
        } else {
            reject("Wrong Name Entered...");
        }
    }, 5000);
});

abc(myPromise);

function abc(data) {
    data.then(function(resolution) {
        console.log("User Name is: " + resolution);
    }, (rejectionReason) => {
        console.log(rejectionReason);
    });
}

console.log(data);