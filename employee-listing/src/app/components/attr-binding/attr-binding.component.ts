import { Component } from '@angular/core';

@Component({
  selector: 'app-attr-binding',
  templateUrl: './attr-binding.component.html',
  styleUrls: ['./attr-binding.component.css']
})
export class AttrBindingComponent {
  imageUrl: string = "https://shaggyley.files.wordpress.com/2013/04/food-1.jpg";
  title: string = "Street Food for the Session...";
  altText: string = "Some Street Food...";
  imgHeight: string = "250";
  imgWidth: string = "350";
  buttonText: string = "Order Food in next 10 Seconds";
  inputBoxPlaceHolder: string = "Enter Food to order...";
  buttonDisabled: boolean = false;
  googleUrl: string = "http://www.google.com";
  leftSpacingForImage: number = 0;
  headerColor: string = "aqua";

  updateHeaderColor(color) {
    this.headerColor = color;
  }

  buttonClicked(elementReference) {
    alert("User Ordered: " + elementReference.value)
  }

  constructor() {
    setTimeout(() => {
      this.buttonText = "Time Expired... Cannot Order Now. Call Service Center"
      this.buttonDisabled = true;
    }, 10000)


    setInterval(() => {
      this.leftSpacingForImage += 10;
    }, 500)
  }
}
