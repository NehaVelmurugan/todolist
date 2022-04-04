import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public selectedId: any;
  departments = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Node' },
    { id: 3, name: 'MongoDB' },
    { id: 4, name: 'Ruby' },
    { id: 5, name: 'Bootstrap' },
  ];

  constructor(private router: Router, private activeRouter: ActivatedRoute) {}

  onSelect(department: any) {
    this.router.navigate(['/department', department.id]);
  }

  ngOnInit(): void {
    // debugger;
    this.activeRouter.paramMap.subscribe((paras: ParamMap) => {
      let id = Number(paras.get('id'));
      this.selectedId = id;
      console.log(this.selectedId);
    });
  }

  isSelected(department: any) {
    // return this.selectedId === department.id;
    console.log(this.selectedId === department.id)
  }
}
