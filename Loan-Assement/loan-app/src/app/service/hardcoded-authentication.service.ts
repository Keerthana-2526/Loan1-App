import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { LoanService } from './loan.service';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  private customer: Customer;

  constructor(private loanService: LoanService) {

  }
  async authenticate(username: string, password: string) {
    this.customer = await this.loanService.verifyCustomer(username, password).toPromise();

    if(this.customer .customerId!=null) {
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    return false;
  }
  getCustomerId(): string {
    return this.customer.customerId;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }
  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }
}
