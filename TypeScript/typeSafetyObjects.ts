var employeeOne = {
    name: "Mayank",
    age: 10
}

var employeeTwo = {
    username: "Mayank",
    userage: 10
}

var employeeThree = {
    employeename: "Mayank",
    employeeage: 10
}

var arrayOfEmployee = [employeeOne, employeeTwo, employeeThree]

for(let i = 0; i < arrayOfEmployee.length; i++) {
    if(arrayOfEmployee[i].name != undefined) {
        console.log(arrayOfEmployee[i].name)
    }

    if(arrayOfEmployee[i].username != undefined) {
        console.log(arrayOfEmployee[i].name)
    }
    

    if(arrayOfEmployee[i].employeename != undefined) {
        console.log(arrayOfEmployee[i].employeename)
    }
    
}