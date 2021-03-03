import { Component } from '@angular/core';

@Component({
  selector: 'app-data-iteration',
  templateUrl: './data-iteration.component.html',
  styleUrls: ['./data-iteration.component.css']
})
export class DataIterationComponent {
  employeeList = [{
    name: "Mayank Gupta"
  }, {
    name: "TechnoFunnel",
    id: 24
  }, {
    name: "Meha Gupta"
  }, {
    name: "Anshul",
    id: 40
  }]
}
