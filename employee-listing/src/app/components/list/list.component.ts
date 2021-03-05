import { Component } from '@angular/core';
import * as data from "../../data/data.json";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {
  salutation = "TechnoFunnel"
  employeeList  = [];
  managerEmployee = {
    id: 20,
    name: "Mayank"
  }

  deleteEmployeeFromList(employee) {
    alert(`Deleting Employee with Id ${employee.id}`);
  }

  constructor() {
    this.employeeList = data["employeeArray"];
  }
}
