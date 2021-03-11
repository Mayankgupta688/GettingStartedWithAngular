import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCounterOtherComponent } from './employee-counter-other.component';

describe('EmployeeCounterOtherComponent', () => {
  let component: EmployeeCounterOtherComponent;
  let fixture: ComponentFixture<EmployeeCounterOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCounterOtherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCounterOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
