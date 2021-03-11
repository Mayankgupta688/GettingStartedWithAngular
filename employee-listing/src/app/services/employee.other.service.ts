import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs"


@Injectable({
    providedIn: "root"
})
export class EmployeeOtherService {

    public employeeList: any = [];
    public notifyData = new EventEmitter();

    constructor(private _http: HttpClient) { 
        debugger;
        setTimeout(() => {
            this._http.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").subscribe((data) => {
                this.employeeList = data;
                this.notifyData.emit(data)
            }, (err) => {
                // Error Notification....
            })
        }, 5000)
    }
}