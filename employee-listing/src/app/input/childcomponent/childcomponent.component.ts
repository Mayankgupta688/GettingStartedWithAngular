import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {
  @Input() userName;
  @Input() userAge;
  constructor() {
    console.log(this.userName)
  }

  ngOnChanges(changes: SimpleChanges) {
    //alert("Data in the Parent Updated....")
  }

  ngOnInit(): void {
    console.log(this.userName)
  }
}
