import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCounterComponent } from './employee-counter.component';

describe('EmployeeCounterComponent', () => {
  let component: EmployeeCounterComponent;
  let fixture: ComponentFixture<EmployeeCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
