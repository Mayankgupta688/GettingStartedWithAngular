import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent {
  private _empAgeData: any = "     0    ";

  set empAge(updatedAge) {
    debugger;
    var updatedAgeSpaceRemoved = updatedAge.replaceAll(" ", "");
    this._empAgeData = updatedAgeSpaceRemoved;
  }
  
  get empAge() {
    debugger;
    return this._empAgeData.replaceAll(" ", "");
  }

  updateAge() {
    this.empAge = 50;
  }
}


