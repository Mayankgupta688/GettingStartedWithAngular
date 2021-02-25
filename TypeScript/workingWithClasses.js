class Employee {
    name = "";
    age: any = 0;
    designation = "";
    private salary: any = 1000;

    constructor(userName: string, userAge: any, userDesignation: string) {
        this.name = userName;
        this.age = userAge;
        this.designation = userDesignation;
    }

    getDetails() {
        console.log(this.name)
    }

    getSalary() {
        console.log("User Salary is: " + this.salary)
    }

    setSalary(salaryInput: number) {
        this.salary = salaryInput;
    }
}

var employeeOne = new Employee("dfgfdgfdg", 20, "Developer");
employeeOne.getDetails()
employeeOne.getSalary()

var employeeTwo = new Employee("Anshukl", "30", "Developer");
employeeTwo.getDetails()
employeeTwo.getSalary()