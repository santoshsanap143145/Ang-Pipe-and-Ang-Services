import { NgModule } from '@angular/core';
import { PassengerDashboardComponent } from './passenger-dashboard/passenger-dashboard.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PassengerCountComponent } from './passenger-count/passenger-count.component';
import { PassengerCardComponent } from './passenger-card/passenger-card.component';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    PassengerDashboardComponent
  ],
})
export class PassengerModule {}
