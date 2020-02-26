package com.bosch.dee.edata.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Pattern;

@Entity
@Table(name = "user_info")
public class UserInfo {
	
	@Id
	@Pattern(regexp = "^[_'.@A-Za-z0-9-]*$")	
	@Column(name = "user_id", length = 50, unique = true, nullable = false)
	private String userId;
	@Column(name = "user_name", length = 255)
	private String userName;
	@Column(name = "user_email", length = 255)
	private String userEmail;
	@Column(name = "user_phone", length = 50)
	private String userPhone;
	@Column(name = "user_address", length = 255)
	private String userAddress;
	@Column(name = "employee_Code", length = 50)
	private String employeeCode;
	@Column(name = "company_code", length = 50)
	private String companyCode;
	
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getUserPhone() {
		return userPhone;
	}
	public void setUserPhone(String userPhone) {
		this.userPhone = userPhone;
	}
	public String getUserAddress() {
		return userAddress;
	}
	public void setUserAddress(String userAddress) {
		this.userAddress = userAddress;
	}
	public String getEmployeeCode() {
		return employeeCode;
	}
	public void setEmployeeCode(String employeeCode) {
		this.employeeCode = employeeCode;
	}
	public String getCompanyCode() {
		return companyCode;
	}
	public void setCompanyCode(String companyCode) {
		this.companyCode = companyCode;
	}

}
