package com.bosch.dee.eauth.controller;

import java.security.Principal;
import java.time.Instant;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.OAuth2ClientContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bosch.dee.eauth.entity.AuthorityEntity;
import com.bosch.dee.eauth.entity.User;
import com.bosch.dee.eauth.service.AuthorityService;
import com.bosch.dee.eauth.service.CustomUserDetailsService;
import com.bosch.dee.eauth.service.UserService;
import com.bosch.dee.eauth.util.util;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
	CustomUserDetailsService customUserdetailsv;
	
	@Autowired
	AuthorityService authorityService;
	
	@Autowired
	UserService userService;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	/*@GetMapping("/users")
	public List<User> getUsers() {
		return userService.getUsers();
	}*/
	
	@GetMapping("/users/{userName}")
	public List<User> getUsers(@PathVariable String userName) {
		return userService.getUsersActive(userName);
	}
	
	/*@GetMapping("/users/{id}")
	public User getUser(@PathVariable(name="id") String id) {
		return userService.getUser(id);
	}*/
	
	@GetMapping("/initializeusers")
	public User initializeUsers() {
		User user = new User();
		user.setUserName("user");
		user.setPasswordHash(passwordEncoder.encode("user"));
		user.setCreatedBy("udo1hc");
		user.setCreatedDate(Instant.now());
		user.setActivated(true);
		Set<AuthorityEntity> authorities = new HashSet<>();
		authorities.add(new AuthorityEntity("USER"));
		user.setAuthorities(authorities);
		return userService.addUser(user);
	}
	
	@GetMapping("/test")
	public Object getdata() {
		return customUserdetailsv.getDatabyUser();
	}
	
	//create account
	@PostMapping("/user/insert")
	public User addUser(@RequestBody Map<String, String> payload) {
		AuthorityEntity authEntity = authorityService.getAuthorityByID(new Long(1)).get();
		
		User user = new User();
		String userName = payload.get("userName");
		String createdBy = payload.get("createdBy");
		//System.out.println(payload.get("userName"));
		
		//Object createdBy =  SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		System.out.println(createdBy);
		
		user.setUserName(userName);
		user.setActivated(false);
		user.getAuthorities().add(authEntity);
		user.setCreatedBy(createdBy);
		Instant now = Instant.now();
		user.setCreatedDate(now);
		user.setPasswordHash(util.PassWordGeneration(8));
		
		System.out.println(user.getPasswordHash());
		
		return userService.addUser(user);
		//return null;
	}

	
	@PutMapping("/user/enable/{userName}")
	public User updateActived(@PathVariable String userName) {
		User user = userService.findbyUserName(userName).get();
		user.setActivated(true);
		return userService.updateUser(user);
	}
	
	@PutMapping("/user/disable/{userName}")
	public User updatedeActived(@PathVariable String userName) {
		User user = userService.findbyUserName(userName).get();
		user.setActivated(false);
		return userService.updateUser(user);
	}
	
	@GetMapping("/user/{userName}")
	public User getUserbyUserName(@PathVariable String userName) {
		return userService.findbyUserName(userName).get();		
	}
	
	/*@GetMapping("/user")
	public Object  currentUserName(Authentication user) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("authorities",user.getAuthorities().toArray());
		map.put("username", user.getName());
        return user;
    }*/
	
	/*@GetMapping("/user")
	public Object  currentUserName() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }*/
}
