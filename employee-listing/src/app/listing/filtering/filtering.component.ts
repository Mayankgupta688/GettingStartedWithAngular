import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css']
})
export class FilteringComponent implements OnInit {

  filterText: string = "";
  constructor(private _dataService: DataService) { }

  updateFilterText(updatedText) {
    debugger;
    this._dataService.filterEmployeeEvent.emit(updatedText)
  }

  ngOnInit(): void {
  }

}
