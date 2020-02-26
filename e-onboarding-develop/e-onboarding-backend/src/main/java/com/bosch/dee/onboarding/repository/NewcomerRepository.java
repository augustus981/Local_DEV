package com.bosch.dee.onboarding.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bosch.dee.onboarding.entity.Newcomer;

@Repository
public interface NewcomerRepository extends JpaRepository<Newcomer, Long>{}
