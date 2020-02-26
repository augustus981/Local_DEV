package com.bosch.dee.eauth.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.authority.mapping.GrantedAuthoritiesMapper;
import org.springframework.security.core.authority.mapping.SimpleAuthorityMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableOAuth2Client;

import com.bosch.dee.eauth.provider.CustomDaoAuthenticationProvider;
import com.bosch.dee.eauth.service.CustomUserDetailsService;

@Configuration
@EnableWebSecurity
@EnableOAuth2Client
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {


	@Value("${spring.datasource.url}")
    private String datasourceUrl;

    @Value("${spring.datasource.driver-class-name}")
    private String dbDriverClassName;

    @Value("${spring.datasource.username}")
    private String dbUsername;

    @Value("${spring.datasource.password}")
    private String dbPassword;
    	
	@Autowired
	private CustomUserDetailsService userService;

	@Autowired
	private PasswordEncoder passwordEncoder;
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
    
    @Bean
	public GrantedAuthoritiesMapper grantedAuthoritiesMapper() {
		SimpleAuthorityMapper simpleAuthorityMapper = new SimpleAuthorityMapper();
		simpleAuthorityMapper.setPrefix("ROLE_");
		simpleAuthorityMapper.setConvertToUpperCase(true);
		return simpleAuthorityMapper;
	}
    
//    @Bean
//    public DataSource dataSource() {
//        final DriverManagerDataSource dataSource = new DriverManagerDataSource();
//
//        dataSource.setDriverClassName(dbDriverClassName);
//        dataSource.setUrl(datasourceUrl);
//        dataSource.setUsername(dbUsername);
//        dataSource.setPassword(dbPassword);
//        return dataSource;
//    }
    
    @Bean(name = "authenticationProvider")
	public AuthenticationProvider authenticationProvider() {
		AuthenticationProvider customDaoAuthenticationProvider = new CustomDaoAuthenticationProvider(userService, passwordEncoder);
		return customDaoAuthenticationProvider;
	}
	
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
        	.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.NEVER).and()
            .authorizeRequests()
            .antMatchers("/login**").permitAll()
            .antMatchers("/api/**").permitAll()
            .antMatchers("/css/**").permitAll()
            .antMatchers("/images/**").permitAll() 
            .anyRequest().authenticated()
            //.and().csrf()
            .and().formLogin().loginPage("/login");
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    	auth.authenticationProvider(authenticationProvider());
//        auth
//            .inMemoryAuthentication()
//            .withUser("user").password(passwordEncoder().encode("user"))
//            	.roles("USER")
//            .and().withUser("admin").password(passwordEncoder().encode("admin"))
//            	.roles("USER", "ADMIN");        
        
    }
}
