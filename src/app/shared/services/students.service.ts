import { Injectable } from '@angular/core';
import { Istd } from '../models/std';
import { UuidService } from './uuid.service';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  stdArr: Array<Istd> = [
    {
      fname: 'Jhon',
      lname: 'Doe',
      email: 'jhonD@example.com',
      contact: 7858658978,
      isActive: true,
      stdId: this._uuidService.uuid()
    },
    {
      fname: 'Alice',
      lname: 'Smith',
      email: 'aliceS@example.com',
      contact: 9876543210,
      isActive: false,
      stdId: this._uuidService.uuid()
    },
    {
      fname: 'Charlie',
      lname: 'Brown',
      email: 'charlieB@example.com',
      contact: 7654321098,
      isActive: true,
      stdId: this._uuidService.uuid()
    },
    {
      fname: 'Emma',
      lname: 'Williams',
      email: 'emmaW@example.com',
      contact: 6543210987,
      isActive: false,
      stdId: this._uuidService.uuid()
    },
  ];
  constructor(private _uuidService : UuidService,
    private _snackBar: SnackbarService
  ) {}

  createNewStd(std: Istd) {
    // API call to add new student in DB
    this.stdArr.push(std)

    // snackBar
    this._snackBar.openSnackBar(`The Student ${std.fname} ${std.lname} is added successfully !!!`)
  }

  fetchAllStudents(): Array<Istd> {
    // API call to fetch all students data from database

    return this.stdArr;
  }

  removeStd(stdObj : Istd){
    let ObjIndex = this.stdArr.findIndex(std => {
      std.stdId === stdObj.stdId
    })
    this.stdArr.splice(ObjIndex, 1)

    this._snackBar.openSnackBar(`The Student ${stdObj.fname} ${stdObj.lname} is removed successfully !!!`)
  }
}
