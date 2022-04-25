import { Component, OnInit } from '@angular/core';
import { DataServicesService } from '../data-services.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  componentSubjectData :any;
  componentBehaviorData:any;

  constructor(private DataSharing:DataServicesService) { 
    this.DataSharing.sharingSubjectData$.subscribe(res=>{
      this.componentSubjectData = res;
    });
    this.DataSharing.sharingBehaviorData$.subscribe(res =>{
      this.componentBehaviorData = res;
    });
  }

  ngOnInit(): void {
  }
  onSubmit(data:any){
    this.DataSharing.sharingSubjectData$.next(data.value);
    this.DataSharing.sharingBehaviorData$.next(data.value);
  }

}
