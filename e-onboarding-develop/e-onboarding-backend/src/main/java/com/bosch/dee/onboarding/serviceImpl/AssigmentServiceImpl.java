package com.bosch.dee.onboarding.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.bosch.dee.onboarding.entity.Assigment;
import com.bosch.dee.onboarding.repository.AssigmentRepository;
import com.bosch.dee.onboarding.service.AssigmentService;

@Service
public class AssigmentServiceImpl implements AssigmentService{
	
	@Autowired
	private final AssigmentRepository AssigmentRepository;
	
	public AssigmentServiceImpl(AssigmentRepository AssigmentRepository) {
		super();
		this.AssigmentRepository = AssigmentRepository;
	}
	
	@Override
	public Assigment save(Assigment Assigment) {
		return AssigmentRepository.save(Assigment);
	}

	@Override
	public Assigment update(Assigment Assigment) {
		return AssigmentRepository.save(Assigment);
	}

	@Override
	public List<Assigment> save(List<Assigment> Assigments) {
		return AssigmentRepository.saveAll(Assigments);
	}

	@Override
	public Optional<Assigment> findOne(Long id) {
		return AssigmentRepository.findById(id);
	}

	@Override
	public List<Assigment> findAll() {
		return AssigmentRepository.findAll();
	}

	@Override
	public List<Assigment> findAll(List<Long> ids) {
		return AssigmentRepository.findAllById(ids);
	}

	@Override
	public Page<Assigment> findAll(Pageable page) {
		return null;
	}

	@Override
	public long count() {
		return AssigmentRepository.count();
	}

	@Override
	public void delete(Assigment Assigment) {
		AssigmentRepository.delete(Assigment);
		
	}

	@Override
	public void delete(List<Assigment> Assigments) {
		for(Assigment Assigment : Assigments) {
			AssigmentRepository.delete(Assigment);
		}
	}

	@Override
	public void deleteAll() {
		AssigmentRepository.deleteAll();	
	}
	
	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
	}
	
	@Override
	public boolean exists(Long id) {
		// TODO Auto-generated method stub
		return false;
	}
}
