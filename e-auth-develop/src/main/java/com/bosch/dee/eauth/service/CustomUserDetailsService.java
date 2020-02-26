package com.bosch.dee.eauth.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.bosch.dee.eauth.entity.User;
import com.bosch.dee.eauth.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        User user = userRepository.findByUserName(userName)
        		.orElseThrow(() -> new UsernameNotFoundException(userName + " not found"));
	    return new org.springframework.security.core.userdetails.User(
	    		userName, user.getPasswordHash(), getAuthorities(user));
    }    
    
    public User findUserById(String id) throws UsernameNotFoundException {
        User user = userRepository.findById(id).orElse(null);
        return user;
    }
    
    public User save(User user) {
        User result = userRepository.save(user);
        return result;
    }

    private static Collection<? extends GrantedAuthority> getAuthorities(User user) {
        String[] userRoles = user.getAuthorities().stream().map((role) -> role.getName()).toArray(String[]::new);
        Collection<GrantedAuthority> authorities = AuthorityUtils.createAuthorityList(userRoles);
        return authorities;
    }
    
    public Object getDatabyUser() {
    	RestTemplate rt = new RestTemplate();
    	
    	//String url = "http://localhost:7002/onboarding/newcomer/"+userName;
    	String url = "http://localhost:7002/onboarding/newcomer/all";
    	
    	Object response = rt.getForEntity(url, Object.class);
    	System.out.println(response.toString());
    	return null;
    }
}