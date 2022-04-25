import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {


  public users=[
    {name : 'Anni', skills:'Tester'},
    {nmae : 'Bevada', skills:'Developer'},
    {name : 'John', skills:'Machine Learning'}
  ];


  constructor() { }

  sourceSub:Subscription |any;

  public source:any;
  public source2:any;

  ngOnInit(): void {

    // EX : 01
    this.source = interval(1000);
    this.sourceSub = this.source.pipe(
      take(8),
      toArray()
      )
    .subscribe((res: any)=>{
      console.log(res );
      // if(res>=8){
      //   this.sourceSub.unsubscribe()
      // }
    })

    // EX : 02

    this.source2 = from(this.users).pipe(toArray())
    .subscribe(res=>{
      console.log(res)
    })
  }

}
