package com.bosch.dee.eauth.provider;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.bosch.dee.eauth.entity.User;
import com.bosch.dee.eauth.exception.OverLoginAttempException;
import com.bosch.dee.eauth.service.CustomUserDetailsService;

public class CustomDaoAuthenticationProvider extends DaoAuthenticationProvider {

	private final Logger logger = LoggerFactory.getLogger(CustomDaoAuthenticationProvider.class);

	private CustomUserDetailsService customUserDetailsService;

	public CustomDaoAuthenticationProvider(CustomUserDetailsService customUserDetailsService, PasswordEncoder passwordEncoder) {
		this.customUserDetailsService = customUserDetailsService;
		super.setUserDetailsService(customUserDetailsService);
		super.setPasswordEncoder(passwordEncoder);
	}

	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		// Determine username
		String username = (authentication.getPrincipal() == null) ? "NONE_PROVIDED" : authentication.getName();
		UserDetails userDetails = null;
		Object employeeCode = authentication.getPrincipal();
		
		// check if username exist in db and username is de-active
		try {
			userDetails = retrieveUser(username, (UsernamePasswordAuthenticationToken) authentication);

		} catch (UsernameNotFoundException notFound) {
			logger.debug("User '" + username + "' not found");
			 
    		if (hideUserNotFoundExceptions) {		
				throw new BadCredentialsException(messages
						.getMessage("AbstractUserDetailsAuthenticationProvider.badCredentials", "Bad credentials"));
			} else {
				throw notFound;
			}
        	
		}
		
		// check if account is over login attempt, >= 3
		try {
			additionalAuthenticationChecks(userDetails, (UsernamePasswordAuthenticationToken) authentication);
		} catch (AuthenticationException exception) {
			User user = customUserDetailsService.findUserById(username);			 
        	if(null != user) {
        		Integer currentError = user.getLoginAttempt();
        		user.setLoginAttempt(currentError+1);
        		customUserDetailsService.save(user);
        		if (currentError >= 2) {
        			throw new OverLoginAttempException("Exceed login attempt of " + currentError);
        		}
        	}
			throw exception;
		}

		Object principalToReturn = userDetails;

		return createSuccessAuthentication(principalToReturn, authentication, userDetails);
	}
	
}