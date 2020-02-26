package com.bosch.dee.eauth.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bosch.dee.eauth.entity.User;
import com.bosch.dee.eauth.repository.UserRepository;
import com.bosch.dee.eauth.util.util;


@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	public List<User> getUsersActive(String userName){
		List<User> users = new ArrayList<User>();
		Iterator<User> iter = userRepository.findByUserNameAndActivatedIs(userName,true).iterator();
		while (iter.hasNext()) {
			users.add(iter.next());
		}		
		return users;
	}
		
	public List<User> getUsers() {
		List<User> users = new ArrayList<User>();
		Iterator<User> iter = userRepository.findAll().iterator();
		while (iter.hasNext()) {
			users.add(iter.next());
		}		
		return users;
	}
	
	public User getUser(String id) {
		return userRepository.findById(id).orElse(null);
	}
	
	public User addUser(User user) {
		return userRepository.save(user);
	}
	
	public Optional<User> findbyUserName(String userName){
		return userRepository.findByUserName(userName);
	}
	
	public User updateUser(User user){
		return userRepository.save(user);
	}
}
