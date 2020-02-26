package com.bosch.dee.onboarding.service;

import javax.mail.internet.MimeMessage;

import org.apache.commons.codec.CharEncoding;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.MessageSource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.thymeleaf.spring5.SpringTemplateEngine;

@Service
public class EmailService {

	private final JavaMailSender javaMailSender;
	private final MessageSource messageSource;
	private final SpringTemplateEngine templateEngine;
	
	@Value("${spring.mail.serverDefaultFrom}")
	private String serverDefaultFrom;
	
	@Autowired
	public EmailService(JavaMailSender javaMailSender, MessageSource messageSource,
			SpringTemplateEngine templateEngine) {
		this.javaMailSender = javaMailSender;
		this.messageSource = messageSource;
		this.templateEngine = templateEngine;
	}
	

	@Async
	public void sendPushNotificationEmail(String to, String subject, String content, boolean isMultipart, boolean isHTML) {
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		try {
			MimeMessageHelper message = new MimeMessageHelper(mimeMessage, isMultipart, CharEncoding.UTF_8);
			message.setTo(to);
			message.setSubject(subject);
			message.setFrom(serverDefaultFrom);
			message.setText(content, isHTML);
			javaMailSender.send(mimeMessage);
		}
		catch(Exception e) {
			System.out.print("Cannot send email");
			e.printStackTrace();
		}
		
	}
}
