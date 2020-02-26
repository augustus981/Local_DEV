package com.bosch.dee.onboarding.controller;

import java.util.*;

import com.bosch.dee.onboarding.data.PushData;
import com.bosch.dee.onboarding.entity.Assigment;
import com.bosch.dee.onboarding.entity.Newcomer;
import com.bosch.dee.onboarding.entity.NewcomerAssigment;
import com.bosch.dee.onboarding.service.EmailService;
import com.bosch.dee.onboarding.serviceImpl.AssigmentServiceImpl;
import com.bosch.dee.onboarding.serviceImpl.NewcomerAssigmentServiceImpl;
import com.bosch.dee.onboarding.serviceImpl.NewcomerServiceImpl;

import net.bytebuddy.implementation.bind.annotation.AllArguments.Assignment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.ls.LSInput;

@CrossOrigin(origins = "*")
@RequestMapping(value = "/assigment")
@RestController
public class AssigmentController {
	@Autowired
	private final AssigmentServiceImpl assigmentServiceImpl;

	@Autowired
	private NewcomerAssigmentServiceImpl newcomerAssigmentServiceImpl;

	@Autowired
	private NewcomerServiceImpl newcomerSvImpl;

	@Autowired
	private EmailService emailService;

	public AssigmentController(AssigmentServiceImpl assigmentServiceImpl,
			NewcomerAssigmentServiceImpl newcomerAssigmentServiceImpl) {
		super();
		this.assigmentServiceImpl = assigmentServiceImpl;
		this.newcomerAssigmentServiceImpl = newcomerAssigmentServiceImpl;
	}

	// This api is used to get all onboarding associates
	@GetMapping("/all")
	public List<Assigment> findAll() {
		return assigmentServiceImpl.findAll();
	}

	// This api is used to get information of 1 Assigment
	@GetMapping("/{id}")
	public Optional<Assigment> findById(@PathVariable String id) {
		Long i = Long.parseLong(id);
		return assigmentServiceImpl.findOne(i);
	}

	// This api is used to save 1 Induction Assignment
	@PostMapping("/insert_assignment_induction")
	public Assigment insertInductionAssignment(@RequestBody Assigment assigment) {
		assigment.setChecklistType("Induction");
		return assigmentServiceImpl.save(assigment);
	}

	// This api is used to save 1 Competence Assignment
	@PostMapping("/insert_assignment_competence")
	public Assigment insertCompetenceAssignment(@RequestBody Assigment assigment) {
		assigment.setChecklistType("Competence");
		return assigmentServiceImpl.save(assigment);
	}

	// This api is used to call total number of Assigments
	@GetMapping("/count")
	private Long count() {
		return assigmentServiceImpl.count();
	}

	// This api is used to edit 1 Assigment
	@PutMapping("/edit")
	private Assigment update(@RequestBody Assigment Assigment) {
		return assigmentServiceImpl.update(Assigment);
	}

	// This api is used to delete 1 Assigment
	@PutMapping("/delete")
	private void delete(@RequestBody Assigment Assigment) {
		assigmentServiceImpl.delete(Assigment);
	}

	// return a list newcomerassignment belong to checklistType
	private List<NewcomerAssigment> getListAssignmentByType(List<NewcomerAssigment> listna, String checklistType) {
		for (int i = 0; i < listna.size(); i++) {
			if (!listna.get(i).getAssigment().getChecklistType().equalsIgnoreCase(checklistType)) {
				System.out.println(listna.get(i).getNewcomer().getName());
				System.out.println(listna.get(i).getAssigment().getChecklistType());
				listna.remove(i);
				i--;
			}
		}
		return listna;
	}

	// show all newcomers have Competence pending tasks (hr manager)
	@GetMapping("/newcomer_pendingtask_competence")
	public List<Newcomer> findAllAssociateHasPendingTaskCompetence() {
		List<NewcomerAssigment> AssigmentsProgress = newcomerAssigmentServiceImpl.findAllByStatus("In-Progress");
		List<NewcomerAssigment> AssigmentsOverdue = newcomerAssigmentServiceImpl.findAllByStatus("Overdue");

		List<NewcomerAssigment> result = new ArrayList<>();

		result.addAll(AssigmentsProgress);
		result.addAll(AssigmentsOverdue);

		// filter by Induction checklistType
		result = getListAssignmentByType(result, "Competence");

		// get newcomer in List NewcomerAssigment
		Map<Long, Newcomer> userMap = new HashMap<>();

		List<Newcomer> newcomers = new ArrayList<>();

		for (NewcomerAssigment item : result) {
			userMap.put(item.getNewcomer().getId(), item.getNewcomer());
		}
		userMap.forEach((k, v) -> {
			newcomers.add(v);
		});
		return newcomers;
	}

	// show all newcomers have induction pending tasks (hr manager)
	@GetMapping("/newcomer_pendingtask_induction")
	public List<Newcomer> findAllAssociateHasPendingTaskInduction() {
		List<NewcomerAssigment> AssigmentsProgress = newcomerAssigmentServiceImpl.findAllByStatus("In-Progress");
		List<NewcomerAssigment> AssigmentsOverdue = newcomerAssigmentServiceImpl.findAllByStatus("Overdue");

		List<NewcomerAssigment> result = new ArrayList<>();

		result.addAll(AssigmentsProgress);
		result.addAll(AssigmentsOverdue);

		// filter by Induction checklistType
		result = getListAssignmentByType(result, "Induction");

		// get newcomer in List NewcomerAssigment
		Map<Long, Newcomer> userMap = new HashMap<>();

		List<Newcomer> newcomers = new ArrayList<>();

		for (NewcomerAssigment item : result) {
			userMap.put(item.getNewcomer().getId(), item.getNewcomer());
		}
		userMap.forEach((k, v) -> {
			newcomers.add(v);
		});
		return newcomers;
	}

	// show Induction pending task (In-progress, Overdue) relate to newcomer (hr
	// manager)
	@GetMapping("/pendingtask_induction/{newcomer_id}")
	public List<NewcomerAssigment> findAllPendingTaskInductionByNewcomerID(
			@PathVariable("newcomer_id") Long newcomerId) {
		List<NewcomerAssigment> AssigmentsProgress = newcomerAssigmentServiceImpl
				.findAllByNewcomerIdandStatus(newcomerId, "In-Progress");
		List<NewcomerAssigment> AssigmentsOverdue = newcomerAssigmentServiceImpl
				.findAllByNewcomerIdandStatus(newcomerId, "Overdue");
		List<NewcomerAssigment> result = new ArrayList<>();

		result.addAll(AssigmentsProgress);
		result.addAll(AssigmentsOverdue);

		result = getListAssignmentByType(result, "Induction");

		return result;
	}

	// show Competence pending task (In-progress, Overdue) relate newcomer (hr
	// manager)
	@GetMapping("/pendingtask_competence/{newcomer_id}")
	public List<NewcomerAssigment> findAllPendingTaskCompetenceByNewcomerID(
			@PathVariable("newcomer_id") Long newcomerId) {
		List<NewcomerAssigment> AssigmentsProgress = newcomerAssigmentServiceImpl
				.findAllByNewcomerIdandStatus(newcomerId, "In-Progress");
		List<NewcomerAssigment> AssigmentsOverdue = newcomerAssigmentServiceImpl
				.findAllByNewcomerIdandStatus(newcomerId, "Overdue");
		List<NewcomerAssigment> result = new ArrayList<>();

		result.addAll(AssigmentsProgress);
		result.addAll(AssigmentsOverdue);

		result = getListAssignmentByType(result, "Competence");

		return result;
	}

	// send email to new comer to push effort on check list
	@PostMapping("/push_notification")
	public void pushNotification(@RequestBody PushData pushData) {
		Newcomer newComer = newcomerSvImpl.findOne(pushData.getUserID()).get();
		String text = newComer.getGender().equals("Male") ? "Mr. " : "Ms. ";
		String to = newComer.getEmail();
		String newComerName = newComer.getLastName() + " " + newComer.getName();
		String subject = assigmentServiceImpl.findOne(pushData.getTaskID()).get().getTask() + " task";
		String content = "<p> Dear " + text + newComerName + ", </p>";
		content += "<p> " + pushData.getMessage() + "</p>";
		content += "<p> Please access to this website to complete your task:  <a href=\"http://10.184.93.88:7002\"\r\n"
				+ "                                target=\"_blank\">E-Onboarding</a></p>";
		content += "<p> This email is sent automatically, please don't reply this email. </p>";
		content += "<p> Thank you. </p>";
		emailService.sendPushNotificationEmail(to, subject, content, true, true);

	}
}
