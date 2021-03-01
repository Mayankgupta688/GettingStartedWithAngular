// Metadata + Template + Styling + Business Logic

import { Component } from "@angular/core";

@Component({
    selector: "home-component",
    templateUrl: "./home.component.html",
    styles: ["h1 {color: blue}"],
    styleUrls: ["./home.component.css", "./home.other.component.css"]
})
export class HomeComponent {
    userFirstName: string = "Anshul";
    userLastName: string = "Gupta";
    userAge: number = 10;

    salaryArray: number[] = [10, 20, 30, 23, 34];
    employeeDetails = {
        name: "TechnoFunnel"
    }
}
