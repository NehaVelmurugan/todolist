import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  public studentDetails:any;
  constructor(private _stdStudent:StudentService) { }

  ngOnInit(){
    this.studentDetails = this._stdStudent.getStudent();
  }

}
