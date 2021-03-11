import { Component, Input } from '@angular/core';
import { EmployeeListService } from '../../services/employee.list.service';

@Component({
  selector: 'app-employee-counter',
  templateUrl: './employee-counter.component.html',
  styleUrls: ['./employee-counter.component.css']
})
export class EmployeeCounterComponent {
  @Input() empCounter;
  constructor(private _dataService: EmployeeListService) {}

  getEmployeeCount() {
    debugger;
    this._dataService.getEmployeeList().subscribe((data: any) => {
      this.empCounter = data.length;
      debugger;
    })
  }

}
