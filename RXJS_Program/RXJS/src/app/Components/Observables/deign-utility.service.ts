import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeignUtilityService {


  // UserName = new Subject<string>();
  UserName = new BehaviorSubject("Anni")
  exclusive = new Subject<boolean>();
  constructor() { } 
    print(val: string, containerId: string){
      let el= document.createElement('li');
      el.innerText = val;

      document.getElementById(containerId)?.appendChild(el)
  }
}
