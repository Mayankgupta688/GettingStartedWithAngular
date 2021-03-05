import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent{
  @Input() emp;
  @Input() salutation;

  @Output() deleteEmployeeEvent = new EventEmitter()

  deleteEmployee() {
    debugger;
    alert(`Employee with Id: ${this.emp.id} and name ${this.emp.name} is about to get deleted from Database`);
    this.deleteEmployeeEvent.emit(this.emp);
  }
}
