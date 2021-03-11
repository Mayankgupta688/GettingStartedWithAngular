import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList = [];
  masterList = [];

  constructor(private _http: HttpClient, private _dataService: DataService) { }

  ngOnInit(): void {
    debugger;
    this._dataService.getData().subscribe((data: any) => {
      this.employeeList = data;
      this.masterList = data;
    })

    this._dataService.filterEmployeeEvent.subscribe((filteredTextInput) => {
      this.employeeList = this.masterList.filter((employee) => {
        return employee.name.indexOf(filteredTextInput) > -1;
      })
    })

    this._dataService.deleteEmployeeEvent.subscribe((empId) => {
      debugger;
      this._http.delete(`https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees/${empId}`).subscribe((data) => {
        this.masterList = this.masterList.filter((employee) => {
          return employee.id != empId;
        })
  
        this.employeeList = this.masterList;
      })
    })
  }

}
