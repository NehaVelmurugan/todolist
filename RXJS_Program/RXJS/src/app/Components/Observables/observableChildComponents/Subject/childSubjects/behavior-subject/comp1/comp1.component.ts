import { Component, OnInit } from '@angular/core';
import { DeignUtilityService } from 'src/app/Components/Observables/deign-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  public UserName!:any;

  constructor(private services:DeignUtilityService) { }

  ngOnInit(): void {
    this.services.UserName.subscribe(res=>{
      this.UserName= res
    })
  }
  change(name:any){
   this.services.UserName.next(name.value)

  }

}
