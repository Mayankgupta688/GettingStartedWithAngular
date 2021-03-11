import { Component, OnInit } from '@angular/core';
import { EmployeeOtherService } from '../../services/employee.other.service';

@Component({
  selector: 'app-employee-counter-other',
  templateUrl: './employee-counter-other.component.html',
  styleUrls: ['./employee-counter-other.component.css']
})
export class EmployeeCounterOtherComponent implements OnInit {
  employeeList = [];
  constructor(private _employeeListService: EmployeeOtherService) { 
    this._employeeListService.notifyData.subscribe((data) => {
      debugger;
      this.employeeList = data;
    })
  }

  ngOnInit(): void {
  }

}
