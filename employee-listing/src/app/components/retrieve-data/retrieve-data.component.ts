import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { EmployeeListService } from '../../services/employee.list.service';

@Component({
  selector: 'app-retrieve-data',
  templateUrl: './retrieve-data.component.html',
  styleUrls: ['./retrieve-data.component.css']
})
export class RetrieveDataComponent {
  employeeList = [];
  empCount = 0;

  constructor(private _dataService: EmployeeListService) {
    this._dataService.getEmployeeList().subscribe((data: any) => {
      this._dataService.employeeList = data;
      this.employeeList = data;
    });
  }
}
