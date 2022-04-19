import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  // -----------Observable Example Names-----
  public agent:Observable<string> | any;
  public agentNames:any

  //---------Of Operator Example --------

  studentList = ['Anni', "Acid", "Bevada", "John"];
  student: Observable<string[]> =of(this.studentList);

  studentLists = [{id:1, "name": "Anni"}, {id:2, "name": 'Bevada'}];
  student$ : Observable<{ id: number; name: string; }[]>=of(this.studentLists);

  constructor() { }

  ngOnInit(): void {

    /*  ------------Starting Observable------------*/
    this.agent = new Observable((observer:any) =>
      {
        try{
          observer.next(" John ");

          observer.next(" Anni ");
          observer.next(" Bevada ");
          setTimeout( ()=>{
            observer.next(" Acid ")
            observer.complete(" done ");
          });
        }
        catch(e){
          observer.error(e);
        }
      }
    );
    /* this.agent.subscribe( (data:any) =>{
      this.agentNames = data;
      console.log(data);
      complete(){
        console.log("completed")
      }
    });*/
    this.agent.subscribe({
      next(x:any){console.log(x);},
      error(error:any){console.error(error);},
      complete(){console.log("done");}
    })
    console.log('just after subscribe')

    /* -------------Ending Observable---------*/

    /* -------------Starting Of Operator-------*/

    //---It is similar like for loop it print one after another

    this.student.subscribe((data:any) => {
      console.log(data)
    })
    this.student$.subscribe((list:any)=>{
      console.log(list);
    });
  }

}


