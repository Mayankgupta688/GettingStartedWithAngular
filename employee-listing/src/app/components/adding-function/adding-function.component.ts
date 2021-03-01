import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adding-function',
  templateUrl: './adding-function.component.html',
  styleUrls: ['./adding-function.component.css']
})
export class AddingFunctionComponent {

  counter = 0;
  currentTimer: string = "";
  userName: string = "Mayank";
  userLastName: string = "Gupta";
  displayInfo: string = "";
  imageUrl = "https://shaggyley.files.wordpress.com/2013/04/food-1.jpg"

  constructor() {
    this.currentTimer = new Date().getHours() + ": " + new Date().getMinutes() + ": " + new Date().getSeconds();

    setInterval(() => {
      this.currentTimer = new Date().getHours() + ": " + new Date().getMinutes() + ": " + new Date().getSeconds();
    }, 1000)

    setInterval(() => {
      this.counter = this.counter + 1;
      if(this.counter % 2 == 0) {
        this.displayInfo = "Counter is Even";
      } else {
        this.displayInfo = "Counter is Odd";
      }
      
    }, 3000);
  }

  getUserDetails(stringInput) {
    return this.userName + " " + this.userLastName + " " + stringInput;
  }

}
