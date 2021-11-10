package com.loanApplication.repository;

import java.util.List;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;

import com.loanApplication.model.Loan;

@EnableJpaRepositories
public interface LoanRepository  extends CrudRepository<Loan, String>{
	List<Loan> findByCustomerId(String customerId);

}
