package com.bosch.dee.edata.controller;

import java.security.Principal;
import java.util.HashSet;
import java.util.Set;

import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Because this application is also a User Info Resource Server, we expose info
 * about the logged in user at:
 *
 * http://<host>/user
 */
@RestController
@CrossOrigin(origins = "*")
public class UserInfoController {

	@RequestMapping("/user")
	public Principal user(Principal user) {
		//TODO where to add custom ROLES for users
		Set<GrantedAuthority> authorities = new HashSet<GrantedAuthority>();
		authorities.add(new SimpleGrantedAuthority("Associate"));
		AnonymousAuthenticationToken token = new AnonymousAuthenticationToken("far32ewwwq", user.getName(), authorities);
		return token;
	}
	
	@RequestMapping("/hrmanager")
	public Principal hrmanager(Principal user) {
		//TODO where to add custom ROLES for users
		Set<GrantedAuthority> authorities = new HashSet<GrantedAuthority>();
		authorities.add(new SimpleGrantedAuthority("HR Manager"));
		AnonymousAuthenticationToken token = new AnonymousAuthenticationToken("hrm32ewwwq", user.getName(), authorities);
		return token;
	}
	

	@RequestMapping("/hr")
	public Principal hr(Principal user) {
		//TODO where to add custom ROLES for users
		Set<GrantedAuthority> authorities = new HashSet<GrantedAuthority>();
		authorities.add(new SimpleGrantedAuthority("HR"));
		AnonymousAuthenticationToken token = new AnonymousAuthenticationToken("hrr32ewwwq", user.getName(), authorities);
		return token;
	}
	
	@RequestMapping("/groupmanager")
	public Principal groupManager(Principal user) {
		//TODO where to add custom ROLES for users
		Set<GrantedAuthority> authorities = new HashSet<GrantedAuthority>();
		authorities.add(new SimpleGrantedAuthority("Group Manager"));
		AnonymousAuthenticationToken token = new AnonymousAuthenticationToken("grm32ewwwq", user.getName(), authorities);
		return token;
	}

}
