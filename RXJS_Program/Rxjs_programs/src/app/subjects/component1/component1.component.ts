import { Component, OnInit } from '@angular/core';
import { DataServicesService } from '../data-services.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  ComponentSubjectData:any
  componentBehaviorData:any;
  componentReplayData:any;

  constructor(private DataSharing:DataServicesService) {
    this.DataSharing.sharingSubjectData$.subscribe(res=>{
      this.ComponentSubjectData = res
    });
    this.DataSharing.sharingBehaviorData$.subscribe(res =>{
      this.componentBehaviorData = res;
    });
    this.DataSharing.sharingReplayData$.subscribe(res =>{
      this.ComponentSubjectData = res;
    })
   }

  ngOnInit(): void {
  }
  onSubmit(data:any){
    this.DataSharing.sharingSubjectData$.next(data.value);
    this.DataSharing.sharingBehaviorData$.next(data.value);
    this.DataSharing.sharingReplayData$.next(data.value);
  }
}
