package com.bosch.dee.onboarding.serviceImpl;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.bosch.dee.onboarding.entity.Newcomer;
import com.bosch.dee.onboarding.repository.NewcomerRepository;
import com.bosch.dee.onboarding.service.NewcomerService;

@Service
public class NewcomerServiceImpl implements NewcomerService{

	@Autowired
	private final NewcomerRepository newcomerRepository;

	

	public NewcomerServiceImpl(NewcomerRepository newcomerRepository) {
		super();
		this.newcomerRepository = newcomerRepository;
	}

	public void deleteAllUsers() {
		newcomerRepository.deleteAll();
	}
	
	public Optional<Newcomer> findById(String id){
		long uID = Long.parseLong(id);
		return newcomerRepository.findById(uID);
	}
	@Override
	public Newcomer save(Newcomer user) {
		return newcomerRepository.save(user);
	}

	@Override
	public List<Newcomer> save(List<Newcomer> users) {

		return newcomerRepository.saveAll(users);
	}

	@Override
	public Optional<Newcomer> findOne(Long id) {		
		return newcomerRepository.findById(id);
	}

	@Override
	public List<Newcomer> findAll() {
		return newcomerRepository.findAll();
	}

	@Override
	public List<Newcomer> findAll(List<Long> ids) {
		return newcomerRepository.findAllById(ids);
	}

	@Override
	public long count() {
		return this.findAll().size();
	}

	@Override
	public Newcomer update(Newcomer user) {
		return newcomerRepository.save(user);
	}

	@Override
	public Page<Newcomer> findAll(Pageable page) {
		Page<Newcomer> p = newcomerRepository.findAll(page);
		return p;
	}

	@Override
	public void delete(Newcomer user) {
		newcomerRepository.delete(user);
	}

	@Override
	public void delete(List<Newcomer> users) {
		for(Newcomer user : users) {
			newcomerRepository.delete(user);
		}
	}

	@Override
	public void deleteAll() {
		newcomerRepository.deleteAll();
	}
	
	@Override
	public boolean exists(Long id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		
	}
	
	public Object createAccount(String userName) {
		
		return null;
	}

	@Override
	public ResponseEntity<String> insertAccount(String userName, String createdBy, String token, String tokenType) {
		String urlInsert = "http://10.184.93.88:7000/auth/api/user/insert";

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.add("Authorization", tokenType + " " + token);
		headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));


		System.out.println(headers.toString());

		Map<String, Object> hmap = new HashMap<>();
		hmap.put("userName", userName);
		hmap.put("createdBy", createdBy);
		
		HttpEntity<Map<String, Object>> request = new HttpEntity<Map<String, Object>>(hmap,headers);
		
		System.out.println("body: "+request.getBody().toString());

		RestTemplate restTemplate = new RestTemplate();

		ResponseEntity<String> response = restTemplate.postForEntity(urlInsert, request, String.class);
		System.out.println(response);
		return ResponseEntity.status(response.getStatusCode()).body(response.getBody());

	}

	/*@Override
	public ResponseEntity<String> insertAccount(String userName) throws JsonMappingException, JsonProcessingException {
		Map<String, Object> map = credentialServiceImpl.getCredential();
		
		//String name = payload.get("userName");
		String token = map.get("tokenValue").toString();
		String tokenType = map.get("tokenType").toString();
		String createdBy = map.get("userName").toString();
		//String userName = map.get("userName").toString();

		String urlInsert = "http://10.184.93.88:7000/auth/api/user/insert";

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.add("Authorization", tokenType + " " + token);
		headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));


		System.out.println(headers.toString());

		Map<String, Object> hmap = new HashMap<>();
		hmap.put("userName", userName);
		hmap.put("createdBy", createdBy);
		
		HttpEntity<Map<String, Object>> request = new HttpEntity<Map<String, Object>>(hmap,headers);
		
		System.out.println("body: "+request.getBody().toString());

		RestTemplate restTemplate = new RestTemplate();

		ResponseEntity<String> response = restTemplate.postForEntity(urlInsert, request, String.class);
		System.out.println(response);
		return ResponseEntity.status(response.getStatusCode()).body(response.getBody());
	}*/

}
