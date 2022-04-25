import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeignUtilityService } from '../../../deign-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectOutsideComponent implements OnInit, OnDestroy {
  constructor(private _service:DeignUtilityService) { }

  ngOnInit(): void {
    this._service.exclusive.next(true)
  }
  ngOnDestroy(): void {
    this._service.exclusive.next(false)
  }
}
