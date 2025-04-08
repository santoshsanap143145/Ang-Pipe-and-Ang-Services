import { Component, Input, OnInit } from '@angular/core';
import { Ipassenger } from '../../models/passenger';
import { PassengerService } from '../../services/passenger.service';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss']
})
export class PassengerCardComponent implements OnInit {
  @Input() passObj !: Ipassenger;

  isInEditMode : boolean = false

  constructor(private _passengerService : PassengerService) { }

  ngOnInit(): void {
  }

  fullNameUpdateOnClick(updatedName : string){

    // API call if isInEditMode === true
   
    if(this.isInEditMode){
      let updatedPassObj: Ipassenger = {...this.passObj, fullname : updatedName}
    console.log(updatedPassObj)
     //  so we will call method form passenger service here
      this._passengerService.updateNameOfPass(updatedPassObj)
    }
    this.isInEditMode = !this.isInEditMode
  }

  removeOnClick(){
    this._passengerService.removePassenger(this.passObj.id)
  }

}
