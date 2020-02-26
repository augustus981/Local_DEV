package com.bosch.dee.eauth.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.provider.ClientDetails;
import org.springframework.security.oauth2.provider.ClientDetailsService;
import org.springframework.security.oauth2.provider.ClientRegistrationException;
import org.springframework.security.oauth2.provider.client.BaseClientDetails;
import org.springframework.stereotype.Service;

import com.bosch.dee.eauth.entity.Client;
import com.bosch.dee.eauth.repository.ClientDetailsRepository;

@Service
public class CustomClientDetailsService implements ClientDetailsService {

	@Autowired
	ClientDetailsRepository clientDetailsRepository;
	
	@Override
	public ClientDetails loadClientByClientId(String clientId) throws ClientRegistrationException {
		Client client = clientDetailsRepository.findById(clientId)
				.orElseThrow(() -> new ClientRegistrationException(clientId + " not found"));
		BaseClientDetails clientDetails = new BaseClientDetails(clientId,
				client.getResourceIds(),
				client.getScope(),
				client.getAuthorizedGrantTypes(),
				client.getAuthorities(),
				client.getRedirectUri());
		clientDetails.setClientSecret(client.getClientSecret());
		clientDetails.setAccessTokenValiditySeconds(client.getAccessTokenValidity());
		clientDetails.setRefreshTokenValiditySeconds(client.getRefreshTokenValidity());
		clientDetails.addAdditionalInformation("INFO", client.getAdditionalInformation());
		Set<String> autoApproveScopes = new HashSet<String>();
		autoApproveScopes.add(client.getAutoapprove());
		clientDetails.setAutoApproveScopes(autoApproveScopes);
		return clientDetails;
	}

}
