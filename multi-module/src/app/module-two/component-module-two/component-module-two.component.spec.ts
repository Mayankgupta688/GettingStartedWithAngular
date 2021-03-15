import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentModuleTwoComponent } from './component-module-two.component';

describe('ComponentModuleTwoComponent', () => {
  let component: ComponentModuleTwoComponent;
  let fixture: ComponentFixture<ComponentModuleTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentModuleTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentModuleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
