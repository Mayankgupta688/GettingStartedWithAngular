import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  empAge: string = "";
  empName: string = '';
  empSalary: string = "";
  empDesignation: string = "";
  empCountry: string = "";
  empCity: string = "";
 
  updateData(value, DOMElement) {
    this[DOMElement.id] = DOMElement.value;
  }
}
