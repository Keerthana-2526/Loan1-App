package com.loanApplication.Controller;

import org.springframework.web.bind.annotation.PathVariable;

import com.loanApplication.Services.LoanService;
import com.loanApplication.model.Customer;
import com.loanApplication.model.Loan;
import com.loanApplication.model.PaymentSchedule;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class LoanController {
	@Autowired
	LoanService loanService;
	@GetMapping("/customer/{customerId}")
	private Customer getCustomerDetails(@PathVariable("customerId") String customerId) {
		return loanService.getCustomerDetails(customerId);
	}

	
	@GetMapping("/verify-customer")
	private Customer verifyCustomer(@RequestParam("email") String email, @RequestParam("password") String password) {
		return loanService.getCustomerDetails(email, password);
	}
	
	@PostMapping("/add-customer")
	private Customer saveCustomer(@RequestBody Customer customer) {
		return loanService.saveCustomerDetails(customer);
	}
	
	@GetMapping("/loans/{customerId}")
	private List<Loan> getLoans(@PathVariable("customerId") String customerId) {
		return loanService.getLoansByCustomerId(customerId);
	}

	
	@GetMapping("/loan/payment-schedule/{loanId}")
	private List<PaymentSchedule> getPaymentSchedule(@PathVariable("loanId") String loanId) {
		return loanService.getPaymentScheduleByLoanId(loanId);
	}

	@PutMapping("/update-payment/{paymentId}")
	private PaymentSchedule updatePaymentStatus(@PathVariable("paymentId") String paymentId) {
		return loanService.updatePaymentStatus(paymentId);
	}

	
	@PostMapping("/loan")
	private Loan saveLoan(@RequestBody Loan loan) {
		return loanService.saveLoan(loan);
	}

	@PutMapping("/update-loanstatus/{loanId}")
	private Loan approvedLoan(@PathVariable("loanId") String LoanId) {
		return loanService.approvedLoan(LoanId);
	}
}


