import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLoanDetailsComponent } from './customer-loan-details.component';

describe('CustomerLoanDetailsComponent', () => {
  let component: CustomerLoanDetailsComponent;
  let fixture: ComponentFixture<CustomerLoanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerLoanDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLoanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
