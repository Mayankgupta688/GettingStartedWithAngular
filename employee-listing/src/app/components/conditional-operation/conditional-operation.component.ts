import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional-operation',
  templateUrl: './conditional-operation.component.html',
  styleUrls: ['./conditional-operation.component.css']
})
export class ConditionalOperationComponent {
  public age: number = 45;

  updateAge(ageValue) {
    this.age = ageValue;
  }

  isSenior() {
    return this.age >= 18 && this.age <=45;
  }
}
