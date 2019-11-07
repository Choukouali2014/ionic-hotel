import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AvailableRoomsPagePage } from './available-rooms-page.page';

const routes: Routes = [
  {
    path: '',
    component: AvailableRoomsPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AvailableRoomsPagePage]
})
export class AvailableRoomsPagePageModule {}
