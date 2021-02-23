var userDetails = {
    name: "TechnoFunnel",
    age: 10,
    designation: "Company One..."
}

var otherDetails = {
    name: "OtherObject",
    age: 1,
    designation: "Company",
    salary: 1000
}

var a = 10;

a = 20;

debugger;

var newObject = {
    salary: 100
};

newObject.salary = 18888;

var newObject = { 
    ...userDetails,
    ...otherDetails
}

for(var key in userDetails) {
    newObject[key] = userDetails[key]
}

for(var key in otherDetails) {
    newObject[key] = otherDetails[key]
}

var data = userDetails;

userDetails = {
    ...userDetails
}

debugger;
