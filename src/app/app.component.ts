import { Component } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {DataService} from "./data/data.service";
import {MatDialog} from '@angular/material';

import { DataFormsAircraftComponent } from './data-forms/data-forms-aircraft/data-forms-aircraft.component';
import { DataFormsAircraftTypeComponent } from './data-forms/data-forms-aircrafttype/data-forms-aircrafttype.component';
import { DataFormsPointComponent } from './data-forms/data-forms-point/data-forms-point.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'matas-management';

  constructor(private store: Store<any>, data: DataService, public dialog: MatDialog) {
    data.loadData();
    store.select("aircraft").subscribe(aircraft => {
      console.log(aircraft);
    });
  }

  openDialog(dataType: string): void {
    let dialogRefInput;
    if (dataType == 'aircraft')
          dialogRefInput = this.dialog.open(DataFormsAircraftComponent, {
          width: '250px'
        });
    else if (dataType == 'aircrafttype')
        dialogRefInput = this.dialog.open(DataFormsAircraftTypeComponent, {
          width: '250px'
        });
    else 
        dialogRefInput = this.dialog.open(DataFormsPointComponent, {
          width: '250px'
        });
    
    const dialogRef = dialogRefInput;
  }
}
