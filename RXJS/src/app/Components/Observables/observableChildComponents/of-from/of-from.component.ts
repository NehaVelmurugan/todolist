import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DeignUtilityService } from '../../deign-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  // of


  constructor(private _service:DeignUtilityService) { 
  }

  ngOnInit(): void {
    const Obs1 = of("Anup", "Shekhar", "Sharma");
    Obs1.subscribe(res=>{
      console.log(res);
      this._service.print(res,'elContainer')
    })
  }

}
