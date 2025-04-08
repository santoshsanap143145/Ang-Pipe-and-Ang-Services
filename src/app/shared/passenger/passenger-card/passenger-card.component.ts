import { Component, Input, OnInit } from '@angular/core';
import { Ipassenger } from '../../models/passenger';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss']
})
export class PassengerCardComponent implements OnInit {
  @Input() passObj !: Ipassenger;

  isInEditMode : boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  editOnClick(){
    this.isInEditMode = true
  }

  updateOnclick(){
    this.isInEditMode = false
  }

}
