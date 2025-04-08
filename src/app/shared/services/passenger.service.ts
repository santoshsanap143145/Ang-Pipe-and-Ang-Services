import { Injectable } from '@angular/core';
import { Ipassenger } from '../models/passenger';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  passengersArr: Array<Ipassenger> = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null,
      
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 },
      ],
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null,
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }],
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null,
    },
  ]
  constructor(private _snackBar : SnackbarService) { }

  fetchAllPassengers(){
    // API call to get data
    return this.passengersArr
  }

  updateNameOfPass(updatePass : Ipassenger){
    let getIndex = this.passengersArr.findIndex(pass => pass.id === updatePass.id);

    this.passengersArr[getIndex] = updatePass;
    this._snackBar.openSnackBar(`the name of Passenger is updated to ${updatePass.fullname}`)
  }

  removePassenger(id : number){
    // API Call to remove passenger object
    let getIndex = this.passengersArr.findIndex(pass => pass.id === id);
    this.passengersArr.splice(getIndex, 1)
  }
}
