import { Component, OnInit } from '@angular/core';
import { concat, concatAll, interval, Observable, of, take } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {


  studentName: Observable<string> |any;

  constructor() { }

  ngOnInit(): void {
    this.studentName = new Observable((observer:any) =>
    {
      try{
        concat(
          observer.next("Hello"),
          observer.next("world")
        )
      }
      catch(error:any){
        console.error(error)
      }
    });
    this.studentName.subscribe((data:any)=>{
      console.log(data)
    });
/*
    const timer1 = interval(1000).pipe(take(10));
    const timer2 = interval(2000).pipe(take(6));
    const timer3 = interval(500).pipe(take(10));

    const result = concat(timer1, timer2, timer3);
    result.subscribe(x => console.log(x));
*/

  }

}


