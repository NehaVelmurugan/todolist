import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFormsComponent } from './control-forms.component';

describe('ControlFormsComponent', () => {
  let component: ControlFormsComponent;
  let fixture: ComponentFixture<ControlFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
