package com.bosch.dee.onboarding.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bosch.dee.onboarding.entity.Assigment;

@Repository
public interface AssigmentRepository extends JpaRepository<Assigment, Long> {

}
