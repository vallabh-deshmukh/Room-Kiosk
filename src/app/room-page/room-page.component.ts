import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.scss']
})
export class RoomPageComponent {

}

@NgModule({
  declarations: [
    RoomPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: RoomPageComponent }
    ])
  ]
})
export class RoomPageModule {}