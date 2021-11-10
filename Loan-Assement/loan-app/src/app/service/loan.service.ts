import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loan } from '../models/loan';
import { Customer } from '../models/customer';
import { PaymentSchedule } from '../models/paymentSchedule';

@Injectable({
  providedIn: 'root'
})

export class LoanService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getLoanList(customerId: string): Observable<Loan[]> {
    return this.http.get<Loan[]>(`${this.baseUrl}` + '/loans/' + `${customerId}`);
  }
  getCustomerDetails(customerId: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.baseUrl}` + '/customer/' + `${customerId}`);
  }

  getPaymentSchedule(loanId: string): Observable<PaymentSchedule[]> {
    return this.http.get<PaymentSchedule[]>(`${this.baseUrl}` + '/loan/payment-schedule/' + `${loanId}`);
  }

  updatePaymentStatus(paymentId:any){
    return this.http.put<PaymentSchedule>(`${this.baseUrl}`+`update-payment/`+`${paymentId}`,null);
  }

  saveLoan(loan: object): Observable<Loan> {
    return this.http.post<Loan>(`${this.baseUrl}` + '/loan', loan);
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.baseUrl}` + '/add-customer', customer);
  }


  verifyCustomer(email: string, password: string): Observable<Customer> {
    let params = new HttpParams();
    params = params.append('email', email);
    params = params.append('password', password);
    return this.http.get<Customer>(`${this.baseUrl}` + '/verify-customer', { params: params });
  }

}
