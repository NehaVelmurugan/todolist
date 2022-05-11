import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxCounterButtonComponent } from './ngrx-counter-button.component';

describe('NgrxCounterButtonComponent', () => {
  let component: NgrxCounterButtonComponent;
  let fixture: ComponentFixture<NgrxCounterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxCounterButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxCounterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
