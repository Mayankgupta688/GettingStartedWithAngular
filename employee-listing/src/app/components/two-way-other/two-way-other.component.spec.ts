import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayOtherComponent } from './two-way-other.component';

describe('TwoWayOtherComponent', () => {
  let component: TwoWayOtherComponent;
  let fixture: ComponentFixture<TwoWayOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayOtherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
