package com.bosch.dee.onboarding.serviceImpl;

import java.util.HashMap;
import java.util.Map;

import java.security.Principal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class CredentialServiceImpl {
	
	/*public Map<String, Object> getCredential() throws JsonMappingException, JsonProcessingException {
		Object principal = SecurityContextHolder.getContext().getAuthentication().getDetails();//get detail login (token, session...)
		String userName = SecurityContextHolder.getContext().getAuthentication().getName();

		ObjectMapper objectMapper = new ObjectMapper();
		//System.out.println(principal.toString());
		
		JsonNode jsonRoot = objectMapper.convertValue(principal, JsonNode.class);
		String rm = jsonRoot.get("remoteAddress").asText();
		String token = jsonRoot.get("tokenValue").asText();
		String tokenType = jsonRoot.get("tokenType").asText();
		
		//System.out.println(token);
		
		Map<String, Object> map = new HashMap<>();
		map.put("tokenValue", token);
		map.put("tokenType", tokenType);
		map.put("userName", userName);

		return map;
	}*/
	
	public Map<String, Object> getCredential(Principal principal) throws JsonMappingException, JsonProcessingException {
		//Object principal = SecurityContextHolder.getContext().getAuthentication().getDetails();//get detail login (token, session...)
		//String userName = SecurityContextHolder.getContext().getAuthentication().getName();
		System.out.println(principal.toString());
		String userName = principal.getName();

		ObjectMapper objectMapper = new ObjectMapper();
		//System.out.println(principal.toString());
		
		JsonNode jsonRoot = objectMapper.convertValue(principal, JsonNode.class);
		JsonNode jsnodeDetail = jsonRoot.get("details");
		//System.out.println(jsonRoot.toString());
		String rm = jsnodeDetail.get("remoteAddress").asText();
		String token = jsnodeDetail.get("tokenValue").asText();
		String tokenType = jsnodeDetail.get("tokenType").asText();
		
		//System.out.println(token);
		
		Map<String, Object> map = new HashMap<>();
		map.put("tokenValue", token);
		map.put("tokenType", tokenType);
		map.put("userName", userName);

		return map;
	}
	
	

}
