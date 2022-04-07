import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { subscribeOn, Subscription } from 'rxjs';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, DoCheck {

  public selectedId :any;


  public DiaTypes=[
    {"id" : 1, "name" : "Type 1"},
    {"id" : 2, "name" : "Type 2"},
    {"id" : 3, "name" : "Type 3"}
  ]

  constructor(private router : Router, private activeRouter : ActivatedRoute, private zone:NgZone) { }
  ngDoCheck(): void {
    console.log(`Do check ${this.zone}`)
  }

  ngOnInit(){
    subscription1$ : Subscription
    // let id = this.activeRouter.snapshot.paramMap.get(('id'));
    // this.selectedId = id;                  
    this.activeRouter.paramMap.subscribe((param:ParamMap) =>{ // subscribe - It is similar like subscribe  
     let id = param.get('id');
     this.selectedId = id;
    });
    function a(){console.log("a");}
    function b(){console.log("b")}
    function c(){console.log("c")}
    function d(){console.log("d")}
   /* this.zone.runOutsideAngular(() => {
      a()
      setTimeout(b, 2000);
      setTimeout(c, 2000);
      d()
    });*/

    a();
    b();
    c();
    d();
    
    
  }

  ngOnDestroy(): void {
    console.log('Test');
  }

  onSelect(DiaTypes: any){
    this.router.navigate(['diabetesType', DiaTypes.name])
  }





  
}


