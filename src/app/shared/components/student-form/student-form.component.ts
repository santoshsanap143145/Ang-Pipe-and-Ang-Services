import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { Istd } from '../../models/std';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  @ViewChild('stdForm') stdForm !: NgForm;
  constructor(private _uuidService : UuidService,
    private _stdService: StudentsService
  ) { }

  ngOnInit(): void {
  }

  submitOnClick(){
    if(this.stdForm.valid){
      let newStd: Istd = this.stdForm.value;
      newStd.stdId = this._uuidService.uuid()
      newStd.isActive = this.stdForm.value.isActive === "Yes"
      console.log(newStd)
      this._stdService.createNewStd(newStd)
      this.stdForm.reset()
    }
  }
}
