import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent implements OnInit {
  @Input() name: string;
  @Output() dateSelected = new EventEmitter<any>();
  selected: Date;
  selectedDateFlag: boolean = false;
  showDate: string;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.name);
  }

  createRoom() {
    this.selectedDateFlag = true;
    this.showDate = this.selected.toLocaleDateString('en-IN',{day: 'numeric', month: 'short', year: 'numeric'});
    this.selected = null;
    this.dateSelected.emit({dateFlag: this.selectedDateFlag, date: this.showDate});
  }

  navigateToCreateRoom() {
    this.router.navigate(['/create-room']);
  }  
  
}
