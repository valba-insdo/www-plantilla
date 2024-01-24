import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
declare var $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html'
})
export class DashboardPage implements OnInit {

  subtitle: string;
  dataList = [
    {"id": 0, "name": "Opción 0"},
    {"id": 1, "name": "Opción 1"},
    {"id": 2, "name": "Opción 2"},
    {"id": 3, "name": "Opción 3"},
    {"id": 4, "name": "Opción 4"},
    {"id": 5, "name": "Opción 5"},
    {"id": 6, "name": "Opción 6"},
    {"id": 7, "name": "Opción 7"},
    {"id": 8, "name": "Opción 8"},
    {"id": 9, "name": "Opción 9"},
    {"id": 10, "name": "Opción 10"},
    {"id": 11, "name": "Opción 11"},
    {"id": 12, "name": "Opción 12"},
    {"id": 13, "name": "Opción 13"},
    {"id": 14, "name": "Opción 14"},
    {"id": 15, "name": "Opción 15"},
    {"id": 16, "name": "Opción 16"},
    {"id": 17, "name": "Opción 17"},
    {"id": 18, "name": "Opción 18"},
    {"id": 19, "name": "Opción 19"},
    {"id": 20, "name": "Opción 20"},
    {"id": 21, "name": "Opción 21"},
    {"id": 22, "name": "Opción 22"},
    {"id": 23, "name": "Opción 23"},
    {"id": 24, "name": "Opción 24"},
    {"id": 25, "name": "Opción 25"},
  ];
  selectedDataElement;

  constructor() {
    if (StorageService.readStorage("reloadPage")){
      document.location.reload();
      StorageService.deleteStorage("reloadPage")
    }
    this.subtitle = 'This is some text within a card block.';
  }

  ngOnInit() {
  }

  onSelectOptionChange(selectedValues: any){
    if (selectedValues.length){
      this.selectedDataElement = [];
      for (let index = 0; index < selectedValues.length; index++) {
        const element = selectedValues[index];
        this.selectedDataElement.push(this.dataList.find(elem => elem.id == element.id));
      }
    } else {
      this.selectedDataElement = [{"id": -1, "name": ""}];
    }
  }

}
