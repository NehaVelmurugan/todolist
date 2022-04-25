import { Component, OnInit } from '@angular/core';
import { DeignUtilityService } from 'src/app/Components/Observables/deign-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  UserName:string|any;
  constructor(private _services:DeignUtilityService) { }

  ngOnInit(): void {
    this._services.UserName.subscribe(res=>{
      this.UserName = res
    })
  }
  onChange(name:any){
    this._services.UserName.next(name.value)
  }

}
