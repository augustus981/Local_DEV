package com.bosch.dee.onboarding.service;


import java.io.Serializable;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


/**
 * 
 * @author UDO1HC
 *
 * @param <T>
 * @param <PK>
 */
public class GenericCrudServiceImpl<T, PK extends Serializable> implements GenericCrudService<T, PK> {
    /**
     * Log variable for all child classes.
     */

    protected JpaRepository<T, PK> repository;

    public GenericCrudServiceImpl(JpaRepository<T, PK> repository) {
        this.repository = repository;
    }

	@Override
	public T save(T arg0) {
		return repository.save(arg0);
	}

	@Override
	public Iterable<T> save(Iterable<T> arg0) {
		return repository.saveAll(arg0);
	}

	@Override
	public Optional<T> findOne(PK arg0) {
		return repository.findById(arg0);
	}

	@Override
	public Iterable<T> findAll() {
		return repository.findAll();
	}

	@Override
	public Iterable<T> findAll(Iterable<PK> arg0) {
		return repository.findAllById(arg0);
	}

	@Override
	public boolean exists(PK arg0) {
		return repository.existsById(arg0);
	}

	@Override
	public long count() {
		return repository.count();
	}

	@Override
	public void delete(PK arg0) {
		repository.deleteById(arg0);
		
	}

	@Override
	public void delete(T arg0) {
		repository.delete(arg0);
		
	}

	@Override
	public void delete(Iterable<T> arg0) {
		repository.deleteAll(arg0);
		
	}

	@Override
	public void deleteAll() {
		repository.deleteAll();
		
	}
    
}
