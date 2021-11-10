import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Customer } from 'src/app/models/customer';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';
import { LoanService } from 'src/app/service/loan.service';
@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
  model: Customer;
  customerForm: FormGroup;
  customerId:string;
  spin : boolean;
  constructor(private loanService: LoanService, private formBuilder: FormBuilder,private authService:HardcodedAuthenticationService) {
    this.customerId=this.authService.getCustomerId();
    this.spin = true
    this.loanService.getCustomerDetails(this.customerId).subscribe((data: any) => {
      this.spin = false
      this.model = data;
      this.customerForm = this.formBuilder.group({
        customerId: [this.model.customerId,],
        name: [this.model.name],
        accno: [this.model.accno],
        address: [this.model.address],
        phone: [this.model.phone],
        email: [this.model.email]
      });
    });
  }
  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      customerId: [], name: [], accno: [], address: [], phone: [], email: []
    });
    this.customerForm.disable();
    console.log("hai",this.model)
  }


}
