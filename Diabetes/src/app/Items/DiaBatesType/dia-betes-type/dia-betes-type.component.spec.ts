import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaBetesTypeComponent } from './dia-betes-type.component';

describe('DiaBetesTypeComponent', () => {
  let component: DiaBetesTypeComponent;
  let fixture: ComponentFixture<DiaBetesTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaBetesTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaBetesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
