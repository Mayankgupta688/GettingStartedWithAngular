import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {

  @Input() employee;
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
  }

  deleteEmployee(employeeId: string) {
    this._dataService.deleteEmployeeEvent.emit(employeeId);
  }

}
