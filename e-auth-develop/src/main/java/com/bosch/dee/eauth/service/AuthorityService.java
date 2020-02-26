package com.bosch.dee.eauth.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bosch.dee.eauth.entity.AuthorityEntity;
import com.bosch.dee.eauth.repository.AuthorityRepository;

@Service
public class AuthorityService {
	@Autowired
	AuthorityRepository authorityRepository;

	public AuthorityRepository getAuthorityRepository() {
		return authorityRepository;
	}

	public void setAuthorityRepository(AuthorityRepository authorityRepository) {
		this.authorityRepository = authorityRepository;
	}
	
	public Optional<AuthorityEntity> getAuthorityByID(Long id) {
		return authorityRepository.findById(id);
	}
}
