package com.bosch.dee.onboarding.service;

import java.io.Serializable;
import java.util.Optional;

/**
 * 
 * @author UDO1HC
 *
 * @param <T>
 * @param <PK>
 */
public interface GenericCrudService<T, PK extends Serializable> {

	  T save(T arg0);
	  
	  Iterable<T> save(Iterable<T> arg0);
	  
	  Optional<T> findOne(PK arg0);
	  
	  Iterable<T> findAll();
	  
	  Iterable<T> findAll(Iterable<PK> arg0);
	  
	  boolean exists(PK arg0);
	  
	  long count();
	  
	  void delete(PK arg0);
	  
	  void delete(T arg0);
	  
	  void delete(Iterable<T> arg0);
	  
	  void deleteAll();
}
