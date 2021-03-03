import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-other',
  templateUrl: './two-way-other.component.html',
  styleUrls: ['./two-way-other.component.css']
})
export class TwoWayOtherComponent {

  empAge: any = 10;
  empName: any = "Mayank";
  empSalary: any = 10000;
  empDesignation: any = "Developer";
  empCity: any = "Delhi";
  empCountry: any = "India";

  updateData(newValue) {
    // Random Code
  }
}
