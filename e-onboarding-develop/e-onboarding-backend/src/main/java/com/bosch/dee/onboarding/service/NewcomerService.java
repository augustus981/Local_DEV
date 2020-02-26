package com.bosch.dee.onboarding.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import com.bosch.dee.onboarding.entity.Newcomer;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

public interface NewcomerService {
	Newcomer save(Newcomer Newcomer);
	
	Newcomer update(Newcomer Newcomer);

	Iterable<Newcomer> save(List<Newcomer> Newcomers);

	Optional<Newcomer> findOne(Long id);

	List<Newcomer> findAll();

	List<Newcomer> findAll(List<Long> ids);
		
	Page<Newcomer> findAll(Pageable page);

	boolean exists(Long id);

	long count();

	void delete(Long id);

	void delete(Newcomer Newcomer);

	void delete(List<Newcomer> Newcomers);

	void deleteAll();
	
	public ResponseEntity<String> insertAccount(String userName, String createdBy, String token, String tokenType);
	
}
