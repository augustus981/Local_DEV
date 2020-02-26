package com.bosch.dee.eauth.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bosch.dee.eauth.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

	Optional<User> findByUserName(String userName);
	
	List<User> findByUserNameAndActivatedIs(String userName, Boolean activated);
}
