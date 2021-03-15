import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentModuleOneComponent } from './component-module-one.component';

describe('ComponentModuleOneComponent', () => {
  let component: ComponentModuleOneComponent;
  let fixture: ComponentFixture<ComponentModuleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentModuleOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentModuleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
