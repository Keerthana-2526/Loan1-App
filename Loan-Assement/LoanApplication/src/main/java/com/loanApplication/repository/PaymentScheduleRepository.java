package com.loanApplication.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.loanApplication.model.PaymentSchedule;

public interface PaymentScheduleRepository extends CrudRepository<PaymentSchedule, String>{
	List<PaymentSchedule> findByLoanId(String loanId);
}
