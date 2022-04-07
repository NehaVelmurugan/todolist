import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-dia-betes-type',
  templateUrl: './dia-betes-type.component.html',
  styleUrls: ['./dia-betes-type.component.css']
})
export class DiaBetesTypeComponent implements OnInit {

  public selectedId : any
  
  
  
  
  ;
  constructor(private activeRouter : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    // let id = this.activeRouter.snapshot.paramMap.get('name');
    // this.selectedId = id;

    // this.activeRouter.paramMap.subscribe( (params: ParamMap) =>{
    //   let id = params.get('name')
    //   console.log(id)
    //   this.selectedId = id;
    // })

    let id = this.activeRouter.snapshot.params['name'];
    this.selectedId = id;
  }



}
