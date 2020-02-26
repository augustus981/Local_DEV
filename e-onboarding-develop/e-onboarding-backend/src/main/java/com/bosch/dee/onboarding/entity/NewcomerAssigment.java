package com.bosch.dee.onboarding.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="newcomer_assigment")
public class NewcomerAssigment {
    
    @Id
    @GeneratedValue( strategy=GenerationType.AUTO )
    private long id;
    @ManyToOne
    @JoinColumn(name = "newcomer_id")
    private Newcomer newcomer;
    @ManyToOne
    @JoinColumn(name = "assigment_id")
    private Assigment assigment;    
    private String assignedDate;
    private String dueDate;
    private String status;
    private String remark;
    
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Newcomer getNewcomer() {
		return newcomer;
	}
	public void setNewcomer(Newcomer newcomer) {
		this.newcomer = newcomer;
	}
	public Assigment getAssigment() {
		return assigment;
	}
	public void setAssigment(Assigment assigment) {
		this.assigment = assigment;
	}
	public String getAssignedDate() {
		return assignedDate;
	}
	public void setAssignedDate(String assignedDate) {
		this.assignedDate = assignedDate;
	}
	public String getDueDate() {
		return dueDate;
	}
	public void setDueDate(String dueDate) {
		this.dueDate = dueDate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
}
