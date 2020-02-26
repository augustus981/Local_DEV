package com.bosch.dee.eauth.config;

import java.security.KeyPair;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.core.io.Resource;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.KeyStoreKeyFactory;

import com.bosch.dee.eauth.service.CustomClientDetailsService;
import com.bosch.dee.eauth.service.CustomUserDetailsService;

@Configuration
@EnableAuthorizationServer
@Order(6)
public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {

    @Value("${jwt.certificate.store.file}")
    private Resource keystore;

    @Value("${jwt.certificate.store.password}")
    private String keystorePassword;

    @Value("${jwt.certificate.key.alias}")
    private String keyAlias;

    @Value("${jwt.certificate.key.password}")
    private String keyPassword;

    @Autowired
    private CustomClientDetailsService customClientDetailsService;
    
    @Autowired
    private CustomUserDetailsService customUserDetailsService;    
    
    @Bean
    public PasswordEncoder passwordEncoder() {
    	
        return new CustomPwEncoder();
    }

    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
    	clients.withClientDetails(customClientDetailsService);
//        clients.inMemory()
//            .withClient("dee")
//	            .secret(passwordEncoder().encode("secret"))
//	            .redirectUris("http://localhost:8080/login")
//	            .authorizedGrantTypes("authorization_code", "refresh_token")
//	            .scopes("READ")
//	            .autoApprove(true)
//	            .accessTokenValiditySeconds(30)
//	            .refreshTokenValiditySeconds(1800)
//            .and().withClient("onboarding")
//	            .secret(passwordEncoder().encode("secret"))
//	            .redirectUris("http://localhost:7002/onboarding/login")
//	            .authorizedGrantTypes("authorization_code", "refresh_token")
//	            .scopes("	")
//	            .autoApprove(true)
//	            .accessTokenValiditySeconds(30)
//	            .refreshTokenValiditySeconds(1800)
//	         .and().withClient("edata")
//	            .secret(passwordEncoder().encode("secret"))
//	            .redirectUris("http://localhost:7001/login")
//	            .authorizedGrantTypes("password")
//	            .scopes("READ")
//	            .autoApprove(true)
//	            .accessTokenValiditySeconds(180)
//	            .refreshTokenValiditySeconds(1800);
        
    }

    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        endpoints
            .accessTokenConverter(jwtAccessTokenConverter())
            .userDetailsService(customUserDetailsService);
    }

    @Bean
    public JwtAccessTokenConverter jwtAccessTokenConverter() {
        KeyStoreKeyFactory keyStoreKeyFactory = new KeyStoreKeyFactory(
            keystore, keystorePassword.toCharArray());
        KeyPair keyPair = keyStoreKeyFactory.getKeyPair(
            keyAlias, keyPassword.toCharArray());
        JwtAccessTokenConverter converter = new JwtAccessTokenConverter();
        converter.setKeyPair(keyPair);
        return converter;
    }
}