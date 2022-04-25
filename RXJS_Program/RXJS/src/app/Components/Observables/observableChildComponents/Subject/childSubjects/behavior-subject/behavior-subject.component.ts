import { Component, OnInit } from '@angular/core';
import { DeignUtilityService } from 'src/app/Components/Observables/deign-utility.service';
// import { DeignUtilityService } from 'src/app/Components/Observables/deign-utility.service';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit {

  public UserName!:string;
  constructor(private _service:DeignUtilityService) { }

  ngOnInit(): void {
    this._service.UserName.subscribe(res =>{
      this.UserName =res;
    })
  }

}
