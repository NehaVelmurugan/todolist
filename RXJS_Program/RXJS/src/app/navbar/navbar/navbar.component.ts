import { Component, OnInit } from '@angular/core';
import { DeignUtilityService } from 'src/app/Components/Observables/deign-utility.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  exclusive:boolean =false;
  constructor(private _service:DeignUtilityService) { }

  ngOnInit(): void {
    this._service.exclusive.subscribe(res =>{
      this.exclusive = res
    })
  }

}
