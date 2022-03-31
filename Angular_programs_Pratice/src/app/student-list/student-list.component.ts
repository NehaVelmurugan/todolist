import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
   
  public studentDetails:any;
  constructor(private _stdStudent:StudentService) { }

  ngOnInit(){
    this.studentDetails = this._stdStudent.getStudent();
  }

}
