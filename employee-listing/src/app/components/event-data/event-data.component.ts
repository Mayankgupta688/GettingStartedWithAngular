import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-data',
  templateUrl: './event-data.component.html',
  styleUrls: ['./event-data.component.css']
})
export class EventDataComponent {

  colorInfo: string = "aqua"

  constructor() { }

  updateHeaderColor(color) {
    this.colorInfo = color;
  }

  updateHeaderColorFromEvent(event) {
    debugger;
    this.colorInfo = event.target.value.toLowerCase();
  }

  updateHeaderColorFromElement(targetElement) {
    debugger;
  }

}
