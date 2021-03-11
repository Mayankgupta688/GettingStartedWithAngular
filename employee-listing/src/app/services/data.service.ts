import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs"
import { catchError, tap } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class DataService {

    filterEmployeeEvent = new EventEmitter();
    deleteEmployeeEvent = new EventEmitter();

    constructor(private _http: HttpClient) { }

    getData() {
        debugger;
        return this._http.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").pipe(
            tap((data: any) => {
                debugger;
                console.log(`Total Number of Employees are ${data}`)
            }),
            catchError((err: any) => {
                debugger;
                alert("Error Received...")
                return throwError("Error Receiving Data on the Application")
            })
        );
    }
}