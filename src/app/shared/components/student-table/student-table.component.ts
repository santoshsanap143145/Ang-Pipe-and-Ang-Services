import { Component, inject, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Istd } from '../../models/std';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
  stdArr : Array<Istd> = []
  // private _stdService = inject(StudentsService)
  constructor(private _stdService: StudentsService) { }

  ngOnInit(): void {
    this.stdArr = this._stdService.fetchAllStudents()
    console.log(this.stdArr)
  }

  removeOnClick(std: Istd){
    let getConfirm = confirm(`Are you sure, you want to remove this Student?`)
    if(getConfirm){
      console.log(std)
    this._stdService.removeStd(std)
    }
  }

}


