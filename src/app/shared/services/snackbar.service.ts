import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _matsnack : MatSnackBar) { }

  openSnackBar(msg: string){
    let matSnackConfig: MatSnackBarConfig = {

      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    }
    this._matsnack.open(msg, "close", matSnackConfig)
  }
}
