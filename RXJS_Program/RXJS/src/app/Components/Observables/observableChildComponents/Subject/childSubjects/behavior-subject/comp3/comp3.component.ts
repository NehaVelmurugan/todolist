import { Component, OnInit } from '@angular/core';
import { DeignUtilityService } from 'src/app/Components/Observables/deign-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

  public UserName!:string;
  constructor(private service:DeignUtilityService) { }

  ngOnInit(): void {
    this.service.UserName.subscribe( res=>{
      this.UserName = res;
    })
  }
  onChange(name:any){
    this.service.UserName.next(name.value)
  }

}
