import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalOperationComponent } from './conditional-operation.component';

describe('ConditionalOperationComponent', () => {
  let component: ConditionalOperationComponent;
  let fixture: ComponentFixture<ConditionalOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
