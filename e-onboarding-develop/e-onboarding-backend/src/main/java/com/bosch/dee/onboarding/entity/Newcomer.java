package com.bosch.dee.onboarding.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="newcomer")
public class Newcomer {
    
    @Id
    @GeneratedValue( strategy=GenerationType.AUTO )
    @Column(name = "newcomer_id")
    private long id;
    private String name;
    private String lastName;
    private String gender;
    private String email;
    private String phone;
    private String address;
    private String competence;
    private Long joinDate;
    private String userGroup;
    private String remark;
    private Integer probationTime;
    private boolean approved;
    
    @JsonIgnore
    @OneToMany(mappedBy = "newcomer")
    Set<NewcomerAssigment> assigments;
    
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCompetence() {
		return competence;
	}
	public void setCompetence(String competence) {
		this.competence = competence;
	}
	public Long getJoinDate() {
		return joinDate;
	}
	public void setJoinDate(Long joinDate) {
		this.joinDate = joinDate;
	}
	public String getUserGroup() {
		return userGroup;
	}
	public void setUserGroup(String userGroup) {
		this.userGroup = userGroup;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public Set<NewcomerAssigment> getAssigments() {
		return assigments;
	}
	public void setAssigments(Set<NewcomerAssigment> assigments) {
		this.assigments = assigments;
	}
	public Integer getProbationTime() {
		return probationTime;
	}
	public void setProbationTime(Integer probationTime) {
		this.probationTime = probationTime;
	}
	public boolean isApproved() {
		return approved;
	}
	public void setApproved(boolean approved) {
		this.approved = approved;
	}
    
}
