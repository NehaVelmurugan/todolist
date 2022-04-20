import { Component, OnInit } from '@angular/core';
import { DataServicesService } from '../data-services.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  componentSubjectData:any;
  componentBehaviorData:any;

  constructor(private DataSharing:DataServicesService) {
    this.DataSharing.sharingSubjectData$.subscribe(res => {
      this.componentSubjectData = res;
    })
    this.DataSharing.sharingBehaviorData$.subscribe(res => {
      this.componentBehaviorData = res
    })
   }

  ngOnInit(): void {
  }
  onSubmit(data:any){
    this.DataSharing.sharingSubjectData$.next(data.value)
    this.DataSharing.sharingBehaviorData$.next(data.value)
  }

}
