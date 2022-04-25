import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  $userName=new ReplaySubject(2)

  constructor() { }

  ngOnInit(): void {
    this.$userName.next("hello")
    this.$userName.next("How are you")
    this.$userName.next("Where are you From");
    this.$userName.next("What is Your Name");

    this.$userName.subscribe(res =>{
      console.log("user1 : "+res)
    })

    this.$userName.next("Where are you From");
    this.$userName.next("What is Your Name")

    this.$userName.subscribe(res =>{
      console.log("user2 : "+res)
    })


  }

}
