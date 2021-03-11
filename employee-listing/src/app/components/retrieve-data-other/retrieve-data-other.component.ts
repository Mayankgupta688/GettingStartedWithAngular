import { Component, OnInit } from '@angular/core';
import { EmployeeOtherService } from '../../services/employee.other.service';

@Component({
  selector: 'app-retrieve-data-other',
  templateUrl: './retrieve-data-other.component.html',
  styleUrls: ['./retrieve-data-other.component.css']
})
export class RetrieveDataOtherComponent implements OnInit {
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
