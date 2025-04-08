import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../../services/passenger.service';
import { Ipassenger } from '../../models/passenger';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss'],
})
export class PassengerDashboardComponent implements OnInit {
  passArr: Array<Ipassenger> = [];
  constructor(private _passengerService: PassengerService) {}

  ngOnInit(): void {
    this.passArr = this._passengerService.fetchAllPassengers();
  }

  emitObj(passObj: Ipassenger) {
    let objIndex = this.passArr.findIndex((pass) => pass.id === passObj.id);
    console.log(objIndex);
    this.passArr[objIndex] = { ...passObj };
  }
}
