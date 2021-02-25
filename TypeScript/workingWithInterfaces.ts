interface IEmployee {
    name: string,
    age: number,
    salary?: number
}

var employeeOne: IEmployee = {
    name: "Mayank",
    age: 10,
    salary: 1000
}

var employeeTwo: IEmployee = {
    name: "Mayank",
    age: 10,
    salary: 2000
}

var employeeThree: IEmployee = {
    name: "Mayank",
    age: 10,
    salary: 50
}

var arrayOfEmployee: IEmployee[] = [employeeOne, employeeTwo, employeeThree]

for(let i = 0; i < arrayOfEmployee.length; i++) {
    if(arrayOfEmployee[i].name != undefined) {
        console.log(arrayOfEmployee[i].name)
    }
}