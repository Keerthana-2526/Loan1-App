import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from 'src/app/models/loan';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';
import { LoanService } from 'src/app/service/loan.service';
@Component({
  selector: 'app-customer-loan-details',
  templateUrl: './customer-loan-details.component.html',
  styleUrls: ['./customer-loan-details.component.css']
})
export class CustomerLoanDetailsComponent implements OnInit {
  loans:Loan[];
  customerId:string;
  spin : boolean;
  constructor(private router: Router ,private loanService:LoanService,private authService:HardcodedAuthenticationService) {

   }

  ngOnInit(): void {
    this.customerId=this.authService.getCustomerId();
    this.spin=true;
    this.loanService.getLoanList(this.customerId).subscribe((data:any) =>{
      this.spin=false;
      this.loans =data;
      });
  }
  navigatePaymentSchedule(loanId:string){
    this.router.navigate([`./payment-schedule`],{ queryParams: { loanId: loanId } });
  }
  
 

}
