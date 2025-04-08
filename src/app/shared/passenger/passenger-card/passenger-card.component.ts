import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ipassenger } from '../../models/passenger';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss']
})
export class PassengerCardComponent implements OnInit {
  @Input() passObj !: Ipassenger;

  isInEditMode : boolean = false
  @ViewChild('fullName') fullName !: ElementRef

  @Output() emitObj : EventEmitter<Ipassenger> = new EventEmitter<Ipassenger>()
  constructor() { }

  ngOnInit(): void {
  }

  editOnClick(){
    this.isInEditMode = true
  }

  updateOnclick(){
    this.isInEditMode = false
    console.log(this.passObj)
    this.passObj.fullname = this.fullName.nativeElement.value
    console.log(this.passObj)
    this.emitObj.emit(this.passObj)
  }

}
