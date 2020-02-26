package com.bosch.dee.onboarding.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.bosch.dee.onboarding.entity.Assigment;;

public interface AssigmentService {
	Assigment save(Assigment Assigment);
	
	Assigment update(Assigment Assigment);

	Iterable<Assigment> save(List<Assigment> Assigments);

	Optional<Assigment> findOne(Long id);

	List<Assigment> findAll();

	List<Assigment> findAll(List<Long> ids);
		
	Page<Assigment> findAll(Pageable page);

	boolean exists(Long id);

	long count();

	void delete(Long id);

	void delete(Assigment Assigment);

	void delete(List<Assigment> Assigments);

	void deleteAll();
}
