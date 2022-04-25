import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DeignUtilityService } from '../../deign-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {
  obsMsg: any;

  // of


  constructor(private _service:DeignUtilityService) { 
  }

  ngOnInit(): void {
    const Obs1 = of("Anup", "Shekhar", "Sharma");
    Obs1.subscribe(res=>{
      console.log(res);
      this._service.print(res,'elContainer')
    })
    const Obs2 = of( {a:"Anup", b:"Shekhar", c:"Sharma"} );
    Obs2.subscribe(res=>{
      this.obsMsg = res
      console.log(res);
      // this._service.print(res,'elContainer')
    })
    const Obs3 = from('Welcome to My World');
    Obs3.subscribe(res=>{
      this._service.print(res,'elCounter3')
    })
  }

}
