package com.bosch.dee.onboarding.repository;

import com.bosch.dee.onboarding.entity.NewcomerAssigment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NewcomerAssigmentRepository extends JpaRepository<NewcomerAssigment, Long> {
	
	NewcomerAssigment findByNewcomerIdIs(Long id);

    List<NewcomerAssigment> findAllByStatusIs(String status);
    
    List<NewcomerAssigment> findAllByNewcomerIdAndStatusIs(Long id, String status);

    //List<NewcomerAssigment> findAllByUserIdAndStatusIs(Long id, String status);
}
