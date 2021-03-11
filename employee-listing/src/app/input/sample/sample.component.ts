import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SampleComponent implements OnInit {
  @Input() userAge;
  constructor() { }

  ngOnInit(): void {
  }

  getDataToRender() {
    debugger;
    console.log("Component Rendered....")
    return "Welcome Mayank Gupta.......... " + this.userAge;
  }

}
