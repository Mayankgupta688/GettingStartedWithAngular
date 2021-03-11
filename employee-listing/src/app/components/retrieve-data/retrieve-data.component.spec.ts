import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveDataComponent } from './retrieve-data.component';

describe('RetrieveDataComponent', () => {
  let component: RetrieveDataComponent;
  let fixture: ComponentFixture<RetrieveDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
