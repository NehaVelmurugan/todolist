import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getStudent(){
    return [{"grade" :1, "name" :'Anni', "village" : 'Adilabad'},
  {"grade" :2, "name" :'Acid', "village" : "karnool"},
  {"grade" :3, "name" :'Bevada', "village" : 'Korutla'},
  {"grade" :4, "name" :'John', "village" : 'Hyderabad'}]
}
  constructor() { }
}
