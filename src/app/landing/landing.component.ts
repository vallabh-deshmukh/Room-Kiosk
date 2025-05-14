import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  name: string = 'Vallabh';
  selectedDateFlag: boolean = false;
  showDate: string;

  dateSelected(data) {
    this.selectedDateFlag = data.dateFlag;
    this.showDate = data.date;
  }
}
