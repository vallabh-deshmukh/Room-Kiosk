import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RoomPageComponent } from './room-page/room-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'create-room',
    loadChildren: () => import('./room-page/room-page.component').then(m => m.RoomPageModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
