package com.bosch.dee.onboarding.controller;

import java.security.Principal;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.bosch.dee.onboarding.entity.Assigment;
import com.bosch.dee.onboarding.entity.Newcomer;
import com.bosch.dee.onboarding.entity.NewcomerAssigment;
import com.bosch.dee.onboarding.serviceImpl.AssigmentServiceImpl;
import com.bosch.dee.onboarding.serviceImpl.CredentialServiceImpl;
import com.bosch.dee.onboarding.serviceImpl.NewcomerAssigmentServiceImpl;
import com.bosch.dee.onboarding.serviceImpl.NewcomerServiceImpl;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

@CrossOrigin(origins = "*")
@RequestMapping(value = "/newcomer")
@RestController
public class NewComerController {

	@Autowired
	private NewcomerServiceImpl newcomerSvImpl;

	@Autowired
	private AssigmentServiceImpl assignmentSvImp;

	@Autowired
	NewcomerAssigmentServiceImpl newcomerAssigmentSvImpl;

	@Autowired
	CredentialServiceImpl credentialSvImpl;

	@RequestMapping("/user")
	public Principal Newcomer(Principal newcomer) {
		return newcomer;
	}

	@RequestMapping("/userdetail")
	public Object userDetail(Principal user) throws JsonMappingException, JsonProcessingException {
		Map<String, Object> mapCredential = credentialSvImpl.getCredential(user);

		return mapCredential;
	}

	// This api is used to save a list of onboarding associate
	// username: who import excel file (save list newcomer)
	@PostMapping("/save")
	public void saveJSONToDB(@RequestBody List<Newcomer> Newcomers, Principal user)
			throws JsonMappingException, JsonProcessingException {
		List<Assigment> Assigments = assignmentSvImp.findAll();
		Set<NewcomerAssigment> NewcomerAssigmentSet;
		List<Newcomer> NewcomerList = newcomerSvImpl.save(Newcomers);

		// put Assignment for newcomer
		for (Newcomer newcomer : NewcomerList) {
			NewcomerAssigmentSet = new HashSet<>();
			for (Assigment assigment : Assigments) {
				// NewcomerAssigmentSet.add(new NewcomerAssigment(Newcomer, Assigment,
				// "PENDING"));
				NewcomerAssigment tempNA = new NewcomerAssigment();
				tempNA.setNewcomer(newcomer);
				tempNA.setAssigment(assigment);
				tempNA.setStatus("In-Progress");
				NewcomerAssigmentSet.add(tempNA);
			}
			newcomerAssigmentSvImpl.save(NewcomerAssigmentSet);
		}

		// create a account (disable account)
		System.out.println(user.toString());

		Map<String, Object> mapCredential = credentialSvImpl.getCredential(user);

		String token = mapCredential.get("tokenValue").toString();
		String tokenType = mapCredential.get("tokenType").toString();
		// create acount for newcomer
		for (Newcomer newcomer : NewcomerList) {
			ResponseEntity<String> response = newcomerSvImpl.insertAccount(String.valueOf(newcomer.getId()),
					user.getName(), token, tokenType);
		}
	}

	// This api is used to get all onboarding associates
	@GetMapping("/all")
	public List<Newcomer> findAll() {

		return newcomerSvImpl.findAll();
	}

	// This api is used to get information of 1 onboarding associate
	@GetMapping("/{id}")
	public Optional<Newcomer> findById(@PathVariable() String id) {
		Long i = Long.parseLong(id);
		return newcomerSvImpl.findOne(i);
	}

	// This api is used to save 1 onboarding associate and create an disable account
	// for newcomer
	@PostMapping("/insert")
	public ResponseEntity<String> insert(@RequestBody Newcomer newcomer, Principal user)
			throws JsonMappingException, JsonProcessingException {
		List<Assigment> Assigments = assignmentSvImp.findAll();
		Set<NewcomerAssigment> NewcomerAssigmentSet = new HashSet<>();

		Newcomer newNewcomer = newcomerSvImpl.save(newcomer);

		for (Assigment assigment : Assigments) {
			// NewcomerAssigmentSet.add(new NewcomerAssigment(newNewcomer, Assigment,
			// "PENDING"));
			NewcomerAssigment newcomerAssignmet = new NewcomerAssigment();
			newcomerAssignmet.setNewcomer(newNewcomer);
			newcomerAssignmet.setAssigment(assigment);
			newcomerAssignmet.setStatus("In-Progress");
			NewcomerAssigmentSet.add(newcomerAssignmet);
		}
		newcomerAssigmentSvImpl.save(NewcomerAssigmentSet);

		System.out.println(user.toString());

		Map<String, Object> mapCredential = credentialSvImpl.getCredential(user);

		String token = mapCredential.get("tokenValue").toString();
		String tokenType = mapCredential.get("tokenType").toString();
		// mapCredential.get("userName");

		ResponseEntity<String> response = newcomerSvImpl.insertAccount(String.valueOf(newNewcomer.getId()),
				user.getName(), token, tokenType);

		// Object mm = credentialSvImpl.getCredential(user);
		return ResponseEntity.status(response.getStatusCode()).body(response.getBody());
	}

	@GetMapping("/page")
	private Page<Newcomer> findAll(Pageable pageable) {
		return newcomerSvImpl.findAll(pageable);
	}

	// This api is used to call total number of onboarding associates
	@GetMapping("/count")
	private Long count() {
		return newcomerSvImpl.count();
	}

	// This api is used to edit 1 onboarding associate
	@PutMapping("/edit")
	private Newcomer update(@RequestBody Newcomer newcomer) {
		return newcomerSvImpl.update(newcomer);
	}

	// This api is used to delete 1 onboarding associate
	@PutMapping("/delete")
	private void delete(@RequestBody Newcomer newcomer) {

		List<NewcomerAssigment> nvaInprogress = newcomerAssigmentSvImpl.findAllByNewcomerIdandStatus(newcomer.getId(),
				"In-Progress");
		List<NewcomerAssigment> nvaOverdue = newcomerAssigmentSvImpl.findAllByNewcomerIdandStatus(newcomer.getId(),
				"Overdue");

		newcomerAssigmentSvImpl.delete(nvaInprogress);
		newcomerAssigmentSvImpl.delete(nvaOverdue);
		newcomerSvImpl.delete(newcomer);
	}

}
