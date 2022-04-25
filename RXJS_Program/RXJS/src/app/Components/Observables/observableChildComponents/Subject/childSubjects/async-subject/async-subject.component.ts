import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class ASyncSubjectComponent implements OnInit {

  $userName = new AsyncSubject()

  constructor() { }

  ngOnInit(): void {
    this.$userName.next('Anni');
    this.$userName.next('Acid');
    this.$userName.next('Bevada');
    this.$userName.next('John');

    this.$userName.subscribe(res =>{
      console.log("User Name : "+res)
    })

  }

}
