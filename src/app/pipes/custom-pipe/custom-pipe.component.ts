import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {
  employees : any[];
  constructor() { 
    this.employees =[
      {code : 'emp101', name: 'Tom', gender:'Male'},
      {code : 'emp102', name: 'Alex', gender: 'Male'},
      {code : 'emp103', name: 'Mike', gender: 'Male'},
      {code : 'emp104', name: 'Keerthi', gender:'Female'}
    ]
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
