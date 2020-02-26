//package com.bosch.dee.onboarding.serviceImpl;
//
//
//import java.io.Serializable;
//import java.util.Optional;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import com.bosch.dee.onboarding.service.GenericCrudService;
//
//
//
///**
// * 
// * @author UDO1HC
// *
// * @param <T>
// * @param <PK>
// */
//public class GenericCrudServiceImpl<T, PK extends Serializable> implements GenericCrudService<T, PK> {
//    /**
//     * Log variable for all child classes.
//     */
//
//    protected JpaRepository<T, PK> repository;
//
//    public GenericCrudServiceImpl(JpaRepository<T, PK> repository) {
//        this.repository = repository;
//    }
//
//	@Override
//	public T save(T arg0) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public Iterable<T> save(Iterable<T> arg0) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public Optional<T> findOne(PK arg0) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public Iterable<T> findAll() {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public Iterable<T> findAll(Iterable<PK> arg0) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public boolean exists(PK arg0) {
//		// TODO Auto-generated method stub
//		return false;
//	}
//
//	@Override
//	public long count() {
//		// TODO Auto-generated method stub
//		return 0;
//	}
//
//	@Override
//	public void delete(PK arg0) {
//		// TODO Auto-generated method stub
//		
//	}
//
//	@Override
//	public void delete(T arg0) {
//		// TODO Auto-generated method stub
//		
//	}
//
//	@Override
//	public void delete(Iterable<T> arg0) {
//		// TODO Auto-generated method stub
//		
//	}
//
//	@Override
//	public void deleteAll() {
//		// TODO Auto-generated method stub
//		
//	}
//
//    
//}
