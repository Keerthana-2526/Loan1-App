import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoanService } from 'src/app/service/loan.service';
import { PaymentSchedule } from 'src/app/models/paymentSchedule';

@Component({
  selector: 'app-payment-schedule',
  templateUrl: './payment-schedule.component.html',
  styleUrls: ['./payment-schedule.component.css']
})
export class PaymentScheduleComponent implements OnInit {
  payments:PaymentSchedule[] ;
  loanId:string;
  spin : boolean;
  constructor(private activatedRoute: ActivatedRoute,private loanService: LoanService ) { }

  ngOnInit(): void {
    this.spin=true;
    this.activatedRoute
    .queryParams
    .subscribe(params => {
      this.loanId=params['loanId'];
      this.loanService.getPaymentSchedule(this.loanId).subscribe((data:any)=>
      {
        this.spin=false;
        this.payments=data;
      })
    });
  }

  getClass(paymentStatus:string){
    var classList='';
    if(paymentStatus=='PROJECTED'){
       classList = 'badge badge-primary'; 
    }else if (paymentStatus=='AWAITINGPAYMENT'){
        classList = 'badge badge-warning';
    }else if(paymentStatus=='PAID'){
        classList = 'badge badge-success';
    }
    return classList;
  }

  changePaymentStatus(event : any,paymentId:any){
    this.loanService.updatePaymentStatus(paymentId).subscribe(()=>{
      this.ngOnInit();
    });
  }
 

}
