import { Component, OnInit } from '@angular/core';
import { VegetableListService } from './vegetable-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'vegShopeey';
  amount = 0;

  public vegetableLists:any;
  public navbarList =[
    {"name" : "Vegetable", "message":"Vegetable"},
    {"name" : "Fruit", "message":"Fruit"},
    {"name" : "Bread", "message":"Bread"},
    {"name" : "Dry Fruit", "message" :"DryFruit"}
  ];

  activeTab(value:any){
    // for(i=0; i<this.navbarList.length;i++)
      this.vegServes.getVegetable()
      .subscribe((response: any) =>{
      this.vegetableLists =response;
    })
  }

  

  constructor(private vegServes:VegetableListService){}

  ngOnInit(): void {
    // this.vegServes.getVegetable()
    // .subscribe((response) =>{
    //     this.vegetableLists = response;
    // })
  }
}

