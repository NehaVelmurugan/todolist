import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormProgramComponent } from './reactive-form-program.component';

describe('ReactiveFormProgramComponent', () => {
  let component: ReactiveFormProgramComponent;
  let fixture: ComponentFixture<ReactiveFormProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
