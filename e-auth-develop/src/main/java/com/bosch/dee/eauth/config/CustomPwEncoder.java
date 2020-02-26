package com.bosch.dee.eauth.config;

import org.springframework.security.crypto.password.PasswordEncoder;

public class CustomPwEncoder implements PasswordEncoder{

	@Override
	public String encode(CharSequence rawPassword) {
		//System.out.println("pass: "+rawPassword);
		return rawPassword.toString();
	}

	@Override
	public boolean matches(CharSequence rawPassword, String encodedPassword) {
		System.out.println(rawPassword +"---"+encodedPassword);
		if(encode(rawPassword).equals(encodedPassword)) {
			//System.out.println("right");
			return true;
		}
			
		return false;
	}

}
 	