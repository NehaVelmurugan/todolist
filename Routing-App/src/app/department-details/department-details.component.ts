import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <h3>You selected department with id = {{ departmentId }}</h3>
    <button (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button>

    <div>
      <button (click)="gotoDepartment()">Back</button>
    </div>
  `,
  styles: [],
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId: any;
  constructor(private activeRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // let id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    // this.departmentId = id;

    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      let id = Number(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/department', previousId]);

    //  console.log(previousId);
  }
  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/department', nextId]);
  }

  
  
  gotoDepartment() { 
   // let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/home']);
    
    // console.log(this.departmentId ? this.departmentId : null);
  }
}
