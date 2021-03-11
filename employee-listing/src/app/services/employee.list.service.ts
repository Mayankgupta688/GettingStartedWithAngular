import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs"

@Injectable({
    providedIn: "root"
})
export class EmployeeListService {

    public employeeList = [];

    constructor(private _http: HttpClient) { }

    getEmployeeList(): Observable<any> {
        if(this.employeeList.length > 0 ) {
            return of(this.employeeList);
        } else {
            return this._http.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees");
        }
    }
}