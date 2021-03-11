import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveDataOtherComponent } from './retrieve-data-other.component';

describe('RetrieveDataOtherComponent', () => {
  let component: RetrieveDataOtherComponent;
  let fixture: ComponentFixture<RetrieveDataOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveDataOtherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveDataOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
