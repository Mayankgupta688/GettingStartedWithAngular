import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oninit',
  templateUrl: './oninit.component.html',
  styleUrls: ['./oninit.component.css']
})
export class OninitComponent implements OnInit {
  userName: string = "Mayank";
  userAge: number = 10;
  constructor() { }

  ngOnInit(): void {
  }

  updateAge() {
    debugger;
    this.userAge += 1;
  }

  updateName() {
    this.userName = "Anshul";
  }

}
