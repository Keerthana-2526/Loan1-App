package com.loanApplication.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.loanApplication.model.Customer;

public interface CustomerRepository extends CrudRepository<Customer, String>{
	List<Customer> findByEmailAndPassword(String email, String password);

}
